import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./blogs.scss";

const Blogs = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          margin: "10px 0px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/articles/getArticles"
        );
        const data = await response.json();
        setItems(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    return date.toLocaleDateString();
  };

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY > windowHeight / 2) {
        controls.start({ opacity: 1 });
      } else {
        controls.start({ opacity: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  var sliderSettings = {
    // dots: true,
    // dotsClass: "custom-dots", // Add a custom class for the dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.section
      className="text-gray-600 body-font"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap w-full mb-16 justify-center">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 text-center">
            <motion.h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Explore My Blogs
            </motion.h1>
            <div className="h-1 w-full bg-indigo-500 rounded"></div>
          </div>
        </div>
        <Slider {...sliderSettings}>
          {items.map((item) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=" hover:scale-100 h-3"
            >
              <div className="bg-white/5 p-6  rounded-lg cursor-pointer  mx-2 ">
                <div className="h-[50%]">
                  {" "}
                  <img
                    className="h-48 w-full object-contain object-center mb-6 rounded"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                </div>
                <div className="h-[50% ] text-wrap text-balance">
                  <h2 className="text-2xl text-white font-bold font-medium title-font mb-4">
                    {item.title}
                  </h2>
                  <p className="text-md text-white ">{item.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
        <div className="flex justify-center items-center mt-10">
          <a href="/blogs">
            <button
              type="button"
              className="px-14 mx-auto text-lg focus:outline-none text-white bg-purple-700 hover:bg-purple-800  focus:ring-4 focus:ring-purple-300 font-medium rounded-lg  px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Read More
            </button>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Blogs;
