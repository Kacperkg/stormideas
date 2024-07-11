import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Styles from "./about.module.css";
import layer2 from "./assets/layer2.png";
import layer3 from "./assets/layer3.png";
import layer1 from "./assets/layerimg1.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const textRef = useRef(null);

    useEffect(() => {
        const anim = gsap.to(textRef.current.querySelectorAll("span"), {
            scrollTrigger: {
                trigger: textRef.current,
                scrub: true,
                start: "top 35%",
                end: "bottom 95%",
            },
            opacity: 1,
            duration: 5,
            stagger: 0.5,
        });

        return () => {
            anim.kill();
        };
    }, []);

    return (
        <div className={Styles.about}>
            <div className={Styles.about__container} ref={textRef}>
                <p>
                    {"As passionate, enthusiast teams and"
                        .split("")
                        .map((char, index) => (
                            <span key={index} style={{ opacity: 0.3 }}>
                                {char}
                            </span>
                        ))}
                    <img src={layer1} alt="Layer 1" />
                    {"individuals, we aim to create something truly exceptional for others. By blending our best professional skills"
                        .split("")
                        .map((char, index) => (
                            <span key={index} style={{ opacity: 0.3 }}>
                                {char}
                            </span>
                        ))}
                    <img src={layer2} alt="Layer 2" />
                    {"discussions, and empathy, we fostered a unique and"
                        .split("")
                        .map((char, index) => (
                            <span key={index} style={{ opacity: 0.3 }}>
                                {char}
                            </span>
                        ))}
                    <img src={layer3} alt="Layer 3" />
                    {"collaborative environment for our colleagues."
                        .split("")
                        .map((char, index) => (
                            <span key={index} style={{ opacity: 0.3 }}>
                                {char}
                            </span>
                        ))}
                </p>
            </div>
        </div>
    );
}
