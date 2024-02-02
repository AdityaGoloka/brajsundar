import React from "react";

const About = () => {
  return (
    <div className="mx-[10rem]">
      <div>
        {/* <h1 className="text-center text-3xl font-bold mb-7">About Me</h1> */}
        <h1 className="text-center text-3xl font-bold mb-7">About Me</h1>
      </div>
      <div className="flex max-w-[100%] gap-10">
        <div className="max-w-[50%]">
          <h1 className=" text-2xl font-bold mb-7 ">Brajsundar Das</h1>
          <p>
            Brajsundar Das is a multifaceted individual, encompassing the roles
            of a spiritual leader, author, global public speaker, educator, and
            relationship coach. His profound quest to unravel the ultimate
            purpose of life led him to embark on a transformative journey when
            he became associated with ISKCON in 2002. It's noteworthy that he is
            a devoted disciple of the esteemed His Holiness Radha Govind Das
            Goswami.
          </p>
        </div>
        <div className="max-w-[40%] rounded">
          <img
            src="https://www.brajsundar.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage5.ee7f73a3.jpg&w=640&q=75"
            alt=""
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
