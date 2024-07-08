import About from "./About";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./Nav";
import Products from "./Products";
import Services from "./Services";

import Testimonials from "./Testimonials";

function App() {
    return (
        <>
            <NavBar></NavBar>
            <div className="page__wrap">
                <Header />
                <Services />
            </div>
            <Testimonials />
            <Products></Products>
            <About></About>
            <Footer></Footer>
        </>
    );
}

export default App;
