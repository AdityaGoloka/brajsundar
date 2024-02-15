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
    // image left
    <div className="hero  lg:-pt-10 overflow-x-hidden lg:relative absolute top-[5rem] lg:top-0">
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Spiritual Leader, Author, Educator
      </motion.div>
      <motion.div className="absolute lg:block hidden pl-10 sm:pr-0 lg:pr-[12rem] mt-14 object-cover  items-center ">
        <img
          className="object-cover rounded-xl mx-auto items-center -ml-12"
          style={{ width: "42rem", height: "29rem" }}
          src="./hero3.png"
        />
      </motion.div>
      <div className="wrapper lg:px-10 flex row-reverse flex-col">
        <motion.div
          className="textContainer ml-auto  pb-[5rem]"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.span
            variants={textVariants}
            className="text-[1.5rem] lg:text-[2rem] lg:text-bold pt-10 text-purple-500"
          >
            {text}
            <Cursor cursorColor="#4ca5ff" />
          </motion.span>

          <motion.h1 variants={textVariants} className="font-bold">
            Spiritual Leader
          </motion.h1>
          <motion.h1 variants={textVariants} className="font-bold">
            Author & Educator
          </motion.h1>
        </motion.div>
        <motion.div className="lg:hidden block  sm:pr-0  object-cover  items-center ">
          <img
            className="object-cover rounded-xl mx-auto items-center  -mt-[7rem]"
            style={{ width: "80rem", height: "20rem" }}
            src="./hero3.png"
          />
        </motion.div>
      </div>
    </div>

    // Center image
    // <div className="hero">
    //   <div className="wrapper px-10">
    //     <div className="textContainer w-full ">
    //       <h2 variants={textVariants} className="animationHeader ">
    //         {text}
    //         <Cursor cursorColor="#4ca5ff" />
    //       </h2>{" "}
    //       <h1 className="font-bold heroText"> Author, Educator</h1>
    //       <h1 className="font-bold heroText2">Spiritual Leader</h1>
    //       <div className="imageContainer items-center">
    //         <img src="./hero-image.png" className="mx-auto" />
    //       </div>
    //     </div>
    //   </div>

    //   <motion.div
    //     className="slidingTextContainer"
    //     variants={sliderVariants}
    //     initial="initial"
    //     animate="animate"
    //   >
    //     Spiritual Leader, Author, Educator
    //   </motion.div>
    // </div>

    // image-right
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
    //       {/* <motion.div variants={textVariants} className="buttons">
    //         <motion.button variants={textVariants}>
    //           See the Latest Courses
    //         </motion.button>
    //         <motion.button variants={textVariants} className="bg-white">
    //           Contact Me
    //         </motion.button>
    //       </motion.div> */}
    //       {/* <motion.img
    //         variants={textVariants}
    //         animate="scrollButton"
    //         src="/scroll.png"
    //         alt=""
    //       /> */}
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
    //   <motion.div className="imageContainer pr-[12rem] mt-5     object-cover ">
    //     <img
    //       className="object-cover rounded-xl mx-auto items-center "
    //       style={{ width: "33rem", height: "29rem" }}
    //       src="./hero3.png"
    //     />
    //   </motion.div>
    // </div>
  );
};

export default Hero;
