import call from "./assets/phone.png";
import email from "./assets/email.png";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Us from "./components/Us";
import Ser from "./components/Ser";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <div className=" justify-center items-center gap-5 max-md:flex  hidden py-3">
        <a
          href="tel:01000094373 "
          className="hover:-translate-y-1 transition-all"
        >
          <img className="w-7 " src={call} alt="" />
        </a>
        <a
          href="mailto:info@fadalyoffice.com "
          className="hover:-translate-y-1 transition-all"
        >
          <img className="w-7 " src={email} alt="" />
        </a>
      </div>
      <Navbar />
      <Hero />
      <Us />
      <Ser />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
