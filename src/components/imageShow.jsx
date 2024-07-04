import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import img from "../assets/Img.png";
import img2 from "../assets/Img2.png";
import Styles from "../products.module.css";

function ScrollSection() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // Check viewport width
        if (window.innerWidth >= 1200) {
            const pin = gsap.fromTo(
                sectionRef.current,
                {
                    translateX: 0,
                },
                {
                    translateX: "-80vw",
                    ease: "none",
                    duration: 1,
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: () => `+=${sectionRef.current.offsetWidth}`,
                        scrub: 0.6,
                        pin: true,
                    },
                }
            );

            return () => {
                // Clean up animation on component unmount
                pin.kill();
            };
        }
    }, []);

    return (
        <section className={Styles.scroll_section_outer}>
            <div ref={triggerRef}>
                <div ref={sectionRef} className={Styles.scroll_section_inner}>
                    <div className={Styles.scroll_section}>
                        <div className={Styles.product}>
                            <div style={{ backgroundImage: `url(${img})` }}>
                                <div className={Styles.product__title}>
                                    <h2>Stellar®</h2>
                                    <p>A comprehensive site builder</p>
                                </div>
                                <a href="#">Find out more</a>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.scroll_section}>
                        <div className={Styles.product}>
                            <div style={{ backgroundImage: `url(${img2})` }}>
                                <div className={Styles.product__title}>
                                    <h2>Smart</h2>
                                    <p>
                                        A new era of smart homes. Control and
                                        secure your home with the click of a
                                        button.
                                    </p>
                                </div>
                                <a href="#">Find out more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScrollSection;
