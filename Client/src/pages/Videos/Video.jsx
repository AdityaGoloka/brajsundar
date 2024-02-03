import React, { useEffect, useState } from "react";
import RatingCard from "./RatingCard";
import VideoDuration from "./VideoDuration";
import PriceFilterCard from "./PriceFilterCard.jsx";
import RateDropDown from "./RateDropDown.jsx";
import VideoCard from "./VideoCard";
import axios from "axios";

const Video = () => {
    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
        const getAllVideos = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/youtube/videos");
                console.log(response.data);
                setVideoData(response.data);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        getAllVideos();
    }, []);


    return (
        <div>
            <div>
                <h1 className="text-center text-4xl font-bold mb-7">Videos</h1>
            </div>{" "}
            <div className="mx-[7rem] flex gap-10 justify-between lg:flex-row flex-col">
                <div className="lg:block hidden">
                    {/* ratings */}
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
                </div>
                <div className="flex flex-col gap-4">
                    {videoData.map((videos) => (
                        <VideoCard
                            key={videos.id}
                            videoName={videos.videoName}
                            video_url={videos.video_url}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Video;