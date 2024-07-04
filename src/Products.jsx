import ImageShowcase from "./components/imageShow";
import Styles from "./products.module.css";

function Products() {
    return (
        <div className={Styles.products}>
            <h2>
                Take your social promotion to the next level with our flagship
                products.
            </h2>
            <ImageShowcase></ImageShowcase>
        </div>
    );
}

export default Products;
