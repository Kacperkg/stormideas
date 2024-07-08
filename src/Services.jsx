import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import Styles from "./services.module.css";

const services = [
    { id: 1, name: "Strategy", num: "001" },
    { id: 2, name: "Marketing", num: "002" },
    { id: 3, name: "Content", num: "003" },
    { id: 4, name: "UI/UX", num: "004" },
    { id: 5, name: "Design", num: "005" },
    { id: 6, name: "Research", num: "006" },
    { id: 7, name: "Growth", num: "007" },
    { id: 8, name: "Video", num: "008" },
    { id: 9, name: "Engineering", num: "009" },
    { id: 10, name: "Development", num: "010" },
    { id: 11, name: "Product", num: "011" },
    { id: 12, name: "Analytics", num: "012" },
];

function Services() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);
    const serviceRefs = useRef([]);
    const headerServiceRefs = useRef([]);
    const pServiceRefs = useRef([]);
    const progressServiceRefs = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const updateScrollProgress = () => {
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.offsetTop;
                const sectionHeight = sectionRef.current.offsetHeight;
                const scrollPosition = window.scrollY;
                const sectionInView =
                    scrollPosition > sectionTop - window.innerHeight &&
                    scrollPosition < sectionTop + sectionHeight;

                if (sectionInView) {
                    const progress =
                        (scrollPosition - sectionTop + window.innerHeight) /
                        (sectionHeight + window.innerHeight);
                    setScrollProgress(progress * 100);
                } else if (scrollPosition <= sectionTop - window.innerHeight) {
                    setScrollProgress(0);
                } else if (scrollPosition >= sectionTop + sectionHeight) {
                    setScrollProgress(100);
                }
            }
        };

        const scrollListener = () => {
            updateScrollProgress();
        };

        window.addEventListener("scroll", scrollListener);

        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, []);

    useEffect(() => {
        const applyAnimations = () => {
            const isSmallScreen = window.innerWidth <= 768;

            serviceRefs.current.forEach((ref, index) => {
                if (ref) {
                    gsap.fromTo(
                        ref,
                        {
                            opacity: 0,
                        },
                        {
                            opacity: 1,
                            scrollTrigger: {
                                trigger: ref,
                                start: "top 70%",
                                end: "top 15%",
                                toggleActions: "play reverse play reverse",
                            },
                        }
                    );
                }
            });

            headerServiceRefs.current.forEach((hRef, index) => {
                if (hRef) {
                    gsap.fromTo(
                        hRef,
                        {
                            color: "rgba(255, 255, 255, 0.5)",
                            fontSize: "clamp(20px, 12vw, 40px)",
                        },
                        {
                            color: "#fff",
                            fontSize: "clamp(40px, 12vw, 80px)",
                            scrollTrigger: {
                                trigger: hRef,
                                start: isSmallScreen ? "top 50%" : "top 55%",
                                end: isSmallScreen ? "top 35%" : "top 40%",
                                toggleActions: "play reverse play reverse",
                            },
                        }
                    );
                }
            });

            pServiceRefs.current.forEach((pRef, index) => {
                if (pRef) {
                    gsap.fromTo(
                        pRef,
                        {
                            color: "rgba(255, 255, 255, 0.5)",
                        },
                        {
                            color: "#fff",
                            scrollTrigger: {
                                trigger: pRef,
                                start: isSmallScreen ? "top 50%" : "top 55%",
                                end: isSmallScreen ? "top 35%" : "top 40%",
                                toggleActions: "play reverse play reverse",
                            },
                        }
                    );
                }
            });

            progressServiceRefs.current.forEach((proRef) => {
                if (proRef) {
                    gsap.fromTo(
                        proRef,
                        {
                            opacity: 1,
                        },
                        {
                            opacity: 0,
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top center",
                                end: "bottom bottom%",
                                markers: true,
                                toggleActions: "play reverse play reverse",
                            },
                        }
                    );
                }
            });
        };

        applyAnimations();

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className={Styles.service__section}>
            <header>
                <p className={Styles.service__header__text}>
                    As TV viewing figures decline and attention shifts to
                    digital consumption, we are ready to provide a range of
                    services to help your media company not only survive, but
                    thrive.
                </p>
                <div>
                    <h2>
                        15<span className={Styles.plus}>+</span>
                    </h2>
                    <p>
                        We have over a decade of experience working on digital
                        solutions.
                    </p>
                </div>
            </header>
            <section ref={sectionRef} className={Styles.service__body}>
                <div className={Styles.service_title}>
                    <p>Our Services</p>
                    <p>012</p>
                </div>
                <div className={Styles.services_container}>
                    {services.map((service, index) => (
                        <div
                            ref={(el) => (serviceRefs.current[index] = el)}
                            key={service.id}
                            className={`${Styles.service} ${
                                scrollProgress > 10 ? Styles.visible : ""
                            }`}>
                            <div className={Styles.seperator}></div>
                            <div className={Styles.service_heading}>
                                <h2
                                    ref={(el) =>
                                        (headerServiceRefs.current[index] = el)
                                    }
                                    className={`animatedStyleH2 ${Styles.animatedStyleH2}`}>
                                    {service.name}
                                </h2>
                                <p
                                    ref={(el) =>
                                        (pServiceRefs.current[index] = el)
                                    }
                                    className={Styles.animatedStyleP}>
                                    {service.num}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={Styles.seperator_footer}></div>
                <div
                    className={Styles.service_footer}
                    ref={(el) => (progressServiceRefs.current[0] = el)}>
                    <h2>Are we there yet?</h2>
                    <p>
                        scroll progress{" "}
                        <span className={Styles.scroll_progress}>
                            {Math.round(scrollProgress)}%
                        </span>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Services;
