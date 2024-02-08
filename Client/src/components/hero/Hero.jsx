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
    <div className="hero ">
      <div className="wrapper px-10">
        <motion.div
          className="textContainer "
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} className="">
            {text}
            <Cursor cursorColor="#4ca5ff" />
          </motion.h2>
          <motion.h1 variants={textVariants} className="font-bold">
            Spiritual Leader, Author, Educator
          </motion.h1>
          {/* <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Courses
            </motion.button>
            <motion.button variants={textVariants} className="bg-white">
              Contact Me
            </motion.button>
          </motion.div> */}
          {/* <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          /> */}
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Spiritual Leader, Author, Educator
      </motion.div>
      <div className="imageContainer pr-[12rem]   lg:mb-10  object-cover ">
        <img
          className="object-cover rounded-xl mx-auto pb-5 "
          style={{ width: "30rem", height: "31rem" }}
          src="./hero-image.png"
          alt="braj"
        />
      </div>
    </div>
  );
};

export default Hero;
