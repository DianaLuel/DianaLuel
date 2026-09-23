// import React from "react";

// const ServicesCard = ({ icon, title }) => {
//   return (
//     <div className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
//       <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
//         {icon}
//       </div>
//       <h1 className=" font-semibold text-lg">{title}</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
//         praesentium asperiores unde veniam, perspiciatis neque!
//       </p>

//       <h3 className=" text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
//         Learn more
//       </h3>
//     </div>
//   );
// };

// export default ServicesCard;


import React from "react";

const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-3 w-full lg:w-[30%] p-6 bg-white shadow-[rgba(0,_0,_0,_0.1)_0px_4px_12px] rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-3">
      {/* Icon Section */}
      <div className="bg-[#ede9fe] p-4 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#a20874]/10">
        {icon}
      </div>

      {/* Title */}
      <h1 className="font-semibold text-xl text-[#201b7a]">{title}</h1>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed px-2">
        {description ||
          "We provide comprehensive care with a personalized approach to every child’s health and growth."}
      </p>

      {/* Learn More */}
      <h3 className="text-[#a20874] font-medium cursor-pointer hover:underline transition duration-300 ease-in-out">
        Learn more
      </h3>
    </div>
  );
};

export default ServicesCard;
