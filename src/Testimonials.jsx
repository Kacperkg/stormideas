import React, { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import testimonialsList from "./components/testimonials-list";
import Styles from "./testimonials.module.css";

function Testimonials() {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const [messageWidth, setMessageWidth] = useState(424);
    const gapWidth = 24;

    useEffect(() => {
        const updateMessageWidth = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 700) {
                setMessageWidth(320); // Adjust width for smaller screens
            } else if (screenWidth <= 900) {
                setMessageWidth(340);
            } else if (screenWidth <= 1100) {
                setMessageWidth(380); // Adjust width for mid-sized screens
            } else {
                setMessageWidth(424); // Default width for larger screens
            }
        };

        updateMessageWidth();

        window.addEventListener("resize", updateMessageWidth);

        return () => window.removeEventListener("resize", updateMessageWidth);
    }, []);

    useEffect(() => {
        const slider = sliderRef.current;

        const handleTransitionEnd = () => {
            setIsTransitioning(false);
        };

        slider.addEventListener("transitionend", handleTransitionEnd);

        return () => {
            slider.removeEventListener("transitionend", handleTransitionEnd);
        };
    }, []);

    const scrollNext = () => {
        const screenWidth = window.innerWidth;
        let itemsPerPage = 3; // Default for larger screens

        if (screenWidth <= 700) {
            itemsPerPage = 1; // Adjust for smaller screens
        } else if (screenWidth <= 1100) {
            itemsPerPage = 2; // Adjust for mid-sized screens
        }

        const maxIndex = testimonialsList.length - itemsPerPage;

        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
            setIsTransitioning(true);
        }
    };

    const scrollPrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setIsTransitioning(true);
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => scrollNext(),
        onSwipedRight: () => scrollPrev(),
        trackMouse: true, // Ensure to track mouse events for testing on desktop
    });

    const testimonialsContainerWidth = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 700) {
            return `calc(1 * (${messageWidth}px + ${gapWidth}px) + ${gapWidth}px)`;
        } else if (screenWidth <= 1100) {
            return `calc(2 * (${messageWidth}px + ${gapWidth}px) - ${gapWidth}px)`;
        } else {
            return `calc(3 * (${messageWidth}px + ${gapWidth}px) - ${gapWidth}px)`;
        }
    };

    return (
        <section className={Styles.testimonials}>
            <header>
                <p>
                    Our work is top secret, and so are our clients, but here are
                    a few words that some said, in confidence of course.
                </p>
                <aside>
                    <div className={Styles.years}>
                        <h2>
                            22<span className={Styles.plus}>+</span>
                        </h2>
                        <p>Satisfied Clients</p>
                    </div>
                    <div className={Styles.years}>
                        <h2>
                            37<span className={Styles.plus}>+</span>
                        </h2>
                        <p>Completed Projects</p>
                    </div>
                </aside>
            </header>

            <div
                {...swipeHandlers} // Apply swipeHandlers here
                className={Styles.testimonials_container}
                style={{ width: testimonialsContainerWidth() }}>
                <div
                    className={Styles.testimonials__outer}
                    ref={sliderRef}
                    style={{
                        transform: `translateX(-${
                            currentIndex * (messageWidth + gapWidth)
                        }px)`,
                        transition: isTransitioning
                            ? "transform 0.5s ease-in-out"
                            : "none",
                    }}>
                    {testimonialsList.map((testimonial, index) => (
                        <div
                            key={index}
                            className={Styles.message}
                            style={{ minWidth: messageWidth }}>
                            <p>{testimonial.message}</p>
                            <div>
                                <h2>{testimonial.name}</h2>
                                <h3>{testimonial.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={Styles.test_nav}>
                <a className={Styles.work_together_link}>
                    Let's work together — get in touch
                </a>
                <div className={Styles.buttons}>
                    <div
                        className={`${Styles.button} ${Styles.button__prev}`}
                        onClick={scrollPrev}>
                        <svg
                            className={Styles.button__circle}
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 64 64"
                            fill="none">
                            <circle
                                cx="32"
                                cy="32"
                                r="32"
                                transform="matrix(-1 0 0 1 64 0)"
                                fill="#080808"
                            />
                            <circle
                                cx="32"
                                cy="32"
                                r="31.5"
                                transform="matrix(-1 0 0 1 64 0)"
                                stroke="white"
                                strokeOpacity="0.1"
                            />
                        </svg>
                        <svg
                            className={Styles.button_inside}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none">
                            <path
                                d="M19 12H5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 5L5 12L12 19"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div
                        className={`${Styles.button} ${Styles.button__next}`}
                        onClick={scrollNext}>
                        <svg
                            className={Styles.button__circle}
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 64 64"
                            fill="none">
                            <circle
                                cx="32"
                                cy="32"
                                r="32"
                                transform="matrix(-1 0 0 1 64 0)"
                                fill="#080808"
                            />
                            <circle
                                cx="32"
                                cy="32"
                                r="31.5"
                                transform="matrix(-1 0 0 1 64 0)"
                                stroke="white"
                                strokeOpacity="0.1"
                            />
                        </svg>
                        <svg
                            className={Styles.button_inside}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none">
                            <path
                                d="M19 12H5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 5L5 12L12 19"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
