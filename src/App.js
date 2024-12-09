import Header from "./landing-page/Header";
import Hero from "./landing-page/Hero";
import About from "./landing-page/About";
import Services from "./landing-page/Services";
import Contact from "./landing-page/Contact";
import Footer from "./landing-page/Footer";
import "./landing-page/css/style.css";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
