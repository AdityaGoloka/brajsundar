import React from "react";

const ReelCard = ({ reelName, url, reelThumbnail }) => {
  return (
    <div className="">
      <a href={url} target="_blank">
        <div
          className="flex flex-col border rounded-lg
                 shadow md:flex-row  
                 bg-transparent border-none cursor-pointer 
                 hover:bg-white/5 bg-white/5 py-3 2xl:w-[30rem] md:h-[15rem] px-2 "
        >
          <div className="max-w-xs px-2 my-auto">
            <img
              src="https://d2lnag86znkprh.cloudfront.net/Images/Workshop/65c34398c47a713b097bcdbe/thumbnail_4.png"
              target="_blank"
              className="rounded-t-lg"
            />
          </div>

          <div className="flex flex-col  p-4 leading-normal max-w-5xl my-auto ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white max-w-5xl text-center">
              {reelName}
            </h5>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ReelCard;
