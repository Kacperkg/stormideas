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

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.offsetTop;
                const sectionHeight = sectionRef.current.scrollHeight;
                const scrollPx = window.scrollY - sectionTop;
                const winHeightPx = sectionHeight - window.innerHeight;
                const scrolled = Math.min(
                    Math.max((scrollPx / winHeightPx) * 100, 0),
                    100
                );
                setScrollProgress(scrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
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
                        We have over a decade years of experience working on
                        digital solutions.
                    </p>
                </div>
            </header>
            <section ref={sectionRef}>
                <div className={Styles.service_title}>
                    <p>Our Services</p>
                    <p>012</p>
                </div>
                <div className={Styles.services_container}>
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`${Styles.service} ${
                                scrollProgress > 10 ? Styles.visible : ""
                            }`}>
                            <div className={Styles.seperator}></div>
                            <div className={Styles.service_heading}>
                                <h2 className={Styles.animatedStyleH2}>
                                    {service.name}
                                </h2>
                                <p className={Styles.animatedStyleP}>
                                    {service.num}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={Styles.seperator_footer}></div>
                <div className={Styles.service_footer}>
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
