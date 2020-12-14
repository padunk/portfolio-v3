import type { CanvasSliderOptions, SocialMediaAccount, Stacks } from "./types";
import Github from "../components/Icons/Github.svelte";
import Codepen from "../components/Icons/Codepen.svelte";
import Linkedin from "../components/Icons/Linkedin.svelte";
import Twitter from "../components/Icons/Twitter.svelte";
import Instagram from "../components/Icons/Instagram.svelte";
import Whatsapp from "../components/Icons/Whatsapp.svelte";
import Mail from "../components/Icons/Mail.svelte";

export const CARD_WIDTH: number = 312.5;

export const DEFAULT_OPTIONS: CanvasSliderOptions = Object.freeze({
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

export const SOCMED_ACCOUNTS: SocialMediaAccount[] = [
    {
        name: "Github",
        href: "https://github.com/padunk",
        size: 24,
        className: "svg-icon",
        component: Github,
    },
    {
        name: "Codepen",
        href: "https://codepen.io/padunk",
        size: 24,
        className: "svg-icon",
        component: Codepen,
    },
    {
        name: "Linkedin",
        href: "https://linkedin.com/in/abrahamanakagung",
        size: 24,
        className: "svg-icon",
        component: Linkedin,
    },
    {
        name: "Twitter",
        href: "https://twitter.com/anakagungcorp",
        size: 24,
        className: "svg-icon",
        component: Twitter,
    },
    {
        name: "Instagram",
        href: "https://instagram.com/gocodecourse",
        size: 24,
        className: "svg-icon",
        component: Instagram,
    },
    {
        name: "Whatsapp",
        href:
            "https://wa.me/6282169879998/?text=Hi,%20I%20like%20to%20hire%20you.",
        size: 24,
        className: "svg-icon",
        component: Whatsapp,
    },
    {
        name: "Email",
        href: "mailto:abraham.anak.agung@gmail.com",
        size: 24,
        className: "svg-icon",
        component: Mail,
    },
];

export const STACKS: Stacks[] = [
    { name: "ReactJS", url: "https://reactjs.org/" },
    { name: "ReactNative", url: "https://reactnative.dev/" },
    { name: "Redux", url: "https://redux.js.org/" },
    { name: "TypeScript", url: "https://www.typescriptlang.org/" },
    { name: "Firebase", url: "https://firebase.google.com" },
    { name: "TailwindCSS", url: "https://tailwindcss.com" },
    { name: "Styled Components", url: "https://styled-components.com" },
    { name: "NodeJS", url: "https://nodejs.org/en/" },
];

export const OTHER_STACKS: Stacks[] = [
    { name: "Svelte", url: "https://svelte.dev" },
    { name: "PostgreSQL", url: "https://www.postgresql.org/" },
    { name: "MongoDB", url: "https://mongodb.com" },
    { name: "SASS", url: "https://sass-lang.com/" },
    { name: "Go", url: "https://golang.org" },
];
