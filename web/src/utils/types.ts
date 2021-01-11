import type { SvelteComponentDev } from "svelte/internal";

export type SocialMediaAccount = {
    name: string;
    href: string;
    size: number;
    className?: string;
    component: typeof SvelteComponentDev;
};

export type ProjectDetail = {
    title: string;
    description: string;
    story: string;
    challenge: string;
    feature: string[];
    todo: string[];
    tech: string[];
    imgPath: string;
    imgType: string;
    videoPath: string;
    videoType: string;
    alt: string;
    url: string;
    githubPath: string;
    color: string;
};

export type CanvasSliderOptions = {
    autoPlay?: boolean;
    autoPlaySpeed?: number[];
    centerSprites?: boolean;
    dispatchPointerOver?: boolean;
    displaceAutoFit?: boolean;
    displacementCenter?: boolean;
    displacementImage: string;
    displaceScale?: number[];
    displaceScaleTo?: number[];
    fullScreen?: boolean;
    interactive?: boolean;
    interactionEvent?: string;
    navElement: any;
    parentElement: any;
    pixiSprites: string[];
    stageHeight?: number;
    stageWidth?: number;
    textColor?: string;
    texts?: string[];
    wacky?: boolean;
};

export type Stacks = {
    name: string;
    url: string;
};

interface SanityBasic {
    _ref: string;
    _type: string;
}

interface Author {
    _key: string;
    _type: string;
    author: SanityBasic;
}

interface Body extends SanityBasic {
    alt: string;
    asset: any;
    caption: string;
    children: [];
    code?: string;
    language?: string;
    listItem: string;
    markDefs?: [];
    style?: string;
    level?: number;
}

interface Category extends SanityBasic {
    _key: string;
}

type MainImage = {
    _type: string;
    alt: string;
    asset: any;
    caption: string;
};

export type BlogPost = {
    authors: any;
    body: any;
    categories: any;
    excerpt: any;
    mainImage: any;
    publishedAt: string;
    slug: any;
    title: string;
};
