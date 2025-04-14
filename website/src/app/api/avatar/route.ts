import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';
import OpenAI from 'openai';
import heicConvert from 'heic-convert';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Supported image formats
const SUPPORTED_FORMATS = ['jpeg', 'jpg', 'png', 'webp', 'heic'];
const MAX_IMAGE_SIZE = 4 * 1024 * 1024; // 4MB

/**
 * Process image data into a format compatible with OpenAI
 * Handles various input formats and converts as needed
 */
async function processImage(imageData: string): Promise<string> {
  try {
    // Extract the base64 data from various possible formats
    let base64Data = imageData;
    if (base64Data.includes('base64,')) {
      base64Data = base64Data.split('base64,')[1];
    }

    // Decode base64 to buffer
    const buffer = Buffer.from(base64Data, 'base64');
    
    // Identify image format
    const imageInfo = await sharp(buffer).metadata();
    const format = imageInfo.format?.toLowerCase() || '';
    
    // Handle HEIC format specifically
    if (format === 'heic') {
      const convertedBuffer = await heicConvert({
        buffer: buffer,
        format: 'JPEG',
        quality: 90
      });
      return `data:image/jpeg;base64,${Buffer.from(convertedBuffer).toString('base64')}`;
    }
    
    // Process other formats with sharp
    if (!SUPPORTED_FORMATS.includes(format)) {
      // Convert to JPEG if format not supported
      const processedBuffer = await sharp(buffer)
        .jpeg({ quality: 90 })
        .toBuffer();
      return `data:image/jpeg;base64,${processedBuffer.toString('base64')}`;
    }
    
    // Resize if image is too large
    if (buffer.length > MAX_IMAGE_SIZE) {
      const processedBuffer = await sharp(buffer)
        .resize(1024, null, { fit: 'inside' })
        .toBuffer();
      return `data:image/${format};base64,${processedBuffer.toString('base64')}`;
    }
    
    // Return properly formatted base64
    return `data:image/${format};base64,${base64Data}`;
  } catch (error) {
    console.error('Image processing error:', error);
    throw new Error('Failed to process image. Please ensure it is a valid image file.');
  }
}

/**
 * Analyze physical characteristics using OpenAI vision model
 */
async function analyzePhysicalCharacteristics(
  frontImage: string, 
  sideImage?: string,
  measurements?: {
    height?: number,
    weight?: number,
    chest?: number,
    waist?: number,
    hips?: number
  }
): Promise<any> {
  try {
    // Prepare messages for OpenAI
    const messages = [
      {
        role: "system",
        content: `You are an expert in physical characteristics analysis for avatar creation.
        Extract detailed information about the person in the image to help create a digital avatar.
        Focus on face shape, body proportions, distinctive features, skin tone, and other physical traits.
        Your analysis should be structured and detailed enough for Metahuman-compatible character creation.
        ${measurements ? 'Use the provided measurements as additional context: ' + JSON.stringify(measurements) : ''}
        Return results in JSON format.`
      },
      {
        role: "user",
        content: [
          { type: "text", text: "Analyze this person's physical characteristics in detail for avatar creation:" },
          { type: "image_url", image_url: { url: frontImage } }
        ]
      }
    ];
    
    // Add side image if provided
    if (sideImage) {
      messages[1].content.push(
        { type: "text", text: "Side view:" },
        { type: "image_url", image_url: { url: sideImage } }
      );
    }
    
    // Make API call to OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages as any,
      response_format: { type: "json_object" },
      max_tokens: 1500,
    });
    
    // Parse and return the analysis
    const analysisText = response.choices[0]?.message?.content || "{}";
    return JSON.parse(analysisText);
  } catch (error) {
    console.error('OpenAI analysis error:', error);
    throw new Error('Failed to analyze physical characteristics. Please try again later.');
  }
}

/**
 * Generate avatar parameters based on the analysis
 */
function generateAvatarParameters(analysisResult: any): any {
  // Map analysis results to avatar parameters
  // This would be customized based on your specific avatar system
  const avatarParams = {
    id: uuidv4(),
    timestamp: new Date().toISOString(),
    analysis: analysisResult,
    metahumanParams: {
      // Map analysis to specific Metahuman parameters
      // This is a placeholder - actual mapping would depend on Metahuman API
      faceShape: analysisResult.faceShape || 'oval',
      skinTone: analysisResult.skinTone || 'medium',
      eyeColor: analysisResult.eyeColor || 'brown',
      hairStyle: analysisResult.hairStyle || 'short',
      hairColor: analysisResult.hairColor || 'brown',
      bodyType: analysisResult.bodyType || 'average',
      // Additional parameters would be generated here
    }
  };
  
  return avatarParams;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = await request.json();
    const { frontImage, sideImage, measurements } = data;
    
    // Validate request
    if (!frontImage) {
      return NextResponse.json({ error: 'Front image is required' }, { status: 400 });
    }
    
    // Validate height is provided
    if (!measurements || !measurements.height) {
      return NextResponse.json({ error: 'Height measurement is required' }, { status: 400 });
    }
    
    // Process images
    const processedFrontImage = await processImage(frontImage);
    let processedSideImage;
    if (sideImage) {
      processedSideImage = await processImage(sideImage);
    }
    
    // Analyze physical characteristics
    const analysisResult = await analyzePhysicalCharacteristics(
      processedFrontImage, 
      processedSideImage, 
      measurements
    );
    
    // Generate avatar parameters
    const avatarParams = generateAvatarParameters(analysisResult);
    
    // Return the avatar generation result
    return NextResponse.json({
      success: true,
      avatarId: avatarParams.id,
      result: avatarParams
    });
    
  } catch (error: any) {
    console.error('Avatar generation error:', error);
    
    // Handle different error types
    if (error.message.includes('OpenAI')) {
      return NextResponse.json({ 
        error: 'Error communicating with AI service', 
        details: error.message 
      }, { status: 503 });
    }
    
    if (error.message.includes('image')) {
      return NextResponse.json({ 
        error: 'Image processing error', 
        details: error.message 
      }, { status: 400 });
    }
    
    // Generic error response
    return NextResponse.json({ 
      error: 'Failed to generate avatar', 
      details: error.message 
    }, { status: 500 });
  }
} 