import React, { useEffect, useState } from "react";
import WorkshopCard from "./WorkshopCard";
import RatingCard from "./RatingCard";
import VideoDuration from "./VideoDuration";
import PriceFilterCard from "./PriceFilterCard.jsx";
import RateDropDown from "./RateDropDown.jsx";
import axios from "axios";

const Workshop = () => {
  const [workShop, setWorkShop] = useState([]);

  useEffect(() => {
    const getAllWorkshopData = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/workshop/getWorkshops"
      );
      console.log(response.data.data);
      setWorkShop(response.data.data);
    };

    getAllWorkshopData();
  }, []);

  return (
    <div className="my-10">
      <div className="my-10">
        <h1 className="text-center text-4xl font-bold mb-7">Workshop</h1>
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
          {workShop.map((workshops) => (
            <WorkshopCard
              key={workshops._id}
              id={workshops._id}
              workshopName={workshops.workshopName}
              workshopSlug={workshops.workshopSlug}
              workshopThumbnail={workshops.workshopThumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workshop;
