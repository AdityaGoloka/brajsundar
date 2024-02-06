import React from "react";
import Contact from "../components/contact/Contact";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Parallax from "../components/parallax/Parallax";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "../components/services/Services";
import Mainnavbar from "../components/mainNavbar/Mainnavbar";
import Blog from "./components/blogs/blogs.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Videos from "./components/carousel/Videos.jsx";
import Books from "../components/Books/Books.jsx";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Uncomment the following lines */}
      {/* <Cursor /> */}
      <section id="Homepage">
        {/* Uncomment the following lines */}
        {/* <div className="md:hidden block"> */}
        {/* <Navbar /> */}
        {/* </div> */}
        {/* Uncomment the following lines */}
        {/* <div className="md:block hidden">
          <Mainnavbar />
        </div> */}
        <Hero />
      </section>
      {/* <section id="Services">
        <Parallax type="services" />
      </section> */}
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      {/* <section>
        {" "}
        <Portfolio />
      </section> */}
      {/* <section> */}
      <div className="my-12"></div>
      <section id="portfolio">
        <Blog />
      </section>
      <div className="my-[5rem]"></div>

      <section id="portfolio">
        <Books />
      </section>
      <div className="my-[8rem]"></div>

      {/* </section> */}
      <section>
        {" "}
        <Videos />
      </section>
      <div className="my-[5rem]"></div>

      <section>
        <Contact />
      </section>
      <div className="my-10"></div>

      {/* <section id="Footer"> */}
      <Footer />
      {/* </section> */}
      {/* Framer Motion Crash Course */}
      {/* Uncomment the following lines */}
      {/* <Test/>
      <Test/> */}
    </div>
  );
};

export default Home;
