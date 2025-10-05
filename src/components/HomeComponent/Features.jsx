
import React from "react";
const Features = ({ middleFeature, rightFeature }) => {

  return (
    <>
      <div className="container mx-auto px-10 mt-10">
        <div className="flex flex-col md:flex-row gap-8   ">
          {/* Left Section */}
          <div className="md:w-2/4 h-[600px]  flex flex-col justify-center  ">
            <div className="w-[88%] ">
              <h2 className="text-3xl md:text-[40px] font-unbounded font-bold mb-4">What Makes QuantumCrafters Different</h2>
              <p className="text-gray- font-montserrat">At QuantumCrafters Studio, we blend human creativity with AI precision to help brands grow faster, work smarter,
                and scale effortlessly. From startups chasing traction to enterprises optimizing every touchpoint we turn digital chaos into automated clarity
              </p>
            </div>
          </div>
          {/* Middle Section */}

          <div id="scroll-container" className="md:w-1/4 flex flex-col justify-center gap-6   border-gray-300 px-6">
            <div id="scroll-text">
              {middleFeature.map((feature, idx) => (
                <div key={idx} >
                  <div className="p-3">
                    <h3 className="font-semibold mb-2 font-montserrat text-[20px]">{feature.title}</h3>
                    <p className="text-[#000000] font-montserrat text-[15px]">{feature.description}</p>
                  </div>
                  <hr className="border-1 border-gray-300" />
                </div>
              ))}
            </div>

          </div>


          {/* Right Section */}
          <div id="scroll-container1" className="md:w-1/4 flex flex-col gap-6 ">
           <div id="scroll-text1">
             {rightFeature.map((feature, idx) => (
              <div key={idx}>

                <div className=" p-5">
                  <h3 className="font-semibold mb-2 font-montserrat text-[20px]">{feature.title}</h3>
                  <p className="text-gray-600   font-montserrat text-[15px] ">{feature.description}</p>
                </div>
                <hr className=" border-b border-gray-300" />
              </div>
            ))}
           </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;

