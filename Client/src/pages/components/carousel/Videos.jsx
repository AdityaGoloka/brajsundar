import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

const Videos = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/youtube/videos");
        setVideoData(response.data);
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

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="rounded-lg shadow-lg overflow-hidden max-w-screen-lg w-full mx-4">
        <Carousel>
          {videoData.map((video) => (
            <div key={video._id} className="w-full">
              <a
                href={video.video_url}
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
              <div className="">
                <iframe
                  title={`YouTube Video ${video._id}`}
                  className="w-full h-96 md:h-128 lg:h-160 xl:h-192"
                  src={`https://www.youtube.com/embed/${getYoutubeVideoId(video?.video_url)}`}
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
  );
};

export default Videos;
