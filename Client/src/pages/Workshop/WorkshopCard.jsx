import React from "react";

const WorkshopCard = ({
  id,
  workshopName,
  workshopSlug,
  workshopThumbnail,
}) => {
  return (
    <div
      className="border  border-white/10 rounded shadow-2xl  
    mx-10 lg:mx-2 lg:p-4 hover:bg-white/5 lg:w-[50rem] md:w-[40rem] w-[90%] 2xl:w-[50%] p-10"
      // style={{ width: "50rem" }}
    >
      {" "}
      <div
        // href={`/academy/workshop-detail/${id}`}
        className="flex flex-col border rounded-lg shadow md:flex-row 
        max-w-3xl bg-transparent border-none cursor-pointer py-5"
      >
        <div className="max-w-xs md:m-0 m-auto">
          <img
            className="rounded-t-lg"
            // src="https://d2lnag86znkprh.cloudfront.net/Images/Workshop/65c32f8bc1fd65511b84cc87/thumbnail_1.png"
            src={
              "https://brajsundar.s3.ap-south-1.amazonaws.com/" +
              workshopThumbnail
            }
            alt="workshopThumbnail"
          />
        </div>
        <div className="flex w flex-col p-4 leading-normal max-w-5xl 2xl:w-full 2xl:ml-10 m-auto md:m-0">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white max-w-5xl 2xl:text-2xl ">
            {/* Adjusted width using max-w-3xl */}
            {workshopName}
          </h5>
          <p className="mb-3 font-normal  text-gray-200 w-3xl 2xl:text-lg">
            {/* Adjusted width using max-w-3xl */}
            {workshopSlug}
          </p>
          <div>
            <button
              type="button"
              className="px-14 mx-auto text-lg focus:outline-none text-white
               bg-purple-700 hover:bg-purple-800  focus:ring-4 focus:ring-purple-300
                font-medium rounded-lg  px-4 py-2 mb-2 bg-purple-600 
                hover:bg-purple-700 focus:ring-purple-900"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
