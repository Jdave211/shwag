(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/@react-spring/three/node_modules/@react-spring/core/dist/react-spring-core.esm.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BailSignal": (()=>BailSignal),
    "Controller": (()=>Controller),
    "FrameValue": (()=>FrameValue),
    "Interpolation": (()=>Interpolation),
    "Spring": (()=>Spring),
    "SpringContext": (()=>SpringContext),
    "SpringRef": (()=>SpringRef),
    "SpringValue": (()=>SpringValue),
    "Trail": (()=>Trail),
    "Transition": (()=>Transition),
    "config": (()=>config),
    "inferTo": (()=>inferTo),
    "interpolate": (()=>interpolate),
    "to": (()=>to),
    "update": (()=>update),
    "useChain": (()=>useChain),
    "useInView": (()=>useInView),
    "useResize": (()=>useResize),
    "useScroll": (()=>useScroll),
    "useSpring": (()=>useSpring),
    "useSpringRef": (()=>useSpringRef),
    "useSpringValue": (()=>useSpringValue),
    "useSprings": (()=>useSprings),
    "useTrail": (()=>useTrail),
    "useTransition": (()=>useTransition)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/node_modules/@react-spring/shared/dist/react-spring-shared.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/node_modules/@react-spring/shared/dist/react-spring-shared.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring$2d$rafz$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/rafz/dist/react-spring-rafz.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/node_modules/@react-spring/animated/dist/react-spring-animated.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$types$2f$animated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/types/animated.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$types$2f$interpolation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/types/interpolation.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined);
    return _extends.apply(this, arguments);
}
function callProp(value, ...args) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(value) ? value(...args) : value;
}
const matchProp = (value, key)=>value === true || !!(key && value && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(value) ? value(key) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(value).includes(key)));
const resolveProp = (prop, key)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(prop) ? key && prop[key] : prop;
const getDefaultProp = (props, key)=>props.default === true ? props[key] : props.default ? props.default[key] : undefined;
const noopTransform = (value)=>value;
const getDefaultProps = (props, transform = noopTransform)=>{
    let keys = DEFAULT_PROPS;
    if (props.default && props.default !== true) {
        props = props.default;
        keys = Object.keys(props);
    }
    const defaults = {};
    for (const key of keys){
        const value = transform(props[key], key);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(value)) {
            defaults[key] = value;
        }
    }
    return defaults;
};
const DEFAULT_PROPS = [
    'config',
    'onProps',
    'onStart',
    'onChange',
    'onPause',
    'onResume',
    'onRest'
];
const RESERVED_PROPS = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1
};
function getForwardProps(props) {
    const forward = {};
    let count = 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eachProp"])(props, (value, prop)=>{
        if (!RESERVED_PROPS[prop]) {
            forward[prop] = value;
            count++;
        }
    });
    if (count) {
        return forward;
    }
}
function inferTo(props) {
    const to = getForwardProps(props);
    if (to) {
        const out = {
            to
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eachProp"])(props, (val, key)=>key in to || (out[key] = val));
        return out;
    }
    return _extends({}, props);
}
function computeGoal(value) {
    value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(value);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].arr(value) ? value.map(computeGoal) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAnimatedString"])(value) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].createStringInterpolator({
        range: [
            0,
            1
        ],
        output: [
            value,
            value
        ]
    })(1) : value;
}
function hasProps(props) {
    for(const _ in props)return true;
    return false;
}
function isAsyncTo(to) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(to) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].arr(to) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(to[0]);
}
function detachRefs(ctrl, ref) {
    var _ctrl$ref;
    (_ctrl$ref = ctrl.ref) == null ? void 0 : _ctrl$ref.delete(ctrl);
    ref == null ? void 0 : ref.delete(ctrl);
}
function replaceRef(ctrl, ref) {
    if (ref && ctrl.ref !== ref) {
        var _ctrl$ref2;
        (_ctrl$ref2 = ctrl.ref) == null ? void 0 : _ctrl$ref2.delete(ctrl);
        ref.add(ctrl);
        ctrl.ref = ref;
    }
}
function useChain(refs, timeSteps, timeFrame = 1000) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])({
        "useChain.useIsomorphicLayoutEffect": ()=>{
            if (timeSteps) {
                let prevDelay = 0;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(refs, {
                    "useChain.useIsomorphicLayoutEffect": (ref, i)=>{
                        const controllers = ref.current;
                        if (controllers.length) {
                            let delay = timeFrame * timeSteps[i];
                            if (isNaN(delay)) delay = prevDelay;
                            else prevDelay = delay;
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(controllers, {
                                "useChain.useIsomorphicLayoutEffect": (ctrl)=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(ctrl.queue, {
                                        "useChain.useIsomorphicLayoutEffect": (props)=>{
                                            const memoizedDelayProp = props.delay;
                                            props.delay = ({
                                                "useChain.useIsomorphicLayoutEffect": (key)=>delay + callProp(memoizedDelayProp || 0, key)
                                            })["useChain.useIsomorphicLayoutEffect"];
                                        }
                                    }["useChain.useIsomorphicLayoutEffect"]);
                                }
                            }["useChain.useIsomorphicLayoutEffect"]);
                            ref.start();
                        }
                    }
                }["useChain.useIsomorphicLayoutEffect"]);
            } else {
                let p = Promise.resolve();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(refs, {
                    "useChain.useIsomorphicLayoutEffect": (ref)=>{
                        const controllers = ref.current;
                        if (controllers.length) {
                            const queues = controllers.map({
                                "useChain.useIsomorphicLayoutEffect.queues": (ctrl)=>{
                                    const q = ctrl.queue;
                                    ctrl.queue = [];
                                    return q;
                                }
                            }["useChain.useIsomorphicLayoutEffect.queues"]);
                            p = p.then({
                                "useChain.useIsomorphicLayoutEffect": ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(controllers, {
                                        "useChain.useIsomorphicLayoutEffect": (ctrl, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(queues[i] || [], {
                                                "useChain.useIsomorphicLayoutEffect": (update)=>ctrl.queue.push(update)
                                            }["useChain.useIsomorphicLayoutEffect"])
                                    }["useChain.useIsomorphicLayoutEffect"]);
                                    return Promise.all(ref.start());
                                }
                            }["useChain.useIsomorphicLayoutEffect"]);
                        }
                    }
                }["useChain.useIsomorphicLayoutEffect"]);
            }
        }
    }["useChain.useIsomorphicLayoutEffect"]);
}
const config = {
    default: {
        tension: 170,
        friction: 26
    },
    gentle: {
        tension: 120,
        friction: 14
    },
    wobbly: {
        tension: 180,
        friction: 12
    },
    stiff: {
        tension: 210,
        friction: 20
    },
    slow: {
        tension: 280,
        friction: 60
    },
    molasses: {
        tension: 280,
        friction: 120
    }
};
const defaults = _extends({}, config.default, {
    mass: 1,
    damping: 1,
    easing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["easings"].linear,
    clamp: false
});
class AnimationConfig {
    constructor(){
        this.tension = void 0;
        this.friction = void 0;
        this.frequency = void 0;
        this.damping = void 0;
        this.mass = void 0;
        this.velocity = 0;
        this.restVelocity = void 0;
        this.precision = void 0;
        this.progress = void 0;
        this.duration = void 0;
        this.easing = void 0;
        this.clamp = void 0;
        this.bounce = void 0;
        this.decay = void 0;
        this.round = void 0;
        Object.assign(this, defaults);
    }
}
function mergeConfig(config, newConfig, defaultConfig) {
    if (defaultConfig) {
        defaultConfig = _extends({}, defaultConfig);
        sanitizeConfig(defaultConfig, newConfig);
        newConfig = _extends({}, defaultConfig, newConfig);
    }
    sanitizeConfig(config, newConfig);
    Object.assign(config, newConfig);
    for(const key in defaults){
        if (config[key] == null) {
            config[key] = defaults[key];
        }
    }
    let { mass, frequency, damping } = config;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(frequency)) {
        if (frequency < 0.01) frequency = 0.01;
        if (damping < 0) damping = 0;
        config.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
        config.friction = 4 * Math.PI * damping * mass / frequency;
    }
    return config;
}
function sanitizeConfig(config, props) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.decay)) {
        config.duration = undefined;
    } else {
        const isTensionConfig = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.tension) || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.friction);
        if (isTensionConfig || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.frequency) || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.damping) || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.mass)) {
            config.duration = undefined;
            config.decay = undefined;
        }
        if (isTensionConfig) {
            config.frequency = undefined;
        }
    }
}
const emptyArray = [];
class Animation {
    constructor(){
        this.changed = false;
        this.values = emptyArray;
        this.toValues = null;
        this.fromValues = emptyArray;
        this.to = void 0;
        this.from = void 0;
        this.config = new AnimationConfig();
        this.immediate = false;
    }
}
function scheduleProps(callId, { key, props, defaultProps, state, actions }) {
    return new Promise((resolve, reject)=>{
        var _props$cancel;
        let delay;
        let timeout;
        let cancel = matchProp((_props$cancel = props.cancel) != null ? _props$cancel : defaultProps == null ? void 0 : defaultProps.cancel, key);
        if (cancel) {
            onStart();
        } else {
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.pause)) {
                state.paused = matchProp(props.pause, key);
            }
            let pause = defaultProps == null ? void 0 : defaultProps.pause;
            if (pause !== true) {
                pause = state.paused || matchProp(pause, key);
            }
            delay = callProp(props.delay || 0, key);
            if (pause) {
                state.resumeQueue.add(onResume);
                actions.pause();
            } else {
                actions.resume();
                onResume();
            }
        }
        function onPause() {
            state.resumeQueue.add(onResume);
            state.timeouts.delete(timeout);
            timeout.cancel();
            delay = timeout.time - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring$2d$rafz$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].now();
        }
        function onResume() {
            if (delay > 0 && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].skipAnimation) {
                state.delayed = true;
                timeout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring$2d$rafz$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].setTimeout(onStart, delay);
                state.pauseQueue.add(onPause);
                state.timeouts.add(timeout);
            } else {
                onStart();
            }
        }
        function onStart() {
            if (state.delayed) {
                state.delayed = false;
            }
            state.pauseQueue.delete(onPause);
            state.timeouts.delete(timeout);
            if (callId <= (state.cancelId || 0)) {
                cancel = true;
            }
            try {
                actions.start(_extends({}, props, {
                    callId,
                    cancel
                }), resolve);
            } catch (err) {
                reject(err);
            }
        }
    });
}
const getCombinedResult = (target, results)=>results.length == 1 ? results[0] : results.some((result)=>result.cancelled) ? getCancelledResult(target.get()) : results.every((result)=>result.noop) ? getNoopResult(target.get()) : getFinishedResult(target.get(), results.every((result)=>result.finished));
const getNoopResult = (value)=>({
        value,
        noop: true,
        finished: true,
        cancelled: false
    });
