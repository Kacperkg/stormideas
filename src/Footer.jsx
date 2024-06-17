import { motion } from "framer-motion";
import logo from "./assets/Logo.svg";
import Styles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={Styles.footer}>
            <div className={Styles.footer__header}>
                <div className={Styles.footer__parallax}>
                    <h2>Looking for a partner to start a project with?</h2>
                </div>
                <motion.div
                    className={Styles.footer__header__contact}
                    variants={{
                        hidden: { opacity: 0, y: 200 },
                        visable: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visable"
                    transition={{
                        duration: 1,
                        delay: 3,
                    }}>
                    <a href="">Let’s work together — we’re ready</a>
                </motion.div>
            </div>
            <div className={Styles.footer__footer}>
                <img src={logo} alt="" className={Styles.logo} />
                <div className={Styles.footer__text}>
                    <div
                        className={`${Styles.footer__column} ${Styles.footer__hiring}`}>
                        <h3>We’re hiring</h3>
                        <p>
                            We’re also always on the lookout for established or
                            emerging talent.
                        </p>
                        <a href="">View our vacancies</a>
                    </div>
                    <div
                        className={`${Styles.footer__column} ${Styles.footer__address}`}>
                        <h3>Our address</h3>
                        <p>Storm Ideas Limited, Anderson House</p>
                        <p>2nd Floor Breadalbane Street</p>
                        <p>Edinburgh United Kingdom EH6 5JR</p>
                    </div>
                    <div
                        className={`${Styles.footer__column} ${Styles.footer__contact}`}>
                        <h3>Let’s work together</h3>
                        <p>+44 (0) 131 460 8282</p>
                        <p>hello@StormIdeas.com</p>
                    </div>
                    <div
                        className={`${Styles.footer__column} ${Styles.footer__follow}`}>
                        <h3>Follow us</h3>
                        <p>LinkedIn</p>
                        <p>Facebook</p>
                        <p>X (Twitter)</p>
                    </div>
                </div>
                <div className={Styles.footer__copy}>
                    <p>© Storm Ideas Ltd 2008 — 2023</p>
                    <p>Terms — Privacy </p>
                </div>
            </div>
        </div>
    );
}
