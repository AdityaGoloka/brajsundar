import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Videos = () => {
  const ref = useRef();
  const [loading, setLoading] = useState(true);
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/youtube/videos"
        );
        setVideoData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    getVideos();
  }, []);

  const getYoutubeVideoId = (url) => {
    const regex = /[?&]v=([^?&]+)/;
    const match = url.match(regex);
    return match && match[1];
  };

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
      <div className="flex flex-wrap w-full mb-16 justify-center">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 text-center">
          <motion.h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            Explore Videos
          </motion.h1>
          <div className="h-1 w-full bg-indigo-500 rounded"></div>
        </div>
      </div>
      <div className="flex items-center h-[250rem] justify-center min-h-screen relative">
        <div className="rounded-lg overflow-hidden max-w-screen-lg w-full border border-blue-500 mx-4 h-full">
          <Carousel
            autoPlay={false}
            dynamicHeight={true}
            interval={5000}
            infiniteLoop={false}
            showArrows={false}
            showStatus={false}
            swipeable={true}
            className="h-full"
          >
            {videoData.map((video) => (
              <div key={video._id} className="w-full h-full ">
                <a
                  href={video?.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                <div className="h-[600px] w-full border border-green-700">
                  <iframe
                    title={`YouTube Video ${video?._id}`}
                    className="w-full h-full md:h-128 lg:h-160 xl:h-192"
                    src={`https://www.youtube.com/embed/${getYoutubeVideoId(
                      video?.video_url
                    )}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Videos;
