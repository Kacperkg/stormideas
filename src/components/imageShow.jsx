import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import img from "../assets/Img.png";
import img2 from "../assets/Img2.png";
import Styles from "../products.module.css";

function ScrollSection() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.matchMedia({
            // large screens (min-width: 1200px)
            "(min-width: 1200px)": function () {
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
                            invalidateOnRefresh: true, // Add invalidateOnRefresh option here
                        },
                    }
                );

                return () => {
                    pin.kill();
                };
            },

            // medium screens (600px - 1199px) - placeholder
            "(min-width: 600px) and (max-width: 1199px)": function () {
                // Define different ScrollTriggers or animations for medium screens
            },

            // small screens (max-width: 599px) - placeholder
            "(max-width: 599px)": function () {
                // Define different ScrollTriggers or animations for small screens
            },

            // all screens (default)
            all: function () {
                // Fallback or common ScrollTriggers for all screen sizes
            },
        });
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
