import { useRef, useEffect, useState } from "react";
import "./Books.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Books</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Swiper
          navigation
          className="swiper-container"
          slidesPerView={1}
          spaceBetween={20}
        >
          {items.map((item) => (
            <SwiperSlide key={item._id}>
              <Single item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Books;
