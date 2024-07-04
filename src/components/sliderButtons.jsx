import React from "react";
import Styles from "../testimonials.module.css";

const CustomLeftArrow = ({ onClick }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType },
    } = rest;
    return (
        <div className={Styles.button} onClick={() => onClick()} role="button">
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
    );
};

const CustomRightArrow = ({ onClick }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType },
    } = rest;
    return (
        <div
            className={`${Styles.button} ${Styles.button__next}`}
            onClick={() => onClick()}
            role="button">
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
    );
};

export { CustomLeftArrow, CustomRightArrow };
