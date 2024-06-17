import Styles from "./header.module.css";

function Header() {
    return (
        <div className={Styles.header}>
            <div className={Styles.heading}>
                <h1>Specialist</h1>
                <h1>Entertainment</h1>
                <h1>Agency.</h1>
            </div>
            <p className={Styles.headingP}>
                From strategy to execution to content, we deliver answers for
                media companies in a digital age.
            </p>
            <a href="" className={Styles.workButton}>
                Let’s work together — get in touch
            </a>
        </div>
    );
}

export default Header;
