# Swag Avatar Generator

A Next.js application that creates personalized avatars from user photos to enable virtual clothing try-ons using OpenAI's vision models.

## Features

- Image processing of various formats (JPEG, PNG, WebP, HEIC, etc.)
- OpenAI integration for physical characteristic analysis
- Measurement input for more accurate avatar generation
- User-friendly interface for uploading photos and viewing results

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- OpenAI API key

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:

```
OPENAI_API_KEY=your_openai_api_key_here
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to access the application.

## API Documentation

### Avatar Generation Endpoint

**POST /api/avatar**

Generate an avatar based on user photos and optional measurements.

**Request Body:**

```json
{
  "frontImage": "base64_encoded_image",
  "sideImage": "base64_encoded_image", // Optional
  "measurements": { // Optional
    "height": 180,
    "weight": 75,
    "chest": 100,
    "waist": 80,
    "hips": 90
  }
}
```

**Response:**

```json
{
  "success": true,
  "avatarId": "uuid",
  "result": {
    "id": "uuid",
    "timestamp": "ISO-8601 timestamp",
    "analysis": {
      // Physical characteristics analysis from OpenAI
    },
    "metahumanParams": {
      // Parameters for Metahuman avatar creation
    }
  }
}
```

## Image Processing Features

- Base64 decoding and encoding
- Format detection and conversion
- HEIC format support
- Image resizing for API compatibility
- Error handling for invalid images

## Dependencies

- Next.js - React framework
- OpenAI - AI vision model integration
- Sharp - Image processing
- heic-convert - HEIC format support
- uuid - Unique ID generation
- Tailwind CSS - Styling

## Environment Variables

| Variable | Description |
|----------|-------------|
| OPENAI_API_KEY | Your OpenAI API key for accessing the vision models |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
