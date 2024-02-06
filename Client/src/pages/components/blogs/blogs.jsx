import { useRef, useEffect, useState } from "react";
import "./blogs.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom"; // Import navigate from react-router-dom

SwiperCore.use([Navigation]);

const Single = ({ item }) => {
  const ref = useRef();
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 200]);

  const truncatedBlogDetail =
    item.content.length > 30
      ? `${item.content.split(" ").slice(0, 50).join(" ")} ...`
      : item.content;

  const handleViewMore = (id) => {
    // Navigate to the article detail page
    navigate(`/article/${id}`);
  };

  return (
    <section>
      <div className="container my-5 lg:my-0 ">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.thumbnail} alt="" />
          </div>
          <motion.div className="textContainer " style={{ y }}>
            <h2>{item.title}</h2>
            <p>{truncatedBlogDetail}</p>
            <div>
              {/* <select>
                <option defaultValue>Country</option>
                <option value={item.country}>{item.country}</option>
              </select> */}
              <a href={item.bookLink} target="_blank" rel="noopener noreferrer">
                <button onClick={() => handleViewMore(item._id)}>Buy</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Blogs = () => {
  const ref = useRef();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/articles/getArticles"
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
    damping: 10,
  });

  return (
    <div className="portfolio overflow-x-hidden " ref={ref}>
      <div className="progress">
        <h1>Blogs</h1>
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

export default Blogs;
