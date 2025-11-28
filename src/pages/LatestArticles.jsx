import React from "react";

const LatestArticles = () => {
  return (
    
    <div className="bg-[rgb(247,245,243)] min-h-screen px-6 md:px-40 py-10">
      {/* Header */} 
      <h1 className="text-4xl md:text-5xl font-semibold text-left md:text-center text-[#121212]">
        Latest articles
      </h1>
      <p className="text-left md:text-center mt-3 text-gray-700 md:text-lg">
        We publish cutting-edge energy humanities research and news.
      </p>

      {/* Main Articles */}
      <div className="mt-8 space-y-10">
        {/* ARTICLE 1 */}
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-7 border-b border-black/30 pb-3 ">
          {/* Text Container */}
          <div className="flex flex-col justify-start items-start">
            <p className="text-sm text-gray-500  uppercase">November 12, 2025</p>
            <h2 className="text-2xl md:text-3xl mt-2 font-semibold ">
              The Lithium Energy Colony: Introducing 
            </h2>
            <h2>
           “Mining for the Climate” Season 2 </h2>
            <p className="mt-4 text-gray-800 font-medium">Nate Otjen</p>
          </div>

          {/* Image Container */}
          <div className="flex-1 md:flex-none">
            <img
              src="src/assets/images/image1.png"
              className="h-48 md:h-48 w-85 object-cover -mt-5"

              alt="Article 1"
            />
          </div>
        </div>

        {/* ARTICLE 2 */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-7 border-b border-black/30 pb-3 ">
          {/* Text Container */}
          <div className="flex flex-col justify-start items-start">
            <p className="text-sm text-gray-500 uppercase">November 3, 2025</p>
            <h2 className="text-2xl md:text-3xl mt-2 font-semibold leading-snug">
              From Pipeline Dreams to Solar Futures:</h2>
                <h2>
              The New Extractive Politics
           </h2>
            <p className="mt-4 text-gray-800 font-medium">Sarah Lopez</p>
          </div>

          {/* Image Container */}
          <div className="flex-1 md:flex-none -mt-5">
            <img
              src="src/assets/images/image2.jpg"
              className="h-48 md:h-48 w-85 object-cover "
              alt="Article 2"
            />
          </div>
        </div>

        {/* ARTICLE 3 */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-black/30 pb-3 ">
          {/* Text Container */}
          <div className="flex flex-col justify-start items-start">
            <p className="text-sm text-gray-500 uppercase">August 28, 2025</p>
            <h2 className="text-2xl md:text-3xl mt-2 font-semibold leading-snug">
              The Promise of Electrification
            </h2>
            <p className="mt-4 text-gray-800 font-medium">Harry Pitt Scott</p>
          </div>

          {/* Image Container */}
          <div className="flex-1 md:flex-none -mt-5">
            <img
              src="src/assets/images/image3.png"
              className="h-48 md:h-48 w-85 object-cover"
              alt="Article 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
