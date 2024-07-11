import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import logo from "./assets/logo 2.svg";
import Styles from "./footer.module.css";

export default function Footer() {
    const parallaxRef = useRef(null);
    const footerHeaderRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const parallax = parallaxRef.current;
        const footer = footerHeaderRef.current;

        ScrollTrigger.matchMedia({
            "(min-width: 1025px)": function () {
                if (parallax && footer) {
                    gsap.to(parallax, {
                        xPercent: -150,
                        ease: "none",
                        scrollTrigger: {
                            trigger: footer,
                            start: "-20% center",
                            end: "bottom center",
                            scrub: true,
                        },
                    });
                }
            },
            "(min-width: 769px) and (max-width: 1024px)": function () {
                if (parallax && footer) {
                    gsap.to(parallax, {
                        xPercent: -125,
                        ease: "none",
                        scrollTrigger: {
                            trigger: footer,
                            start: "-20% center",
                            end: "30% center",
                            scrub: true,
                        },
                    });
                }
            },

            "(min-width: 701px) and (max-width: 768px)": function () {
                if (parallax && footer) {
                    gsap.to(parallax, {
                        xPercent: -150,
                        ease: "none",
                        scrollTrigger: {
                            trigger: footer,
                            start: "-20% center",
                            end: "40% center",
                            scrub: true,
                        },
                    });
                }
            },

            "(max-width: 700px)": function () {
                if (parallax && footer) {
                    gsap.to(parallax, {
                        xPercent: -190,
                        ease: "none",
                        scrollTrigger: {
                            trigger: footer,
                            start: "-20% center",
                            end: "40% center",
                            scrub: true,
                        },
                    });
                }
            },
        });

        // Cleanup function to kill ScrollTrigger instances
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className={Styles.footer}>
            <div className={Styles.footer__header} ref={footerHeaderRef}>
                <div className={Styles.footer__parallax} ref={parallaxRef}>
                    <h2>Looking for a partner to start a project with?</h2>
                </div>
                <div className={Styles.footer__header__contact}>
                    <a href="">Let’s work together — we’re ready</a>
                </div>
            </div>
            <div className={Styles.footer__footer}>
                <img src={logo} alt="" className={Styles.logo} />
                <div className={Styles.footer__text}>
                    <div
                        className={`${Styles.footer__column} ${Styles.footer__hiring}`}>
                        <h3>We’re hiring</h3>
                        <p>
                            We’re also always on the lookout for established or
                            emerging talent.
                        </p>
                        <a href="">View our vacancies</a>
                    </div>
                    <div
                        className={`${Styles.footer__column} ${Styles.footer__address}`}>
                        <h3>Our address</h3>
                        <p>Wide Idea Limited, Anderson House</p>
                        <p>3nd Floor Breadalbane Street</p>
                        <p>Edinburgh United Kingdom EH6 8JR</p>
                    </div>
                    <div
                        className={`${Styles.footer__column} ${Styles.footer__contact}`}>
                        <h3>Let’s work together</h3>
                        <p>+44 (0) 131 460 8202</p>
                        <p>hello@WideIdeas.com</p>
                    </div>
                    <div
                        className={`${Styles.footer__column} ${Styles.footer__follow}`}>
                        <h3>Follow us</h3>
                        <p>LinkedIn</p>
                        <p>Facebook</p>
                        <p>X (Twitter)</p>
                    </div>
                </div>
                <div className={Styles.footer__copy}>
                    <p>© Wide Idea Ltd 2008 — 2023</p>
                    <p>Terms — Privacy </p>
                </div>
            </div>
        </div>
    );
}
