import * as R from "ramda";
import { gsap } from "gsap";
import { DEFAULT_OPTIONS } from "../constants";

export function startSlideShow(options: any, PIXI: any) {
    const self = {} as any;
    const tween = gsap.timeline();

    options = R.mergeDeepRight(DEFAULT_OPTIONS, options);
    options.displaceScaleTo = options.autoPlay === false ? [0, 0] : [20, 20];

    //  PIXI VARIABLES
    /// ---------------------------
    // @ts-ignore
    const renderer = new PIXI.autoDetectRenderer({
        height: options.stageHeight,
        width: options.stageWidth,
        transparent: true,
    });
    const stage = new PIXI.Container();
    const slidesContainer = new PIXI.Container();
    // @ts-ignore
    const displacementSprite = new PIXI.Sprite.from(options.displacementImage);
    const displacementFilter = new PIXI.filters.DisplacementFilter(
        displacementSprite
    );

    //  TEXTS
    /// ---------------------------
    const style = new PIXI.TextStyle({
        fill: options.textColor,
        wordWrap: true,
        wordWrapWidth: 400,
        letterSpacing: 20,
        fontSize: 14,
    });

    //  SLIDES ARRAY INDEX
    /// ---------------------------
    self.currentIndex = 0;

    /// ---------------------------
    //  INITIALISE PIXI
    /// ---------------------------
    self.initPixi = function () {
        // Add canvas to the HTML
        // document.body.appendChild(renderer.view);
        options.parentElement.appendChild(renderer.view);

        // Add child container to the main container
        stage.addChild(slidesContainer);

        // Enable Interactions
        stage.interactive = true;

        // Fit renderer to the screen
        if (options.fullScreen === true) {
            renderer.view.style.objectFit = "contain";
            renderer.view.style.width = "100%";
            renderer.view.style.height = "100%";
            renderer.view.style.top = "50%";
            renderer.view.style.left = "50%";
            renderer.view.style.webkitTransform =
                "translate( -50%, -50% ) scale(1.2)";
            renderer.view.style.transform =
                "translate( -50%, -50% ) scale(1.2)";
        } else {
            renderer.view.style.maxWidth = "100%";
            renderer.view.style.top = "50%";
            renderer.view.style.left = "50%";
            renderer.view.style.webkitTransform = "translate( -50%, -50% )";
            renderer.view.style.transform = "translate( -50%, -50% )";
        }

        displacementSprite.texture.baseTexture.wrapMode =
            PIXI.WRAP_MODES.REPEAT;

        // Set the filter to stage and set some default values for the animation
        stage.filters = [displacementFilter];

        if (options.autoPlay === false) {
            displacementFilter.scale.x = 0;
            displacementFilter.scale.y = 0;
        }

        if (options.wacky === true) {
            displacementSprite.anchor.set(0.5);
            displacementSprite.x = renderer.width / 2;
            displacementSprite.y = renderer.height / 2;
        }

        displacementSprite.scale.x = 2;
        displacementSprite.scale.y = 2;

        // PIXI tries to fit the filter bounding box to the renderer so we optionally bypass
        displacementFilter.autoFit = options.displaceAutoFit;

        stage.addChild(displacementSprite);
    };

    /// ---------------------------
    //  LOAD SLIDES TO CANVAS
    /// ---------------------------
    self.loadPixiSprites = function (sprites: string[]) {
        const rSprites = options.pixiSprites;
        const rTexts = options.texts;

        for (let i = 0; i < rSprites.length; i++) {
            const texture = PIXI.Texture.from(sprites[i]);
            const image = new PIXI.Sprite(texture);

            if (rTexts) {
                const richText = new PIXI.Text(rTexts[i], style);
                image.addChild(richText);

                richText.anchor.set(0.5);
                richText.x = image.width / 2;
                richText.y = image.height / 2;
            }

            if (options.centerSprites === true) {
                image.anchor.set(0.5);
                image.x = renderer.width / 2;
                image.y = renderer.height / 2;
            }
            // image.transform.scale.x = 1.3;
            // image.transform.scale.y = 1.3;

            if (i !== 0) {
                tween.set(image, { alpha: 0 });
            }

            slidesContainer.addChild(image);
        }
    };

    /// ---------------------------
    //  DEFAULT RENDER/ANIMATION
    /// ---------------------------
    if (options.autoPlay === true) {
        const ticker = new PIXI.Ticker();

        ticker.autoStart = options.autoPlay;

        ticker.add(function (delta) {
            displacementSprite.x += options.autoPlaySpeed[0] * delta;
            displacementSprite.y += options.autoPlaySpeed[1];

            renderer.render(stage);
        });
    } else {
        const render = new PIXI.Ticker();

        render.autoStart = true;

        render.add(function (delta) {
            renderer.render(stage);
        });
    }

    /// ---------------------------
    //  TRANSITION BETWEEN SLIDES
    /// ---------------------------
    let isPlaying = false;
    const slideImages = slidesContainer.children;
    self.moveSlider = function (newIndex) {
        isPlaying = true;

        const baseTimeline = gsap.timeline({
            onComplete: function () {
                self.currentIndex = newIndex;
                isPlaying = false;
                if (options.wacky === true) {
                    displacementSprite.scale.set(1);
                }
            },
            onUpdate: function () {
                if (options.wacky === true) {
                    displacementSprite.rotation +=
                        baseTimeline.progress() * 0.02;
                    displacementSprite.scale.set(baseTimeline.progress() * 3);
                }
            },
        });

        baseTimeline.clear();

        if (baseTimeline.isActive()) {
            return;
        }

        // DEMO 4
        baseTimeline
            .to(displacementFilter.scale, {
                x: options.displaceScale[0],
                y: options.displaceScale[1],
                ease: "power2.in",
                duration: 0.8,
            })
            .to(
                slideImages[self.currentIndex],

                { duration: 0.5, alpha: 0, ease: "power2.out" },
                0.4
            )
            .to(
                slideImages[newIndex],

                { duration: 0.8, alpha: 1, ease: "power2.out" },
                1
            )
            .to(
                displacementFilter.scale,

                {
                    duration: 0.7,
                    x: options.displaceScaleTo[0],
                    y: options.displaceScaleTo[1],
                    ease: "power1.out",
                },
                0.9
            );
    };

    /// ---------------------------
    //  CLICK HANDLERS
    /// ---------------------------
    const nav = options.navElement;

    for (let i = 0; i < nav.length; i++) {
        const navItem = nav[i];

        navItem.onclick = function () {
            // Make sure the previous transition has ended
            if (isPlaying) {
                return false;
            }

            if (navItem.getAttribute("data-nav") === "next") {
                if (
                    self.currentIndex >= 0 &&
                    self.currentIndex < slideImages.length - 1
                ) {
                    self.moveSlider(self.currentIndex + 1);
                } else {
                    self.moveSlider(0);
                }
            } else {
                if (
                    self.currentIndex > 0 &&
                    self.currentIndex < slideImages.length
                ) {
                    self.moveSlider(self.currentIndex - 1);
                } else {
                    self.moveSlider(slideImages.length - 1);
                }
            }

            return false;
        };
    }

    /// ---------------------------
    //  INIT FUNCTIONS
    /// ---------------------------

    self.init = function () {
        self.initPixi();
        self.loadPixiSprites(options.pixiSprites);

        /*
if ( options.fullScreen === true ) {
  window.addEventListener("resize", function( event ){ 
    scaleToWindow( renderer.view );
  });
  scaleToWindow( renderer.view );  
}
*/
    };

    // ---------------------------
    //  INTERACTIONS
    /// ---------------------------
    function rotateSpite() {
        displacementSprite.rotation += 0.001;
        // @ts-ignore
        rafID = requestAnimationFrame(rotateSpite);
    }

    if (options.interactive === true) {
        let rafID: number, mouseX: number, mouseY: number;

        // Enable interactions on our slider
        slidesContainer.interactive = true;
        slidesContainer.buttonMode = true;

        // HOVER
        if (
            options.interactionEvent === "hover" ||
            options.interactionEvent === "both"
        ) {
            slidesContainer.addListener("pointerover", function (mouseData) {
                mouseX = mouseData.data.global.x;
                mouseY = mouseData.data.global.y;
                tween.to(displacementFilter.scale, {
                    x: "+=" + Math.sin(mouseX) * 100 + "",
                    y: "+=" + Math.cos(mouseY) * 100 + "",
                    duration: 1,
                });

                rotateSpite();
            });

            slidesContainer.addListener("pointerout", function (mouseData) {
                tween.to(displacementFilter.scale, {
                    x: 0,
                    y: 0,
                    duration: 1,
                });
                cancelAnimationFrame(rafID);
            });
        }

        // CLICK
        if (
            options.interactionEvent === "click" ||
            options.interactionEvent === "both"
        ) {
            slidesContainer.addListener("pointerup", function (mouseData) {
                if (options.dispatchPointerOver === true) {
                    tween.to(displacementFilter.scale, {
                        x: 0,
                        y: 0,
                        duration: 1,
                        onComplete: function () {
                            tween.to(displacementFilter.scale, {
                                x: 20,
                                y: 20,
                                duration: 1,
                            });
                        },
                    });
                } else {
                    tween.to(displacementFilter.scale, {
                        x: 0,
                        y: 0,
                        duration: 1,
                    });
                    cancelAnimationFrame(rafID);
                }
            });

            slidesContainer.addListener("pointerdown", function (mouseData) {
                mouseX = mouseData.data.global.x;
                mouseY = mouseData.data.global.y;
                tween.to(displacementFilter.scale, {
                    x: "+=" + Math.sin(mouseX) * 1200 + "",
                    y: "+=" + Math.cos(mouseY) * 200 + "",
                    duration: 1,
                });
            });
        }
    }

    /// ---------------------------
    //  CENTER DISPLACEMENT
    /// ---------------------------
    if (options.displacementCenter === true) {
        displacementSprite.anchor.set(0.5);
        displacementSprite.x = renderer.view.width / 2;
        displacementSprite.y = renderer.view.height / 2;
    }

    /// ---------------------------
    //  START
    /// ---------------------------
    self.init();
} // slide show
