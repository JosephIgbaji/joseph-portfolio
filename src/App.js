import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Components/porfolio/Porfolio";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