const getFinishedResult = (value, finished, cancelled = false)=>({
        value,
        finished,
        cancelled
    });
const getCancelledResult = (value)=>({
        value,
        cancelled: true,
        finished: false
    });
function runAsync(to, props, state, target) {
    const { callId, parentId, onRest } = props;
    const { asyncTo: prevTo, promise: prevPromise } = state;
    if (!parentId && to === prevTo && !props.reset) {
        return prevPromise;
    }
    return state.promise = (async ()=>{
        state.asyncId = callId;
        state.asyncTo = to;
        const defaultProps = getDefaultProps(props, (value, key)=>key === 'onRest' ? undefined : value);
        let preventBail;
        let bail;
        const bailPromise = new Promise((resolve, reject)=>(preventBail = resolve, bail = reject));
        const bailIfEnded = (bailSignal)=>{
            const bailResult = callId <= (state.cancelId || 0) && getCancelledResult(target) || callId !== state.asyncId && getFinishedResult(target, false);
            if (bailResult) {
                bailSignal.result = bailResult;
                bail(bailSignal);
                throw bailSignal;
            }
        };
        const animate = (arg1, arg2)=>{
            const bailSignal = new BailSignal();
            const skipAnimationSignal = new SkipAnimationSignal();
            return (async ()=>{
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].skipAnimation) {
                    stopAsync(state);
                    skipAnimationSignal.result = getFinishedResult(target, false);
                    bail(skipAnimationSignal);
                    throw skipAnimationSignal;
                }
                bailIfEnded(bailSignal);
                const props = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
                    to: arg1
                });
                props.parentId = callId;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eachProp"])(defaultProps, (value, key)=>{
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props[key])) {
                        props[key] = value;
                    }
                });
                const result = await target.start(props);
                bailIfEnded(bailSignal);
                if (state.paused) {
                    await new Promise((resume)=>{
                        state.resumeQueue.add(resume);
                    });
                }
                return result;
            })();
        };
        let result;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].skipAnimation) {
            stopAsync(state);
            return getFinishedResult(target, false);
        }
        try {
            let animating;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].arr(to)) {
                animating = (async (queue)=>{
                    for (const props of queue){
                        await animate(props);
                    }
                })(to);
            } else {
                animating = Promise.resolve(to(animate, target.stop.bind(target)));
            }
            await Promise.all([
                animating.then(preventBail),
                bailPromise
            ]);
            result = getFinishedResult(target.get(), true, false);
        } catch (err) {
            if (err instanceof BailSignal) {
                result = err.result;
            } else if (err instanceof SkipAnimationSignal) {
                result = err.result;
            } else {
                throw err;
            }
        } finally{
            if (callId == state.asyncId) {
                state.asyncId = parentId;
                state.asyncTo = parentId ? prevTo : undefined;
                state.promise = parentId ? prevPromise : undefined;
            }
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(onRest)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring$2d$rafz$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].batchedUpdates(()=>{
                onRest(result, target, target.item);
            });
        }
        return result;
    })();
}
function stopAsync(state, cancelId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flush"])(state.timeouts, (t)=>t.cancel());
    state.pauseQueue.clear();
    state.resumeQueue.clear();
    state.asyncId = state.asyncTo = state.promise = undefined;
    if (cancelId) state.cancelId = cancelId;
}
class BailSignal extends Error {
    constructor(){
        super('An async animation has been interrupted. You see this error because you ' + 'forgot to use `await` or `.catch(...)` on its returned promise.');
        this.result = void 0;
    }
}
class SkipAnimationSignal extends Error {
    constructor(){
        super('SkipAnimationSignal');
        this.result = void 0;
    }
}
const isFrameValue = (value)=>value instanceof FrameValue;
let nextId$1 = 1;
class FrameValue extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FluidValue"] {
    constructor(...args){
        super(...args);
        this.id = nextId$1++;
        this.key = void 0;
        this._priority = 0;
    }
    get priority() {
        return this._priority;
    }
    set priority(priority) {
        if (this._priority != priority) {
            this._priority = priority;
            this._onPriorityChange(priority);
        }
    }
    get() {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimated"])(this);
        return node && node.getValue();
    }
    to(...args) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].to(this, args);
    }
    interpolate(...args) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deprecateInterpolate"])();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].to(this, args);
    }
    toJSON() {
        return this.get();
    }
    observerAdded(count) {
        if (count == 1) this._attach();
    }
    observerRemoved(count) {
        if (count == 0) this._detach();
    }
    _attach() {}
    _detach() {}
    _onChange(value, idle = false) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callFluidObservers"])(this, {
            type: 'change',
            parent: this,
            value,
            idle
        });
    }
    _onPriorityChange(priority) {
        if (!this.idle) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["frameLoop"].sort(this);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callFluidObservers"])(this, {
            type: 'priority',
            parent: this,
            priority
        });
    }
}
const $P = Symbol.for('SpringPhase');
const HAS_ANIMATED = 1;
const IS_ANIMATING = 2;
const IS_PAUSED = 4;
const hasAnimated = (target)=>(target[$P] & HAS_ANIMATED) > 0;
const isAnimating = (target)=>(target[$P] & IS_ANIMATING) > 0;
const isPaused = (target)=>(target[$P] & IS_PAUSED) > 0;
const setActiveBit = (target, active)=>active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
const setPausedBit = (target, paused)=>paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;
class SpringValue extends FrameValue {
    constructor(arg1, arg2){
        super();
        this.key = void 0;
        this.animation = new Animation();
        this.queue = void 0;
        this.defaultProps = {};
        this._state = {
            paused: false,
            delayed: false,
            pauseQueue: new Set(),
            resumeQueue: new Set(),
            timeouts: new Set()
        };
        this._pendingCalls = new Set();
        this._lastCallId = 0;
        this._lastToId = 0;
        this._memoizedDuration = 0;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(arg1) || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(arg2)) {
            const props = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
                from: arg1
            });
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.default)) {
                props.default = true;
            }
            this.start(props);
        }
    }
    get idle() {
        return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
    }
    get goal() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(this.animation.to);
    }
    get velocity() {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimated"])(this);
        return node instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedValue"] ? node.lastVelocity || 0 : node.getPayload().map((node)=>node.lastVelocity || 0);
    }
    get hasAnimated() {
        return hasAnimated(this);
    }
    get isAnimating() {
        return isAnimating(this);
    }
    get isPaused() {
        return isPaused(this);
    }
    get isDelayed() {
        return this._state.delayed;
    }
    advance(dt) {
        let idle = true;
        let changed = false;
        const anim = this.animation;
        let { config, toValues } = anim;
        const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPayload"])(anim.to);
        if (!payload && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(anim.to)) {
            toValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(anim.to));
        }
        anim.values.forEach((node, i)=>{
            if (node.done) return;
            const to = node.constructor == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedString"] ? 1 : payload ? payload[i].lastPosition : toValues[i];
            let finished = anim.immediate;
            let position = to;
            if (!finished) {
                position = node.lastPosition;
                if (config.tension <= 0) {
                    node.done = true;
                    return;
                }
                let elapsed = node.elapsedTime += dt;
                const from = anim.fromValues[i];
                const v0 = node.v0 != null ? node.v0 : node.v0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].arr(config.velocity) ? config.velocity[i] : config.velocity;
                let velocity;
                const precision = config.precision || (from == to ? 0.005 : Math.min(1, Math.abs(to - from) * 0.001));
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(config.duration)) {
                    let p = 1;
                    if (config.duration > 0) {
                        if (this._memoizedDuration !== config.duration) {
                            this._memoizedDuration = config.duration;
                            if (node.durationProgress > 0) {
                                node.elapsedTime = config.duration * node.durationProgress;
                                elapsed = node.elapsedTime += dt;
                            }
                        }
                        p = (config.progress || 0) + elapsed / this._memoizedDuration;
                        p = p > 1 ? 1 : p < 0 ? 0 : p;
                        node.durationProgress = p;
                    }
                    position = from + config.easing(p) * (to - from);
                    velocity = (position - node.lastPosition) / dt;
                    finished = p == 1;
                } else if (config.decay) {
                    const decay = config.decay === true ? 0.998 : config.decay;
                    const e = Math.exp(-(1 - decay) * elapsed);
                    position = from + v0 / (1 - decay) * (1 - e);
                    finished = Math.abs(node.lastPosition - position) <= precision;
                    velocity = v0 * e;
                } else {
                    velocity = node.lastVelocity == null ? v0 : node.lastVelocity;
                    const restVelocity = config.restVelocity || precision / 10;
                    const bounceFactor = config.clamp ? 0 : config.bounce;
                    const canBounce = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(bounceFactor);
                    const isGrowing = from == to ? node.v0 > 0 : from < to;
                    let isMoving;
                    let isBouncing = false;
                    const step = 1;
                    const numSteps = Math.ceil(dt / step);
                    for(let n = 0; n < numSteps; ++n){
                        isMoving = Math.abs(velocity) > restVelocity;
                        if (!isMoving) {
                            finished = Math.abs(to - position) <= precision;
                            if (finished) {
                                break;
                            }
                        }
                        if (canBounce) {
                            isBouncing = position == to || position > to == isGrowing;
                            if (isBouncing) {
                                velocity = -velocity * bounceFactor;
                                position = to;
                            }
                        }
                        const springForce = -config.tension * 0.000001 * (position - to);
                        const dampingForce = -config.friction * 0.001 * velocity;
                        const acceleration = (springForce + dampingForce) / config.mass;
                        velocity = velocity + acceleration * step;
                        position = position + velocity * step;
                    }
                }
                node.lastVelocity = velocity;
                if (Number.isNaN(position)) {
                    console.warn(`Got NaN while animating:`, this);
                    finished = true;
                }
            }
            if (payload && !payload[i].done) {
                finished = false;
            }
            if (finished) {
                node.done = true;
            } else {
                idle = false;
            }
            if (node.setValue(position, config.round)) {
                changed = true;
            }
        });
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimated"])(this);
        const currVal = node.getValue();
        if (idle) {
            const finalVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(anim.to);
            if ((currVal !== finalVal || changed) && !config.decay) {
                node.setValue(finalVal);
                this._onChange(finalVal);
            } else if (changed && config.decay) {
                this._onChange(currVal);
            }
            this._stop();
        } else if (changed) {
            this._onChange(currVal);
        }
    }
    set(value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring$2d$rafz$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].batchedUpdates(()=>{
            this._stop();
            this._focus(value);
            this._set(value);
        });
        return this;
    }
    pause() {
        this._update({
            pause: true
        });
    }
    resume() {
        this._update({
            pause: false
        });
    }
    finish() {
        if (isAnimating(this)) {
            const { to, config } = this.animation;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring$2d$rafz$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].batchedUpdates(()=>{
                this._onStart();
                if (!config.decay) {
                    this._set(to, false);
                }
                this._stop();
            });
        }
        return this;
    }
    update(props) {
        const queue = this.queue || (this.queue = []);
        queue.push(props);
        return this;
    }
    start(to, arg2) {
        let queue;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(to)) {
            queue = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(to) ? to : _extends({}, arg2, {
                    to
                })
            ];
        } else {
            queue = this.queue || [];
            this.queue = [];
        }
        return Promise.all(queue.map((props)=>{
            const up = this._update(props);
            return up;
        })).then((results)=>getCombinedResult(this, results));
    }
    stop(cancel) {
        const { to } = this.animation;
        this._focus(this.get());
        stopAsync(this._state, cancel && this._lastCallId);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring$2d$rafz$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].batchedUpdates(()=>this._stop(to, cancel));
        return this;
    }
    reset() {
        this._update({
            reset: true
        });
    }
    eventObserved(event) {
        if (event.type == 'change') {
            this._start();
        } else if (event.type == 'priority') {
            this.priority = event.priority + 1;
        }
    }
    _prepareNode(props) {
        const key = this.key || '';
        let { to, from } = props;
        to = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(to) ? to[key] : to;
        if (to == null || isAsyncTo(to)) {
            to = undefined;
        }
        from = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(from) ? from[key] : from;
        if (from == null) {
            from = undefined;
        }
        const range = {
            to,
            from
        };
        if (!hasAnimated(this)) {
            if (props.reverse) [to, from] = [
                from,
                to
            ];
            from = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(from);
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(from)) {
                this._set(from);
            } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimated"])(this)) {
                this._set(to);
            }
        }
        return range;
    }
    _update(_ref, isLoop) {
        let props = _extends({}, _ref);
        const { key, defaultProps } = this;
        if (props.default) Object.assign(defaultProps, getDefaultProps(props, (value, prop)=>/^on/.test(prop) ? resolveProp(value, key) : value));
        mergeActiveFn(this, props, 'onProps');
        sendEvent(this, 'onProps', props, this);
        const range = this._prepareNode(props);
        if (Object.isFrozen(this)) {
            throw Error('Cannot animate a `SpringValue` object that is frozen. ' + 'Did you forget to pass your component to `animated(...)` before animating its props?');
        }
        const state = this._state;
        return scheduleProps(++this._lastCallId, {
            key,
            props,
            defaultProps,
            state,
            actions: {
                pause: ()=>{
                    if (!isPaused(this)) {
                        setPausedBit(this, true);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flushCalls"])(state.pauseQueue);
                        sendEvent(this, 'onPause', getFinishedResult(this, checkFinished(this, this.animation.to)), this);
                    }
                },
                resume: ()=>{
                    if (isPaused(this)) {
                        setPausedBit(this, false);
                        if (isAnimating(this)) {
                            this._resume();
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flushCalls"])(state.resumeQueue);
                        sendEvent(this, 'onResume', getFinishedResult(this, checkFinished(this, this.animation.to)), this);
                    }
                },
                start: this._merge.bind(this, range)
            }
        }).then((result)=>{
            if (props.loop && result.finished && !(isLoop && result.noop)) {
                const nextProps = createLoopUpdate(props);
                if (nextProps) {
                    return this._update(nextProps, true);
                }
            }
            return result;
        });
    }
    _merge(range, props, resolve) {
        if (props.cancel) {
            this.stop(true);
            return resolve(getCancelledResult(this));
        }
        const hasToProp = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(range.to);
        const hasFromProp = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(range.from);
        if (hasToProp || hasFromProp) {
            if (props.callId > this._lastToId) {
                this._lastToId = props.callId;
            } else {
                return resolve(getCancelledResult(this));
            }
        }
        const { key, defaultProps, animation: anim } = this;
        const { to: prevTo, from: prevFrom } = anim;
        let { to = prevTo, from = prevFrom } = range;
        if (hasFromProp && !hasToProp && (!props.default || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(to))) {
            to = from;
        }
        if (props.reverse) [to, from] = [
            from,
            to
        ];
        const hasFromChanged = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(from, prevFrom);
        if (hasFromChanged) {
            anim.from = from;
        }
        from = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(from);
        const hasToChanged = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(to, prevTo);
        if (hasToChanged) {
            this._focus(to);
        }
        const hasAsyncTo = isAsyncTo(props.to);
        const { config } = anim;
        const { decay, velocity } = config;
        if (hasToProp || hasFromProp) {
            config.velocity = 0;
        }
        if (props.config && !hasAsyncTo) {
            mergeConfig(config, callProp(props.config, key), props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0);
        }
        let node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimated"])(this);
        if (!node || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(to)) {
            return resolve(getFinishedResult(this, true));
        }
        const reset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.reset) ? hasFromProp && !props.default : !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(from) && matchProp(props.reset, key);
        const value = reset ? from : this.get();
        const goal = computeGoal(to);
        const isAnimatable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].num(goal) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].arr(goal) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAnimatedString"])(goal);
        const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));
        if (hasToChanged) {
            const nodeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimatedType"])(to);
            if (nodeType !== node.constructor) {
                if (immediate) {
                    node = this._set(goal);
                } else throw Error(`Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`);
            }
        }
        const goalType = node.constructor;
        let started = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(to);
        let finished = false;
        if (!started) {
            const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;
            if (hasToChanged || hasValueChanged) {
                finished = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(computeGoal(value), goal);
                started = !finished;
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(anim.immediate, immediate) && !immediate || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(config.decay, decay) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(config.velocity, velocity)) {
                started = true;
            }
        }
        if (finished && isAnimating(this)) {
            if (anim.changed && !reset) {
                started = true;
            } else if (!started) {
                this._stop(prevTo);
            }
        }
        if (!hasAsyncTo) {
            if (started || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(prevTo)) {
                anim.values = node.getPayload();
                anim.toValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(to) ? null : goalType == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedString"] ? [
                    1
                ] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(goal);
            }
            if (anim.immediate != immediate) {
                anim.immediate = immediate;
                if (!immediate && !reset) {
                    this._set(prevTo);
                }
            }
            if (started) {
                const { onRest } = anim;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(ACTIVE_EVENTS, (type)=>mergeActiveFn(this, props, type));
                const result = getFinishedResult(this, checkFinished(this, prevTo));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flushCalls"])(this._pendingCalls, result);
                this._pendingCalls.add(resolve);
                if (anim.changed) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring$2d$rafz$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].batchedUpdates(()=>{
                    anim.changed = !reset;
                    onRest == null ? void 0 : onRest(result, this);
                    if (reset) {
                        callProp(defaultProps.onRest, result);
                    } else {
                        anim.onStart == null ? void 0 : anim.onStart(result, this);
                    }
                });
            }
        }
        if (reset) {
            this._set(value);
        }
        if (hasAsyncTo) {
            resolve(runAsync(props.to, props, this._state, this));
        } else if (started) {
            this._start();
        } else if (isAnimating(this) && !hasToChanged) {
            this._pendingCalls.add(resolve);
        } else {
            resolve(getNoopResult(value));
        }
    }
    _focus(value) {
        const anim = this.animation;
        if (value !== anim.to) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidObservers"])(this)) {
                this._detach();
            }
            anim.to = value;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidObservers"])(this)) {
                this._attach();
            }
        }
    }
    _attach() {
        let priority = 0;
        const { to } = this.animation;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(to)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addFluidObserver"])(to, this);
            if (isFrameValue(to)) {
                priority = to.priority + 1;
            }
        }
        this.priority = priority;
    }
    _detach() {
        const { to } = this.animation;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(to)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["removeFluidObserver"])(to, this);
        }
    }
    _set(arg, idle = true) {
        const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(arg);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(value)) {
            const oldNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimated"])(this);
            if (!oldNode || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(value, oldNode.getValue())) {
                const nodeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimatedType"])(value);
                if (!oldNode || oldNode.constructor != nodeType) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAnimated"])(this, nodeType.create(value));
                } else {
                    oldNode.setValue(value);
                }
                if (oldNode) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring$2d$rafz$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].batchedUpdates(()=>{
                        this._onChange(value, idle);
                    });
                }
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimated"])(this);
    }
    _onStart() {
        const anim = this.animation;
        if (!anim.changed) {
            anim.changed = true;
            sendEvent(this, 'onStart', getFinishedResult(this, checkFinished(this, anim.to)), this);
        }
    }
    _onChange(value, idle) {
        if (!idle) {
            this._onStart();
            callProp(this.animation.onChange, value, this);
        }
        callProp(this.defaultProps.onChange, value, this);
        super._onChange(value, idle);
    }
    _start() {
        const anim = this.animation;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimated"])(this).reset((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(anim.to));
        if (!anim.immediate) {
            anim.fromValues = anim.values.map((node)=>node.lastPosition);
        }
        if (!isAnimating(this)) {
            setActiveBit(this, true);
            if (!isPaused(this)) {
                this._resume();
            }
        }
    }
    _resume() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].skipAnimation) {
            this.finish();
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["frameLoop"].start(this);
        }
    }
    _stop(goal, cancel) {
        if (isAnimating(this)) {
            setActiveBit(this, false);
            const anim = this.animation;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(anim.values, (node)=>{
                node.done = true;
            });
            if (anim.toValues) {
                anim.onChange = anim.onPause = anim.onResume = undefined;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callFluidObservers"])(this, {
                type: 'idle',
                parent: this
            });
            const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal != null ? goal : anim.to));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flushCalls"])(this._pendingCalls, result);
            if (anim.changed) {
                anim.changed = false;
                sendEvent(this, 'onRest', result, this);
            }
        }
    }
}
function checkFinished(target, to) {
    const goal = computeGoal(to);
    const value = computeGoal(target.get());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(value, goal);
}
function createLoopUpdate(props, loop = props.loop, to = props.to) {
    let loopRet = callProp(loop);
    if (loopRet) {
        const overrides = loopRet !== true && inferTo(loopRet);
        const reverse = (overrides || props).reverse;
        const reset = !overrides || overrides.reset;
        return createUpdate(_extends({}, props, {
            loop,
            default: false,
            pause: undefined,
            to: !reverse || isAsyncTo(to) ? to : undefined,
            from: reset ? props.from : undefined,
            reset
        }, overrides));
    }
}
function createUpdate(props) {
    const { to, from } = props = inferTo(props);
    const keys = new Set();
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(to)) findDefined(to, keys);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(from)) findDefined(from, keys);
    props.keys = keys.size ? Array.from(keys) : null;
    return props;
}
function declareUpdate(props) {
    const update = createUpdate(props);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(update.default)) {
        update.default = getDefaultProps(update);
    }
    return update;
}
function findDefined(values, keys) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eachProp"])(values, (value, key)=>value != null && keys.add(key));
}
const ACTIVE_EVENTS = [
    'onStart',
    'onRest',
    'onChange',
    'onPause',
    'onResume'
];
function mergeActiveFn(target, props, type) {
    target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : undefined;
}
function sendEvent(target, type, ...args) {
    var _target$animation$typ, _target$animation, _target$defaultProps$, _target$defaultProps;
    (_target$animation$typ = (_target$animation = target.animation)[type]) == null ? void 0 : _target$animation$typ.call(_target$animation, ...args);
    (_target$defaultProps$ = (_target$defaultProps = target.defaultProps)[type]) == null ? void 0 : _target$defaultProps$.call(_target$defaultProps, ...args);
}
const BATCHED_EVENTS = [
    'onStart',
    'onChange',
    'onRest'
];
let nextId = 1;
class Controller {
    constructor(props, flush){
        this.id = nextId++;
        this.springs = {};
        this.queue = [];
        this.ref = void 0;
        this._flush = void 0;
        this._initialProps = void 0;
        this._lastAsyncId = 0;
        this._active = new Set();
        this._changed = new Set();
        this._started = false;
        this._item = void 0;
        this._state = {
            paused: false,
            pauseQueue: new Set(),
            resumeQueue: new Set(),
            timeouts: new Set()
        };
        this._events = {
            onStart: new Map(),
            onChange: new Map(),
            onRest: new Map()
        };
        this._onFrame = this._onFrame.bind(this);
        if (flush) {
            this._flush = flush;
        }
        if (props) {
            this.start(_extends({
                default: true
            }, props));
        }
    }
    get idle() {
        return !this._state.asyncTo && Object.values(this.springs).every((spring)=>{
            return spring.idle && !spring.isDelayed && !spring.isPaused;
        });
    }
    get item() {
        return this._item;
    }
    set item(item) {
        this._item = item;
    }
    get() {
        const values = {};
        this.each((spring, key)=>values[key] = spring.get());
        return values;
    }
    set(values) {
        for(const key in values){
            const value = values[key];
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(value)) {
                this.springs[key].set(value);
            }
        }
    }
    update(props) {
        if (props) {
            this.queue.push(createUpdate(props));
        }
        return this;
    }
    start(props) {
        let { queue } = this;
        if (props) {
            queue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(props).map(createUpdate);
        } else {
            this.queue = [];
        }
        if (this._flush) {
            return this._flush(this, queue);
        }
        prepareKeys(this, queue);
        return flushUpdateQueue(this, queue);
    }
    stop(arg, keys) {
        if (arg !== !!arg) {
            keys = arg;
        }
        if (keys) {
            const springs = this.springs;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(keys), (key)=>springs[key].stop(!!arg));
        } else {
            stopAsync(this._state, this._lastAsyncId);
            this.each((spring)=>spring.stop(!!arg));
        }
        return this;
    }
    pause(keys) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(keys)) {
            this.start({
                pause: true
            });
        } else {
            const springs = this.springs;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(keys), (key)=>springs[key].pause());
        }
        return this;
    }
    resume(keys) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(keys)) {
            this.start({
                pause: false
            });
        } else {
            const springs = this.springs;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(keys), (key)=>springs[key].resume());
        }
        return this;
    }
    each(iterator) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eachProp"])(this.springs, iterator);
    }
    _onFrame() {
        const { onStart, onChange, onRest } = this._events;
        const active = this._active.size > 0;
        const changed = this._changed.size > 0;
        if (active && !this._started || changed && !this._started) {
            this._started = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flush"])(onStart, ([onStart, result])=>{
                result.value = this.get();
                onStart(result, this, this._item);
            });
        }
        const idle = !active && this._started;
        const values = changed || idle && onRest.size ? this.get() : null;
        if (changed && onChange.size) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flush"])(onChange, ([onChange, result])=>{
                result.value = values;
                onChange(result, this, this._item);
            });
        }
        if (idle) {
            this._started = false;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flush"])(onRest, ([onRest, result])=>{
                result.value = values;
                onRest(result, this, this._item);
            });
        }
    }
    eventObserved(event) {
        if (event.type == 'change') {
            this._changed.add(event.parent);
            if (!event.idle) {
                this._active.add(event.parent);
            }
        } else if (event.type == 'idle') {
            this._active.delete(event.parent);
        } else return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring$2d$rafz$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].onFrame(this._onFrame);
    }
}
function flushUpdateQueue(ctrl, queue) {
    return Promise.all(queue.map((props)=>flushUpdate(ctrl, props))).then((results)=>getCombinedResult(ctrl, results));
}
async function flushUpdate(ctrl, props, isLoop) {
    const { keys, to, from, loop, onRest, onResolve } = props;
    const defaults = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(props.default) && props.default;
    if (loop) {
        props.loop = false;
    }
    if (to === false) props.to = null;
    if (from === false) props.from = null;
    const asyncTo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].arr(to) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(to) ? to : undefined;
    if (asyncTo) {
        props.to = undefined;
        props.onRest = undefined;
        if (defaults) {
            defaults.onRest = undefined;
        }
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(BATCHED_EVENTS, (key)=>{
            const handler = props[key];
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(handler)) {
                const queue = ctrl['_events'][key];
                props[key] = ({ finished, cancelled })=>{
                    const result = queue.get(handler);
                    if (result) {
                        if (!finished) result.finished = false;
                        if (cancelled) result.cancelled = true;
                    } else {
                        queue.set(handler, {
                            value: null,
                            finished: finished || false,
                            cancelled: cancelled || false
                        });
                    }
                };
                if (defaults) {
                    defaults[key] = props[key];
                }
            }
        });
    }
    const state = ctrl['_state'];
    if (props.pause === !state.paused) {
        state.paused = props.pause;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flushCalls"])(props.pause ? state.pauseQueue : state.resumeQueue);
    } else if (state.paused) {
        props.pause = true;
    }
    const promises = (keys || Object.keys(ctrl.springs)).map((key)=>ctrl.springs[key].start(props));
    const cancel = props.cancel === true || getDefaultProp(props, 'cancel') === true;
    if (asyncTo || cancel && state.asyncId) {
        promises.push(scheduleProps(++ctrl['_lastAsyncId'], {
            props,
            state,
            actions: {
                pause: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["noop"],
                resume: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["noop"],
                start (props, resolve) {
                    if (cancel) {
                        stopAsync(state, ctrl['_lastAsyncId']);
                        resolve(getCancelledResult(ctrl));
                    } else {
                        props.onRest = onRest;
                        resolve(runAsync(asyncTo, props, state, ctrl));
                    }
                }
            }
        }));
    }
    if (state.paused) {
        await new Promise((resume)=>{
            state.resumeQueue.add(resume);
        });
    }
    const result = getCombinedResult(ctrl, await Promise.all(promises));
    if (loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props, loop, to);
        if (nextProps) {
            prepareKeys(ctrl, [
                nextProps
            ]);
            return flushUpdate(ctrl, nextProps, true);
        }
    }
    if (onResolve) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring$2d$rafz$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].batchedUpdates(()=>onResolve(result, ctrl, ctrl.item));
    }
    return result;
}
function getSprings(ctrl, props) {
    const springs = _extends({}, ctrl.springs);
    if (props) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(props), (props)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props.keys)) {
                props = createUpdate(props);
            }
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(props.to)) {
                props = _extends({}, props, {
                    to: undefined
                });
            }
            prepareSprings(springs, props, (key)=>{
                return createSpring(key);
            });
        });
    }
    setSprings(ctrl, springs);
    return springs;
}
function setSprings(ctrl, springs) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eachProp"])(springs, (spring, key)=>{
        if (!ctrl.springs[key]) {
            ctrl.springs[key] = spring;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addFluidObserver"])(spring, ctrl);
        }
    });
}
function createSpring(key, observer) {
    const spring = new SpringValue();
    spring.key = key;
    if (observer) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addFluidObserver"])(spring, observer);
    }
    return spring;
}
function prepareSprings(springs, props, create) {
    if (props.keys) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(props.keys, (key)=>{
            const spring = springs[key] || (springs[key] = create(key));
            spring['_prepareNode'](props);
        });
    }
}
function prepareKeys(ctrl, queue) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(queue, (props)=>{
        prepareSprings(ctrl.springs, props, (key)=>{
            return createSpring(key, ctrl);
        });
    });
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const _excluded$6 = [
    "children"
];
const SpringContext = (_ref)=>{
    let { children } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded$6);
    const inherited = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ctx);
    const pause = props.pause || !!inherited.pause, immediate = props.immediate || !!inherited.immediate;
    props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useMemoOne"])({
        "SpringContext.useMemoOne": ()=>({
                pause,
                immediate
            })
    }["SpringContext.useMemoOne"], [
        pause,
        immediate
    ]);
    const { Provider } = ctx;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Provider, {
        value: props
    }, children);
};
const ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;
function makeContext(target, init) {
    Object.assign(target, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(init));
    target.Provider._context = target;
    target.Consumer._context = target;
    return target;
}
const SpringRef = ()=>{
    const current = [];
    const SpringRef = function SpringRef(props) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deprecateDirectCall"])();
        const results = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(current, (ctrl, i)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props)) {
                results.push(ctrl.start());
            } else {
                const update = _getProps(props, ctrl, i);
                if (update) {
                    results.push(ctrl.start(update));
                }
            }
        });
        return results;
    };
    SpringRef.current = current;
    SpringRef.add = function(ctrl) {
        if (!current.includes(ctrl)) {
            current.push(ctrl);
        }
    };
    SpringRef.delete = function(ctrl) {
        const i = current.indexOf(ctrl);
        if (~i) current.splice(i, 1);
    };
    SpringRef.pause = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(current, (ctrl)=>ctrl.pause(...arguments));
        return this;
    };
    SpringRef.resume = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(current, (ctrl)=>ctrl.resume(...arguments));
        return this;
    };
    SpringRef.set = function(values) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(current, (ctrl)=>ctrl.set(values));
    };
    SpringRef.start = function(props) {
        const results = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(current, (ctrl, i)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(props)) {
                results.push(ctrl.start());
            } else {
                const update = this._getProps(props, ctrl, i);
                if (update) {
                    results.push(ctrl.start(update));
                }
            }
        });
        return results;
    };
    SpringRef.stop = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(current, (ctrl)=>ctrl.stop(...arguments));
        return this;
    };
    SpringRef.update = function(props) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(current, (ctrl, i)=>ctrl.update(this._getProps(props, ctrl, i)));
        return this;
    };
    const _getProps = function _getProps(arg, ctrl, index) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(arg) ? arg(index, ctrl) : arg;
    };
    SpringRef._getProps = _getProps;
    return SpringRef;
};
function useSprings(length, props, deps) {
    const propsFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(props) && props;
    if (propsFn && !deps) deps = [];
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSprings.useMemo[ref]": ()=>propsFn || arguments.length == 3 ? SpringRef() : void 0
    }["useSprings.useMemo[ref]"], []);
    const layoutId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const forceUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useForceUpdate"])();
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSprings.useMemo[state]": ()=>({
                ctrls: [],
                queue: [],
                flush (ctrl, updates) {
                    const springs = getSprings(ctrl, updates);
                    const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs).some({
                        "useSprings.useMemo[state]": (key)=>!ctrl.springs[key]
                    }["useSprings.useMemo[state]"]);
                    return canFlushSync ? flushUpdateQueue(ctrl, updates) : new Promise({
                        "useSprings.useMemo[state]": (resolve)=>{
                            setSprings(ctrl, springs);
                            state.queue.push({
                                "useSprings.useMemo[state]": ()=>{
                                    resolve(flushUpdateQueue(ctrl, updates));
                                }
                            }["useSprings.useMemo[state]"]);
                            forceUpdate();
                        }
                    }["useSprings.useMemo[state]"]);
                }
            })
    }["useSprings.useMemo[state]"], []);
    const ctrls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([
        ...state.ctrls
    ]);
    const updates = [];
    const prevLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["usePrev"])(length) || 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSprings.useMemo": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(ctrls.current.slice(length, prevLength), {
                "useSprings.useMemo": (ctrl)=>{
                    detachRefs(ctrl, ref);
                    ctrl.stop(true);
                }
            }["useSprings.useMemo"]);
            ctrls.current.length = length;
            declareUpdates(prevLength, length);
        }
    }["useSprings.useMemo"], [
        length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSprings.useMemo": ()=>{
            declareUpdates(0, Math.min(prevLength, length));
        }
    }["useSprings.useMemo"], deps);
    function declareUpdates(startIndex, endIndex) {
        for(let i = startIndex; i < endIndex; i++){
            const ctrl = ctrls.current[i] || (ctrls.current[i] = new Controller(null, state.flush));
            const update = propsFn ? propsFn(i, ctrl) : props[i];
            if (update) {
                updates[i] = declareUpdate(update);
            }
        }
    }
    const springs = ctrls.current.map((ctrl, i)=>getSprings(ctrl, updates[i]));
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SpringContext);
    const prevContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["usePrev"])(context);
    const hasContext = context !== prevContext && hasProps(context);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])({
        "useSprings.useIsomorphicLayoutEffect": ()=>{
            layoutId.current++;
            state.ctrls = ctrls.current;
            const { queue } = state;
            if (queue.length) {
                state.queue = [];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(queue, {
                    "useSprings.useIsomorphicLayoutEffect": (cb)=>cb()
                }["useSprings.useIsomorphicLayoutEffect"]);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(ctrls.current, {
                "useSprings.useIsomorphicLayoutEffect": (ctrl, i)=>{
                    ref == null ? void 0 : ref.add(ctrl);
                    if (hasContext) {
                        ctrl.start({
                            default: context
                        });
                    }
                    const update = updates[i];
                    if (update) {
                        replaceRef(ctrl, update.ref);
                        if (ctrl.ref) {
                            ctrl.queue.push(update);
                        } else {
                            ctrl.start(update);
                        }
                    }
                }
            }["useSprings.useIsomorphicLayoutEffect"]);
        }
    }["useSprings.useIsomorphicLayoutEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useOnce"])({
        "useSprings.useOnce": ()=>({
                "useSprings.useOnce": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(state.ctrls, {
                        "useSprings.useOnce": (ctrl)=>ctrl.stop(true)
                    }["useSprings.useOnce"]);
                }
            })["useSprings.useOnce"]
    }["useSprings.useOnce"]);
    const values = springs.map((x)=>_extends({}, x));
    return ref ? [
        values,
        ref
    ] : values;
}
function useSpring(props, deps) {
    const isFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(props);
    const [[values], ref] = useSprings(1, isFn ? props : [
        props
    ], isFn ? deps || [] : deps);
    return isFn || arguments.length == 2 ? [
        values,
        ref
    ] : values;
}
const initSpringRef = ()=>SpringRef();
const useSpringRef = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initSpringRef)[0];
const useSpringValue = (initial, props)=>{
    const springValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useConstant"])({
        "useSpringValue.useConstant[springValue]": ()=>new SpringValue(initial, props)
    }["useSpringValue.useConstant[springValue]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useOnce"])({
        "useSpringValue.useOnce": ()=>({
                "useSpringValue.useOnce": ()=>{
                    springValue.stop();
                }
            })["useSpringValue.useOnce"]
    }["useSpringValue.useOnce"]);
    return springValue;
};
function useTrail(length, propsArg, deps) {
    const propsFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(propsArg) && propsArg;
    if (propsFn && !deps) deps = [];
    let reverse = true;
    let passedRef = undefined;
    const result = useSprings(length, {
        "useTrail.useSprings[result]": (i, ctrl)=>{
            const props = propsFn ? propsFn(i, ctrl) : propsArg;
            passedRef = props.ref;
            reverse = reverse && props.reverse;
            return props;
        }
    }["useTrail.useSprings[result]"], deps || [
        {}
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])({
        "useTrail.useIsomorphicLayoutEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(result[1].current, {
                "useTrail.useIsomorphicLayoutEffect": (ctrl, i)=>{
                    const parent = result[1].current[i + (reverse ? 1 : -1)];
                    replaceRef(ctrl, passedRef);
                    if (ctrl.ref) {
                        if (parent) {
                            ctrl.update({
                                to: parent.springs
                            });
                        }
                        return;
                    }
                    if (parent) {
                        ctrl.start({
                            to: parent.springs
                        });
                    } else {
                        ctrl.start();
                    }
                }
            }["useTrail.useIsomorphicLayoutEffect"]);
        }
    }["useTrail.useIsomorphicLayoutEffect"], deps);
    if (propsFn || arguments.length == 3) {
        var _passedRef;
        const ref = (_passedRef = passedRef) != null ? _passedRef : result[1];
        ref['_getProps'] = (propsArg, ctrl, i)=>{
            const props = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(propsArg) ? propsArg(i, ctrl) : propsArg;
            if (props) {
                const parent = ref.current[i + (props.reverse ? 1 : -1)];
                if (parent) props.to = parent.springs;
                return props;
            }
        };
        return result;
    }
    return result[0];
}
let TransitionPhase;
(function(TransitionPhase) {
    TransitionPhase["MOUNT"] = "mount";
    TransitionPhase["ENTER"] = "enter";
    TransitionPhase["UPDATE"] = "update";
    TransitionPhase["LEAVE"] = "leave";
})(TransitionPhase || (TransitionPhase = {}));
function useTransition(data, props, deps) {
    const propsFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(props) && props;
    const { reset, sort, trail = 0, expires = true, exitBeforeEnter = false, onDestroyed, ref: propsRef, config: propsConfig } = propsFn ? propsFn() : props;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTransition.useMemo[ref]": ()=>propsFn || arguments.length == 3 ? SpringRef() : void 0
    }["useTransition.useMemo[ref]"], []);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(data);
    const transitions = [];
    const usedTransitions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevTransitions = reset ? null : usedTransitions.current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])({
        "useTransition.useIsomorphicLayoutEffect": ()=>{
            usedTransitions.current = transitions;
        }
    }["useTransition.useIsomorphicLayoutEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useOnce"])({
        "useTransition.useOnce": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(transitions, {
                "useTransition.useOnce": (t)=>{
                    ref == null ? void 0 : ref.add(t.ctrl);
                    t.ctrl.ref = ref;
                }
            }["useTransition.useOnce"]);
            return ({
                "useTransition.useOnce": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(usedTransitions.current, {
                        "useTransition.useOnce": (t)=>{
                            if (t.expired) {
                                clearTimeout(t.expirationId);
                            }
                            detachRefs(t.ctrl, ref);
                            t.ctrl.stop(true);
                        }
                    }["useTransition.useOnce"]);
                }
            })["useTransition.useOnce"];
        }
    }["useTransition.useOnce"]);
    const keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
    const expired = reset && usedTransitions.current || [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])({
        "useTransition.useIsomorphicLayoutEffect": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(expired, {
                "useTransition.useIsomorphicLayoutEffect": ({ ctrl, item, key })=>{
                    detachRefs(ctrl, ref);
                    callProp(onDestroyed, item, key);
                }
            }["useTransition.useIsomorphicLayoutEffect"])
    }["useTransition.useIsomorphicLayoutEffect"]);
    const reused = [];
    if (prevTransitions) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(prevTransitions, (t, i)=>{
        if (t.expired) {
            clearTimeout(t.expirationId);
            expired.push(t);
        } else {
            i = reused[i] = keys.indexOf(t.key);
            if (~i) transitions[i] = t;
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(items, (item, i)=>{
        if (!transitions[i]) {
            transitions[i] = {
                key: keys[i],
                item,
                phase: TransitionPhase.MOUNT,
                ctrl: new Controller()
            };
            transitions[i].ctrl.item = item;
        }
    });
    if (reused.length) {
        let i = -1;
        const { leave } = propsFn ? propsFn() : props;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(reused, (keyIndex, prevIndex)=>{
            const t = prevTransitions[prevIndex];
            if (~keyIndex) {
                i = transitions.indexOf(t);
                transitions[i] = _extends({}, t, {
                    item: items[keyIndex]
                });
            } else if (leave) {
                transitions.splice(++i, 0, t);
            }
        });
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(sort)) {
        transitions.sort((a, b)=>sort(a.item, b.item));
    }
    let delay = -trail;
    const forceUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useForceUpdate"])();
    const defaultProps = getDefaultProps(props);
    const changes = new Map();
    const exitingTransitions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const forceChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(transitions, (t, i)=>{
        const key = t.key;
        const prevPhase = t.phase;
        const p = propsFn ? propsFn() : props;
        let to;
        let phase;
        let propsDelay = callProp(p.delay || 0, key);
        if (prevPhase == TransitionPhase.MOUNT) {
            to = p.enter;
            phase = TransitionPhase.ENTER;
        } else {
            const isLeave = keys.indexOf(key) < 0;
            if (prevPhase != TransitionPhase.LEAVE) {
                if (isLeave) {
                    to = p.leave;
                    phase = TransitionPhase.LEAVE;
                } else if (to = p.update) {
                    phase = TransitionPhase.UPDATE;
                } else return;
            } else if (!isLeave) {
                to = p.enter;
                phase = TransitionPhase.ENTER;
            } else return;
        }
        to = callProp(to, t.item, i);
        to = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].obj(to) ? inferTo(to) : {
            to
        };
        if (!to.config) {
            const config = propsConfig || defaultProps.config;
            to.config = callProp(config, t.item, i, phase);
        }
        delay += trail;
        const payload = _extends({}, defaultProps, {
            delay: propsDelay + delay,
            ref: propsRef,
            immediate: p.immediate,
            reset: false
        }, to);
        if (phase == TransitionPhase.ENTER && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(payload.from)) {
            const _p = propsFn ? propsFn() : props;
            const from = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(_p.initial) || prevTransitions ? _p.from : _p.initial;
            payload.from = callProp(from, t.item, i);
        }
        const { onResolve } = payload;
        payload.onResolve = (result)=>{
            callProp(onResolve, result);
            const transitions = usedTransitions.current;
            const t = transitions.find((t)=>t.key === key);
            if (!t) return;
            if (result.cancelled && t.phase != TransitionPhase.UPDATE) {
                return;
            }
            if (t.ctrl.idle) {
                const idle = transitions.every((t)=>t.ctrl.idle);
                if (t.phase == TransitionPhase.LEAVE) {
                    const expiry = callProp(expires, t.item);
                    if (expiry !== false) {
                        const expiryMs = expiry === true ? 0 : expiry;
                        t.expired = true;
                        if (!idle && expiryMs > 0) {
                            if (expiryMs <= 0x7fffffff) t.expirationId = setTimeout(forceUpdate, expiryMs);
                            return;
                        }
                    }
                }
                if (idle && transitions.some((t)=>t.expired)) {
                    exitingTransitions.current.delete(t);
                    if (exitBeforeEnter) {
                        forceChange.current = true;
                    }
                    forceUpdate();
                }
            }
        };
        const springs = getSprings(t.ctrl, payload);
        if (phase === TransitionPhase.LEAVE && exitBeforeEnter) {
            exitingTransitions.current.set(t, {
                phase,
                springs,
                payload
            });
        } else {
            changes.set(t, {
                phase,
                springs,
                payload
            });
        }
    });
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SpringContext);
    const prevContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["usePrev"])(context);
    const hasContext = context !== prevContext && hasProps(context);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])({
        "useTransition.useIsomorphicLayoutEffect": ()=>{
            if (hasContext) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(transitions, {
                    "useTransition.useIsomorphicLayoutEffect": (t)=>{
                        t.ctrl.start({
                            default: context
                        });
                    }
                }["useTransition.useIsomorphicLayoutEffect"]);
            }
        }
    }["useTransition.useIsomorphicLayoutEffect"], [
        context
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(changes, (_, t)=>{
        if (exitingTransitions.current.size) {
            const ind = transitions.findIndex((state)=>state.key === t.key);
            transitions.splice(ind, 1);
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])({
        "useTransition.useIsomorphicLayoutEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(exitingTransitions.current.size ? exitingTransitions.current : changes, {
                "useTransition.useIsomorphicLayoutEffect": ({ phase, payload }, t)=>{
                    const { ctrl } = t;
                    t.phase = phase;
                    ref == null ? void 0 : ref.add(ctrl);
                    if (hasContext && phase == TransitionPhase.ENTER) {
                        ctrl.start({
                            default: context
                        });
                    }
                    if (payload) {
                        replaceRef(ctrl, payload.ref);
                        if ((ctrl.ref || ref) && !forceChange.current) {
                            ctrl.update(payload);
                        } else {
                            ctrl.start(payload);
                            if (forceChange.current) {
                                forceChange.current = false;
                            }
                        }
                    }
                }
            }["useTransition.useIsomorphicLayoutEffect"]);
        }
    }["useTransition.useIsomorphicLayoutEffect"], reset ? void 0 : deps);
    const renderTransitions = (render)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, transitions.map((t, i)=>{
            const { springs } = changes.get(t) || t.ctrl;
            const elem = render(_extends({}, springs), t.item, t, i);
            return elem && elem.type ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(elem.type, _extends({}, elem.props, {
                key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].str(t.key) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].num(t.key) ? t.key : t.ctrl.id,
                ref: elem.ref
            })) : elem;
        }));
    return ref ? [
        renderTransitions,
        ref
    ] : renderTransitions;
}
let nextKey = 1;
function getKeys(items, { key, keys = key }, prevTransitions) {
    if (keys === null) {
        const reused = new Set();
        return items.map((item)=>{
            const t = prevTransitions && prevTransitions.find((t)=>t.item === item && t.phase !== TransitionPhase.LEAVE && !reused.has(t));
            if (t) {
                reused.add(t);
                return t.key;
            }
            return nextKey++;
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].und(keys) ? items : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(keys) ? items.map(keys) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(keys);
}
const _excluded$5 = [
    "container"
];
const useScroll = (_ref = {})=>{
    let { container } = _ref, springOptions = _objectWithoutPropertiesLoose(_ref, _excluded$5);
    const [scrollValues, api] = useSpring({
        "useScroll.useSpring": ()=>_extends({
                scrollX: 0,
                scrollY: 0,
                scrollXProgress: 0,
                scrollYProgress: 0
            }, springOptions)
    }["useScroll.useSpring"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])({
        "useScroll.useIsomorphicLayoutEffect": ()=>{
            const cleanupScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["onScroll"])({
                "useScroll.useIsomorphicLayoutEffect.cleanupScroll": ({ x, y })=>{
                    api.start({
                        scrollX: x.current,
                        scrollXProgress: x.progress,
                        scrollY: y.current,
                        scrollYProgress: y.progress
                    });
                }
            }["useScroll.useIsomorphicLayoutEffect.cleanupScroll"], {
                container: (container == null ? void 0 : container.current) || undefined
            });
            return ({
                "useScroll.useIsomorphicLayoutEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(Object.values(scrollValues), {
                        "useScroll.useIsomorphicLayoutEffect": (value)=>value.stop()
                    }["useScroll.useIsomorphicLayoutEffect"]);
                    cleanupScroll();
                }
            })["useScroll.useIsomorphicLayoutEffect"];
        }
    }["useScroll.useIsomorphicLayoutEffect"], []);
    return scrollValues;
};
const _excluded$4 = [
    "container"
];
const useResize = (_ref)=>{
    let { container } = _ref, springOptions = _objectWithoutPropertiesLoose(_ref, _excluded$4);
    const [sizeValues, api] = useSpring({
        "useResize.useSpring": ()=>_extends({
                width: 0,
                height: 0
            }, springOptions)
    }["useResize.useSpring"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])({
        "useResize.useIsomorphicLayoutEffect": ()=>{
            const cleanupScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["onResize"])({
                "useResize.useIsomorphicLayoutEffect.cleanupScroll": ({ width, height })=>{
                    api.start({
                        width,
                        height,
                        immediate: sizeValues.width.get() === 0 || sizeValues.height.get() === 0
                    });
                }
            }["useResize.useIsomorphicLayoutEffect.cleanupScroll"], {
                container: (container == null ? void 0 : container.current) || undefined
            });
            return ({
                "useResize.useIsomorphicLayoutEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])(Object.values(sizeValues), {
                        "useResize.useIsomorphicLayoutEffect": (value)=>value.stop()
                    }["useResize.useIsomorphicLayoutEffect"]);
                    cleanupScroll();
                }
            })["useResize.useIsomorphicLayoutEffect"];
        }
    }["useResize.useIsomorphicLayoutEffect"], []);
    return sizeValues;
};
const _excluded$3 = [
    "to",
    "from"
], _excluded2 = [
    "root",
    "once",
    "amount"
];
const defaultThresholdOptions = {
    any: 0,
    all: 1
};
function useInView(props, args) {
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const propsFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(props) && props;
    const springsProps = propsFn ? propsFn() : {};
    const { to = {}, from = {} } = springsProps, restSpringProps = _objectWithoutPropertiesLoose(springsProps, _excluded$3);
    const intersectionArguments = propsFn ? args : props;
    const [springs, api] = useSpring({
        "useInView.useSpring": ()=>_extends({
                from
            }, restSpringProps)
    }["useInView.useSpring"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useIsomorphicLayoutEffect"])({
        "useInView.useIsomorphicLayoutEffect": ()=>{
            const element = ref.current;
            const _ref = intersectionArguments != null ? intersectionArguments : {}, { root, once, amount = 'any' } = _ref, restArgs = _objectWithoutPropertiesLoose(_ref, _excluded2);
            if (!element || once && isInView || typeof IntersectionObserver === 'undefined') return;
            const activeIntersections = new WeakMap();
            const onEnter = {
                "useInView.useIsomorphicLayoutEffect.onEnter": ()=>{
                    if (to) {
                        api.start(to);
                    }
                    setIsInView(true);
                    const cleanup = {
                        "useInView.useIsomorphicLayoutEffect.onEnter.cleanup": ()=>{
                            if (from) {
                                api.start(from);
                            }
                            setIsInView(false);
                        }
                    }["useInView.useIsomorphicLayoutEffect.onEnter.cleanup"];
                    return once ? undefined : cleanup;
                }
            }["useInView.useIsomorphicLayoutEffect.onEnter"];
            const handleIntersection = {
                "useInView.useIsomorphicLayoutEffect.handleIntersection": (entries)=>{
                    entries.forEach({
                        "useInView.useIsomorphicLayoutEffect.handleIntersection": (entry)=>{
                            const onLeave = activeIntersections.get(entry.target);
                            if (entry.isIntersecting === Boolean(onLeave)) {
                                return;
                            }
                            if (entry.isIntersecting) {
                                const newOnLeave = onEnter();
                                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(newOnLeave)) {
                                    activeIntersections.set(entry.target, newOnLeave);
                                } else {
                                    observer.unobserve(entry.target);
                                }
                            } else if (onLeave) {
                                onLeave();
                                activeIntersections.delete(entry.target);
                            }
                        }
                    }["useInView.useIsomorphicLayoutEffect.handleIntersection"]);
                }
            }["useInView.useIsomorphicLayoutEffect.handleIntersection"];
            const observer = new IntersectionObserver(handleIntersection, _extends({
                root: root && root.current || undefined,
                threshold: typeof amount === 'number' || Array.isArray(amount) ? amount : defaultThresholdOptions[amount]
            }, restArgs));
            observer.observe(element);
            return ({
                "useInView.useIsomorphicLayoutEffect": ()=>observer.unobserve(element)
            })["useInView.useIsomorphicLayoutEffect"];
        }
    }["useInView.useIsomorphicLayoutEffect"], [
        intersectionArguments
    ]);
    if (propsFn) {
        return [
            ref,
            springs
        ];
    }
    return [
        ref,
        isInView
    ];
}
const _excluded$2 = [
    "children"
];
function Spring(_ref) {
    let { children } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded$2);
    return children(useSpring(props));
}
const _excluded$1 = [
    "items",
    "children"
];
function Trail(_ref) {
    let { items, children } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
    const trails = useTrail(items.length, props);
    return items.map((item, index)=>{
        const result = children(item, index);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].fun(result) ? result(trails[index]) : result;
    });
}
const _excluded = [
    "items",
    "children"
];
function Transition(_ref) {
    let { items, children } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
    return useTransition(items, props)(children);
}
class Interpolation extends FrameValue {
    constructor(source, args){
        super();
        this.key = void 0;
        this.idle = true;
        this.calc = void 0;
        this._active = new Set();
        this.source = source;
        this.calc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createInterpolator"])(...args);
        const value = this._get();
        const nodeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimatedType"])(value);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAnimated"])(this, nodeType.create(value));
    }
    advance(_dt) {
        const value = this._get();
        const oldValue = this.get();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isEqual"])(value, oldValue)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnimated"])(this).setValue(value);
            this._onChange(value, this.idle);
        }
        if (!this.idle && checkIdle(this._active)) {
            becomeIdle(this);
        }
    }
    _get() {
        const inputs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"].arr(this.source) ? this.source.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFluidValue"])(this.source));
        return this.calc(...inputs);
    }
    _start() {
        if (this.idle && !checkIdle(this._active)) {
            this.idle = false;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPayload"])(this), (node)=>{
                node.done = false;
            });
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].skipAnimation) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$rafz$2f$dist$2f$react$2d$spring$2d$rafz$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raf"].batchedUpdates(()=>this.advance());
                becomeIdle(this);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["frameLoop"].start(this);
            }
        }
    }
    _attach() {
        let priority = 1;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(this.source), (source)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(source)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addFluidObserver"])(source, this);
            }
            if (isFrameValue(source)) {
                if (!source.idle) {
                    this._active.add(source);
                }
                priority = Math.max(priority, source.priority + 1);
            }
        });
        this.priority = priority;
        this._start();
    }
    _detach() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(this.source), (source)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasFluidValue"])(source)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["removeFluidObserver"])(source, this);
            }
        });
        this._active.clear();
        becomeIdle(this);
    }
    eventObserved(event) {
        if (event.type == 'change') {
            if (event.idle) {
                this.advance();
            } else {
                this._active.add(event.parent);
                this._start();
            }
        } else if (event.type == 'idle') {
            this._active.delete(event.parent);
        } else if (event.type == 'priority') {
            this.priority = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toArray"])(this.source).reduce((highest, parent)=>Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1), 0);
        }
    }
}
function isIdle(source) {
    return source.idle !== false;
}
function checkIdle(active) {
    return !active.size || Array.from(active).every(isIdle);
}
function becomeIdle(self) {
    if (!self.idle) {
        self.idle = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["each"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPayload"])(self), (node)=>{
            node.done = true;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callFluidObservers"])(self, {
            type: 'idle',
            parent: self
        });
    }
}
const to = (source, ...args)=>new Interpolation(source, args);
const interpolate = (source, ...args)=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deprecateInterpolate"])(), new Interpolation(source, args));
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Globals"].assign({
    createStringInterpolator: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createStringInterpolator"],
    to: (source, args)=>new Interpolation(source, args)
});
const update = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["frameLoop"].advance;
;
}}),
"[project]/node_modules/@react-spring/three/node_modules/@react-spring/core/dist/react-spring-core.esm.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$shared$2f$dist$2f$react$2d$spring$2d$shared$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/node_modules/@react-spring/shared/dist/react-spring-shared.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$animated$2f$dist$2f$react$2d$spring$2d$animated$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/node_modules/@react-spring/animated/dist/react-spring-animated.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$types$2f$animated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/types/animated.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$types$2f$interpolation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/types/interpolation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$three$2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/three/node_modules/@react-spring/core/dist/react-spring-core.esm.js [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=843f1_%40react-spring_core_dist_react-spring-core_esm_0a8a7e1c.js.map