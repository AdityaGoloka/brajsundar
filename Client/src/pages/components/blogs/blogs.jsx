import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./blogs.scss";

const Blogs = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/articles/getArticles");
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
        <div className="flex flex-wrap -m-4">
          {items.slice(0, 6).map((item) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="xl:w-1/3 md:w-1/2 p-4"
            >
              <div className="bg-gray-100 p-6 rounded-lg h-[18rem] w-[27rem]">
                <img
                  className="h-48 w-full object-contain object-center mb-6 rounded border-2 border-red-600"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {formatDate(item.createdAt)}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {item.title}
                </h2>
                <p className="text-base leading-5">{item.content}</p>
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

export default Blogs;
