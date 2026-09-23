// import React from "react";
// import Button from "../layouts/Button";
// import { RiMicroscopeLine } from "react-icons/ri";
// import ServicesCard from "../layouts/ServicesCard";
// import { MdHealthAndSafety } from "react-icons/md";
// import { FaHeartbeat } from "react-icons/fa";

// const Services = () => {
//   const icon1 = (
//     <RiMicroscopeLine size={35} className=" text-backgroundColor" />
//   );
//   const icon2 = (
//     <MdHealthAndSafety size={35} className=" text-backgroundColor" />
//   );
//   const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

//   return (
//     <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
//       <div className=" flex flex-col items-center lg:flex-row justify-between">
//         <div>
//           <h1 className=" text-4xl font-semibold text-center lg:text-start">
//             Our Services
//           </h1>
//           <p className=" mt-2 text-center lg:text-start">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
//             quidem.
//           </p>
//         </div>
//         <div className=" mt-4 lg:mt-0">
//           <Button title="See Services" />
//         </div>
//       </div>
//       <div className=" flex flex-col lg:flex-row gap-5 pt-14">
//         <ServicesCard icon={icon1} title="Lab Test" />
//         <ServicesCard icon={icon2} title="Health Check" />
//         <ServicesCard icon={icon3} title="Heart Health" />
//       </div>
//     </div>
//   );
// };

// export default Services;


import React from "react";
import Button from "../layouts/Button";
import ServicesCard from "../layouts/ServicesCard";
import { FaStethoscope, FaChild, FaVials, FaUserMd, FaBrain } from "react-icons/fa";

const Services = () => {
  // Define service icons (consistent with your existing icon setup)
  const icon1 = <FaStethoscope size={35} className="text-[#a20874]" />;
  const icon2 = <FaChild size={35} className="text-[#a20874]" />;
  const icon3 = <FaVials size={35} className="text-[#a20874]" />;
  const icon4 = <FaUserMd size={35} className="text-[#a20874]" />;
  const icon5 = <FaBrain size={35} className="text-[#a20874]" />;

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16 bg-white">
      {/* Header Section */}
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start text-[#201b7a]">
            Our Specialized Pediatric Services
          </h1>
          <p className="mt-2 text-center lg:text-start text-gray-600">
            Compassionate and comprehensive care designed to support your child’s
            health, growth, and developmental journey.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See All Services" />
        </div>
      </div>

      {/* Services Cards */}
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-6 pt-14">
        <ServicesCard icon={icon1} title="Full Children Treatment" />
        <ServicesCard icon={icon2} title="Child Growth Follow-up" />
        <ServicesCard icon={icon3} title="Full Laboratory Services" />
        <ServicesCard icon={icon4} title="Child Treatment & Advice Service" />
        <ServicesCard
          icon={icon5}
          title="Speech & Behavior Therapy (Autism Spectrum)"
        />
      </div>
    </div>
  );
};

export default Services;
