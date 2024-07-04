import Styles from "./about.module.css";
import layer2 from "./assets/layer2.png";
import layer3 from "./assets/layer3.png";
import layer1 from "./assets/layerimg1.png";

export default function About() {
    return (
        <div className={Styles.about}>
            <div className={Styles.about__container}>
                <p>
                    As passionate, enthusiast teams and
                    <img src={layer1}></img>
                    individuals, we aim to create something truly exceptional
                    for others. By blending our best professional skills
                    <img src={layer2}></img>
                    discussions, and empathy, we fostered a unique and
                    <img src={layer3}></img>collaborative environment for our
                    colleagues.
                </p>
            </div>
        </div>
    );
}
