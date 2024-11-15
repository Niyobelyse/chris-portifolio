import React, { useState } from 'react';
import { data } from "../data/data.js";

const Work = () => {
  const project = data;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewCertificate = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-24'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Certificates
          </p>
          <p className='py-6'>Check out some of my recent certificates</p>
        </div>

        {/* Container for certificates */}
        <div className="grid sm:grid-cols-2 py-20 md:grid-cols-3 gap-4">
          <div
            className="relative cursor-pointer"
            onClick={handleViewCertificate}
          >
            <img
              src="/NetCard.jpg"
              alt="NetCard Certificate"
              className="rounded-lg hover:scale-105 duration-300"
            />
            <p className="absolute bottom-0 left-0 bg-gray-900 bg-opacity-50 text-white text-sm px-2 py-1 w-full text-center">
              View Certificate
            </p>
          </div>
        </div>

        {/* Modal for viewing certificate */}
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative bg-white rounded-lg shadow-lg p-4 w-3/4 md:w-1/2">
              <img
                src="/NetCard.jpg"
                alt="NetCard Certificate"
                className="rounded-lg"
              />
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
