import { useRef } from "react";
import Slider from "react-slick";
import Styles from "./testimonials.module.css";

function Testimonials() {
    const settings = {
        arrows: false,
        infinite: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                },
            },
        ],
    };

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
    ];

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
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

            <div className={Styles.testimonials_container}>
                <Slider
                    {...settings}
                    ref={(slider) => {
                        sliderRef = slider;
                    }}
                    className={Styles.slick_custom}>
                    {testimonialsList.map((testimonial, index) => (
                        <div className={Styles.message} key={index}>
                            <p>{testimonial.message}</p>
                            <div>
                                <h2>{testimonial.name}</h2>
                                <h3>{testimonial.title}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className={Styles.test_nav}>
                <a>Let’s work together — get in touch</a>
                <div className={Styles.buttons}>
                    <div className={Styles.button} onClick={previous}>
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
                        onClick={next}>
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
