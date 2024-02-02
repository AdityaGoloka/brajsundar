import Social from "../../pages/components/Social";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="lg:mx-[10rem] flex justify-between">
        {" "}
        <div className=" my-[2rem] bg-white w-24 rounded  ">
          <a href="/">
            {" "}
            <img
              src="https://www.brajsundar.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.fd5e1a42.png&w=128&q=75"
              alt=""
            />
          </a>
        </div>
        <div className="lg:block hidden my-[2rem]">
          <Social />
        </div>
      </div>
      {/* <h1 className="">hello </h1> */}
      <div className="wrapper">
        {/* <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lama Dev
        </motion.span> */}
        {/* <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;