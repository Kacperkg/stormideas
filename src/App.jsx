import About from "./About";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./Nav";
import Products from "./Products";
import { ScrollProvider } from "./Scrollcontext";
import Services from "./Services";
import Testimonials from "./Testimonials";

function App() {
    return (
        <>
            <NavBar />
            <div className="page__wrap">
                <Header />
                <Services />
            </div>

            <Testimonials />
            <ScrollProvider>
                <Products />
                <About />
                <Footer />
            </ScrollProvider>
        </>
    );
}

export default App;
