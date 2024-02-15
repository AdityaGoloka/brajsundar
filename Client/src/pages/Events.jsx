import React, { useState } from "react";

const Events = () => {
  const [formModal, setFormModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    message: "",
    "organization name": "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    setFormModal(false); // Close the modal after submission
  };

  return (
    <div className=" overflow-x-hidden">
      {/* Background Image */}
      <div className="w-full h-full">
        <img
          src="./event-bg.jpg"
          alt="brajsundardas"
          className=" w-[100vw] mx-auto h-[80vh] object-cover"
        />
      </div>

      <div className="my-10 ">
        {/* Button  */}
        <button
          type="button"
          className="border rounded border-violet-500 text-white text-bold flex justify-center items-center bg-blue-400 m-auto w-fit px-14 py-5 text-black hover:bg-blue-600 cursor-pointer font-bold text-lg "
          onClick={() => setFormModal(true)}
        >
          Book Me
        </button>

        {formModal && (
          <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg overflow-auto max-h-full">
              <h1 className="text-black mb-4">
                BOOK BrajSundarDas
                <br />
                Please fill out the form below and provide as much information
                as possible.
              </h1>

              <div className="flex justify-end mb-4">
                <button
                  type="button"
                  className="text-gray-900 hover:text-gray-800"
                  onClick={() => setFormModal(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {Object.keys(formData).map((field, index) => (
                  <div key={index} className="col-span-1">
                    <label htmlFor={field} className="text-black">
                      {/* {field.charAt(0).toUpperCase() + field.slice(1)} */}
                    </label>
                    <input
                      type="text"
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      placeholder={field.toUpperCase()}
                      className="border-black border w-full px-2 py-1 text-black"
                    />
                  </div>
                ))}
                <div className="col-span-2 md:col-span-1">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
