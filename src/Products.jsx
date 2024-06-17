// Products.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "./Scrollcontext"; //
import img from "./assets/Img.png";
import img2 from "./assets/Img2.png";
import Styles from "./products.module.css";

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger);

function Products() {
    const productsRef = useRef(null);
    const { setScrollAmount } = useContext(ScrollContext); // Use the context

    useEffect(() => {
        if (!productsRef.current) return;
        const products = productsRef.current;

        const getScrollAmount = () => {
            if (!products) return 0;
            let productsWidth = products.scrollWidth;
            return -(productsWidth - window.innerWidth);
        };

        const scrollAmount = getScrollAmount();
        setScrollAmount(scrollAmount); // Update the context with the scroll amount

        const tween = gsap.to(products, {
            x: scrollAmount,
            duration: 3,
            ease: "none",
        });

        ScrollTrigger.create({
            trigger: products,
            start: "top 5%",
            end: () => `+=${scrollAmount * -1}`,
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
            markers: false,
        });

        return () => {
            tween.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [setScrollAmount]);

    return (
        <div className={Styles.products}>
            <h2>
                Take your social promotion to the next level with our flagship
                products.
            </h2>
            <div className={Styles.product__container} ref={productsRef}>
                <div
                    className={Styles.product}
                    style={{ backgroundImage: `url(${img})` }}>
                    <div>
                        <h2>Stellar®</h2>
                        <p>A comprehensive site builder</p>
                    </div>
                    <a href="#">Find out more</a>
                </div>
                <div
                    className={Styles.product}
                    style={{ backgroundImage: `url(${img2})` }}>
                    <div>
                        <h2>Smart</h2>
                        <p>
                            A new era of smart homes. Control and secure your
                            home with the click of a button.
                        </p>
                    </div>
                    <a href="#">Find out more</a>
                </div>
            </div>
        </div>
    );
}

export default Products;
