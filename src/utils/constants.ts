export const CARD_WIDTH: number = 312.5;

export const DEFAULT_OPTIONS = Object.freeze({
    autoPlay: true,
    autoPlaySpeed: [10, 3],
    centerSprites: false,
    dispatchPointerOver: false,
    displaceAutoFit: false,
    displacementCenter: false,
    displacementImage: "",
    displaceScale: [200, 70],
    displaceScaleTo: [0, 0],
    // displaceScaleTo     : ( options.autoPlay === false ) ? [ 0, 0 ] : [ 20, 20 ],
    fullScreen: true,
    interactive: false,
    interactionEvent: "", // 'click', 'hover', 'both'
    // navElement: document.querySelectorAll(".scene-nav"),
    // parentElement: document.querySelector("#liquid-slider"),
    navElement: "",
    parentElement: "",
    pixiSprites: [],
    stageHeight: 1080,
    stageWidth: 1920,
    textColor: "#fff",
    texts: [],
    wacky: false,
});

export const COLOR_PHOTO_URL = [
    "/images/color/bukit-barisan.jpg",
    "/images/color/bukit-takuruang.jpg",
    "/images/color/istana-pagaruyung.jpg",
    "/images/color/jawi.jpg",
    "/images/color/jembatan-akar.jpg",
    "/images/color/mesjid-agung-sumbar.jpg",
    "/images/color/pacu-jawi-1.jpg",
    "/images/color/pacu-jawi-2.jpg",
    "/images/color/pacu-jawi-3.jpg",
    "/images/color/pacu-jawi-4.jpg",
    "/images/color/panorama-nyarai.jpg",
    "/images/color/pantai-nirwana.jpg",
    "/images/color/tari-piring.jpg",
];

export const BW_PHOTO_URL = ["/images/bw/pembuat-cincin.jpg"];

export const DISPLACEMENT_IMAGE = {
    512: {
        clouds: "/images/dmaps/512x512/clouds.jpg",
        crystalize: "/images/dmaps/512x512/crystalize.jpg",
        fibers: "/images/dmaps/512x512/fibers.jpg",
        pointilize: "/images/dmaps/512x512/pointilize.jpg",
        ripple: "/images/dmaps/512x512/ripple.jpg",
        ripple_2: "/images/dmaps/512x512/ripple_2.jpg",
    },
    2048: {
        clouds: "/images/dmaps/2048x2048/clouds.jpg",
        crystalize: "/images/dmaps/2048x2048/crystalize.jpg",
        fibers: "/images/dmaps/2048x2048/fibers.jpg",
        pointilize: "/images/dmaps/2048x2048/pointilize.jpg",
        ripple: "/images/dmaps/2048x2048/ripple.jpg",
        ripple_2: "/images/dmaps/2048x2048/ripple_2.jpg",
    },
};
