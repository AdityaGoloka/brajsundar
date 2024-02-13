import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Videos = () => {
  const ref = useRef();
  const [loading, setLoading] = useState(true);
  const [videoData, setVideoData] = useState([]);

  // useEffect(() => {
  //   const getVideos = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:5000/api/youtube/videos"
  //       );
  //       setVideoData(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching videos:", error);
  //     }
  //   };

  //   getVideos();
  // }, []);

  // const getYoutubeVideoId = (url) => {
  //   const regex = /[?&]v=([^?&]+)/;
  //   const match = url.match(regex);
  //   return match && match[1];
  // };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref} style={{ width: "100%" }}>
      <div className="flex flex-wrap w-full mb-16 justify-center">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 text-center">
          <motion.h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            Explore Videos
          </motion.h1>
          <div className="h-1 w-full bg-indigo-500 rounded"></div>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen relative">
        <div className="rounded-lg overflow-hidden w-full mx-4 h-full">
          <Carousel
            autoPlay={true}
            dynamicHeight={false}
            interval={1000}
            showIndicators={false}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            swipeable={true}
            className="h-full overflow-visible"
            style={{ overflow: "visible" }} // Adjusted styling to prevent cropping
          >
            <div>
              <img src="https://www.megamaxaviation.com/wp-content/uploads/2023/01/Pilgrimage-to-Char-dham-yatra-1568x824.jpg" style={{ width: "80%", height: "100%" }} />
            </div>
            <div>
              <img src="https://www.megamaxaviation.com/wp-content/uploads/2024/01/Costs-Involved-in-Char-Dham-Yatra-By-Helicopter.jpg" style={{ width: "80%", height: "100%" }} />
            </div>
            <div>
              <img src="https://www.megamaxaviation.com/wp-content/uploads/2024/01/Char-Dham-Yatra-by-Helicopter-2024.jpg" style={{ width: "80%", height: "100%" }} />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Videos;
