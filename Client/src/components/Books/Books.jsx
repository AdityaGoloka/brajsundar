import { useRef, useEffect, useState } from "react";
import "./Books.scss";
import { motion, useAnimation, useScroll, useSpring, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";

SwiperCore.use([Navigation]);

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const truncatedBookDetail =
    item.bookDetail.length > 30
      ? `${item.bookDetail.split(" ").slice(0, 50).join(" ")} ...`
      : item.bookDetail;
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.bookThumbnail} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.bookName}</h2>
            <p>{truncatedBookDetail}</p>
            <div>
              {/* <select>
                <option defaultValue>Country</option>
                <option value={item.country}>{item.country}</option>
              </select> */}
              <a href={item.bookLink} target="_blank" rel="noopener noreferrer">
                <button>Buy</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Books = () => {
  const ref = useRef();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/books/getBooks"
        );
        const data = await response.json();
        setItems(data.data);
        console.log(items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const controls = useAnimation();

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    return date.toLocaleDateString();
  };

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
              Explore My Books
            </motion.h1>
            <div className="h-1 w-full bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {items.map((item) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="xl:w-1/3 md:w-1/2 p-4"
            >
              <div className="bg-gray-100 p-6 rounded-lg h-[23rem] w-[27rem]">
                <img
                  className="h-48 w-full object-contain object-top mb-6 rounded border-2 border-red-600"
                  src={item.bookThumbnail}
                  alt={item.bookName}
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {formatDate(item.createdAt)}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {item.title}
                </h2>
                <p className="text-base line-clamp-3">{item.bookDetail}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center items-center ">
          <a href="/blogs">
            <button className="text-white border border-blue-400 bg-blue-400 rounded-lg px-8 py-4 mt-8">Read More</button>
          </a>
        </div>
      </div>
    </motion.section >
  );
};

export default Books;
