import About from "./About";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./Nav";
import Products from "./Products";

import Testimonials from "./Testimonials";

function App() {
    return (
        <>
            <NavBar></NavBar>
            <Header></Header>
            <Testimonials></Testimonials>
            <Products></Products>
            <About></About>
            <Footer></Footer>
        </>
    );
}

export default App;
