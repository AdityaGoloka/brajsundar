import React, { useEffect, useState } from "react";
import WorkshopCard from "./WorkshopCard";
// import RatingCard from "./RatingCard";
// import VideoDuration from "./VideoDuration";
// import PriceFilterCard from "./PriceFilterCard.jsx";
// import RateDropDown from "./RateDropDown.jsx";
import axios from "axios";

const Workshop = () => {
  const [workShop, setWorkShop] = useState([]);
  const [displayedWorkshop, setDisplayedWorkshop] = useState(2);

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


  const handleLoadMore = () => {
    setDisplayedWorkshop((prevCount) => prevCount + 2);
  };

  return (
    <div className="my-10">
      <div className="my-10">
        <h1 className="text-center text-4xl font-bold mb-7">Workshop</h1>
      </div>{" "}
      {/* <div className="mx-[7rem] flex gap-10 justify-between lg:flex-row flex-col"> */}
      <div>

        <div className="flex flex-col gap-4 items-center">
          {workShop.slice(0, displayedWorkshop).map((workshops) => (
            <WorkshopCard
              key={workshops._id}
              id={workshops._id}
              workshopName={workshops.workshopName}
              workshopSlug={workshops.workshopSlug}
              workshopThumbnail={workshops.workshopThumbnail}
            />
          ))}
          {displayedWorkshop < workShop.length && (
            <button
              type="button"
              className="px-14 mx-auto text-lg focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={handleLoadMore}
            >
              Enroll Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Workshop;
