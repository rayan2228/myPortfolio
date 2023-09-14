import About from "./components/About";
import Banner from "./components/Banner";
import Expertise from "./components/Expertise";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Expertise/>
      <About/>
      <Portfolio/>
    </>
  );
}

export default App;
