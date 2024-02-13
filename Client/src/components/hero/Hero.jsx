import "./hero.scss";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Global Public Speaker", "The Urban Spiritual Leader", "Author"],
    loop: true,
    delaySpeed: 500,
    typeSpeed: 150,
    deleteSpeed: 60,
  });

  return (
    // <div className="hero">
    //   <div className="wrapper px-10">
    //     <motion.div
    //       className="textContainer "
    //       variants={textVariants}
    //       initial="initial"
    //       animate="animate"
    //     >
    //       <motion.h2 variants={textVariants} className="">
    //         {text}
    //         <Cursor cursorColor="#4ca5ff" />
    //       </motion.h2>

    //       <motion.h1 variants={textVariants} className="font-bold">
    //         Spiritual Leader, Author, Educator
    //       </motion.h1>
    //     </motion.div>
    //   </div>
    //   <motion.div
    //     className="slidingTextContainer"
    //     variants={sliderVariants}
    //     initial="initial"
    //     animate="animate"
    //   >
    //     Spiritual Leader, Author, Educator
    //   </motion.div>
    //   {/* <motion.div className="imageContainer pr-[12rem] mt-10 object-cover justify-center items-center ">
    //     <img
    //       className="object-cover rounded-xl mx-auto items-center "
    //       style={{ width: "30rem", height: "31rem" }}
    //       src="./hero-image.png"
    //     />
    //   </motion.div> */}
    // </div>

    // Center image 
    <div className="hero">
      <div className="wrapper px-10">
        <div
          className="textContainer w-full "
        >
          <h2 variants={textVariants} className="animationHeader ">
            {text}
            <Cursor cursorColor="#4ca5ff" />
          </h2>

          <div className="imageContainer ">
            <img
              src="./hero-image.png"
            />
          </div>

          <h1 variants={textVariants} className="font-bold heroText">
            Spiritual Leader, Author, Educator
          </h1>
        </div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Spiritual Leader, Author, Educator
      </motion.div>

    </div>
  );
};

export default Hero;
