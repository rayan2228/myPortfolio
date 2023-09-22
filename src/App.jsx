import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Expertise/>
      <About/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
    </>
  );
}

export default App;
