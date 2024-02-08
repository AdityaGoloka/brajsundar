import React, { useEffect, useState } from "react";
import RatingCard from "./RatingCard";
import VideoDuration from "./VideoDuration";
import PriceFilterCard from "./PriceFilterCard.jsx";
import RateDropDown from "./RateDropDown.jsx";
import VideoCard from "./VideoCard";
import axios from "axios";

const Books = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const getAllVideos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/books/getBooks"
        );
        console.log(response.data);
        setVideoData(response.data.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    getAllVideos();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-bold mb-7 my-10">Books</h1>
      </div>{" "}
      {/* <div className="mx-[7rem] flex gap-10 justify-between lg:flex-row flex-col"> */}
      <div>
        {/* <div className="lg:block hidden">
          <div className="w-full my-5 mb-10">
            <RateDropDown />
          </div>
          <div className="w-full my-10">
            <h1 className="font-bold">Ratings</h1> <RatingCard />
          </div>

          <div className="w-full my-10">
            <h1 className="font-bold">Video Duration</h1> <VideoDuration />
          </div>
          <div className="w-full my-10">
            <h1 className="font-bold">Video Duration</h1> <PriceFilterCard />
          </div>
        </div> */}
        <div className="flex flex-col gap-4 items-center">
          {videoData.map((videos) => (
            <VideoCard
              key={videos.id}
              bookName={videos.bookName}
              thumbnail={videos.bookThumbnail}
              bookLink={videos.bookLink}
            />
            // <h1>hello world</h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
