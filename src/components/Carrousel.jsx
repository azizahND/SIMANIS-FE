import React from "react";
import useCarousel from "../hooks/useCarrousel";

const Carrousel = ({ images = [] }) => {
  const { currentIndex, handleNext, handlePrev } = useCarousel(images.length);

  return (
    <div className="relative w-full h-[400px]"> {/* Fix tinggi agar konsisten */}
      <div className="relative overflow-hidden w-full h-full bg-white rounded-lg">
        <div
          className="flex transition-transform duration-700 h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0 h-full">
                <div className="flex justify-center items-center w-full h-full bg-gray-100">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="w-full flex-shrink-0 h-full">
              <div className="flex justify-center items-center w-full h-full bg-gray-100">
                <span className="text-4xl text-gray-800">
                  No images available
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute top-1/2 -translate-y-1/2 left-2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg"
      >
        <svg
          className="w-5 h-5 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNext}
        className="absolute top-1/2 -translate-y-1/2 right-2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg"
      >
        <svg
          className="w-5 h-5 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </div>
  );
};

export default Carrousel;
