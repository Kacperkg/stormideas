import React, { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Styles from "./testimonials.module.css";

function Testimonials() {
    const testimonialsList = [
        {
            message:
                "Pure magic! Storm Ideas brought our website to life with captivating design and seamless functionality. Engaging fans worldwide, their dedication made dreams come true. Excited for the future!",
            name: "Michael",
            title: "PO at Confidential Company",
        },
        {
            message:
                "A slam dunk experience! Storm Ideas innovation and expertise turned our app vision into reality. Exceeding expectations with a user-friendly interface, they elevated fan engagement.",
            name: "Jay",
            title: "PO at Confidential Company",
        },
        {
            message:
                "Unforgettable collaboration! The team at Storm Ideas, their creativity and technical prowess elevated our entertainment company's online presence. Phenomenal partnership!",
            name: "Cristina",
            title: "PO at Confidential Company",
        },
        {
            message:
                "Absolutely amazing! Storm Ideas transformed our online strategy, driving engagement through the roof. Highly recommend their expertise and dedication.",
            name: "Alex",
            title: "PO at Confidential Company",
        },
        {
            message:
                "Brilliant team! Storm Ideas' innovative approach and technical skills took our project to the next level. Thrilled with the results.",
            name: "Samantha",
            title: "PO at Confidential Company",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sliderRef = useRef(null);
    const [messageWidth, setMessageWidth] = useState(424); // Initial width for larger screens
    const gapWidth = 24;

    // Effect to measure message width and update on resize
    useEffect(() => {
        const updateMessageWidth = () => {
            const screenWidth = window.innerWidth;
            console.log("Screen width:", screenWidth);

            if (screenWidth <= 1200) {
                setMessageWidth(320); // Adjust width for smaller screens
            } else if (screenWidth <= 1440) {
                setMessageWidth(380); // Adjust width for mid-sized screens
            } else {
                setMessageWidth(424); // Default width for larger screens
            }
        };

        // Set initial message width
        updateMessageWidth();

        // Update message width on window resize
        window.addEventListener("resize", updateMessageWidth);

        // Clean up
        return () => window.removeEventListener("resize", updateMessageWidth);
    }, []);

    // Effect to handle transitions and infinite scrolling
    useEffect(() => {
        const slider = sliderRef.current;

        const handleTransitionEnd = () => {
            setIsTransitioning(false);

            // If reached the end, jump to the beginning without transition
            if (currentIndex === testimonialsList.length) {
                setCurrentIndex(0);
                slider.style.transition = "none";
                slider.style.transform = `translateX(-${messageWidth}px)`;
            }
            // If reached the beginning, jump to the end without transition
            else if (currentIndex === -1) {
                setCurrentIndex(testimonialsList.length - 1);
                slider.style.transition = "none";
                slider.style.transform = `translateX(-${
                    testimonialsList.length * (messageWidth + gapWidth)
                }px)`;
            }
        };

        slider.addEventListener("transitionend", handleTransitionEnd);

        return () => {
            slider.removeEventListener("transitionend", handleTransitionEnd);
        };
    }, [currentIndex, testimonialsList.length, messageWidth]);

    // Function to scroll to the next testimonial
    const scrollNext = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    // Function to scroll to the previous testimonial
    const scrollPrev = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => scrollNext(),
        onSwipedRight: () => scrollPrev(),
    });

    // Calculate the width for testimonials_container
    const testimonialsContainerWidth = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 700) {
            return `calc(1 * (${messageWidth}px + ${gapWidth}px) - ${gapWidth}px)`;
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
                className={Styles.testimonials_container}
                style={{ width: testimonialsContainerWidth() }}>
                <div
                    {...handlers}
                    className={Styles.testimonials__outer}
                    ref={sliderRef}
                    style={{
                        transform: `translateX(-${
                            (currentIndex + 1) * (messageWidth + gapWidth)
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
