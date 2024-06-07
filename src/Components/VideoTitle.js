import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-full md:w-screen aspect-video absolute pt-[10%] px-4 sm:px-20 text-white bg-gradient-to-r from-black overflow-x-hidden'>
      <h1 className='text-4xl sm:text-6xl font-bold'>{title}</h1>
      <p className='py-4 sm:py-6 text-base sm:text-lg md:w-2/3'>{overview}</p>
      <div className="flex flex-col sm:flex-row gap-2">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
          Play
        </button>
        <button className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded w-full sm:w-auto">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
