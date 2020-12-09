export type SocialMediaAccount = {
    name: string;
    href: string;
    size: number;
    className?: string;
};

export type ProjectDetail = {
    title: string;
    description: string;
    story: string;
    challenge: string;
    tech: string[];
    imgPath: string;
    imgType: string;
    videoPath: string;
    videoType: string;
    alt: string;
    url: string;
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
