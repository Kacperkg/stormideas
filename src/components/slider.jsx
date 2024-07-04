import Slider from "react-slick";
import Styles from "../testimonials.module.css";

export default function Carousel() {
    var settings = {
        arrows: false,
        infinite: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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

    return (
        <>
            <Slider {...settings}>
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
        </>
    );
}
