// ButtonSection.js
// import React from 'react';

// const ButtonSection = () => (
//   <div className="flex justify-center gap-4 mt-4">
//     <div className="relative group mx-4">
//       <button className="px-4 py-2 bg-blue-700 text-white rounded-md">Personal Solutions</button>
//       <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 mt-2 rounded-md">
//         <a href="#Self Discovery" className="block p-2 hover:bg-gray-200">Self Discovery</a>
//         <a href="#CV & Profile Services" className="block p-2 hover:bg-gray-200">CV & Profile Services</a>
//         <a href="#Career Counseling" className="block p-2 hover:bg-gray-200">Career Counseling</a>
//         <a href="#Job Support Services" className="block p-2 hover:bg-gray-200">Job Support Services</a>
//       </div>
//     </div>
//     <div className="relative group mx-4">
//       <button className="px-4 py-2 bg-blue-700 text-white rounded-md">Business Solutions</button>
//       <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 mt-2 rounded-md">
//         <a href="#HR(talent Mgt, OD, HR Audit, T&D)Research & Frameworks Business Consulting" className="block p-2 hover:bg-gray-200">
//           HR (talent Mgt, OD, HR Audit, T&D)<br /> Research & Frameworks Business Consulting
//         </a>
//       </div>
//     </div>
//     <div className="relative group mx-4">
//       <button className="px-4 py-2 bg-blue-700 text-white rounded-md">Social Services</button>
//       <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 mt-2 rounded-md">
//         <a href="#Sanjeeda Open Flux Foreign Investor Support (Feasibilities & More)" className="block p-2 hover:bg-gray-200">
//           Sanjeeda<br /> Open Flux Foreign Investor Support<br /> (Feasibilities & More)
//         </a>
//       </div>
//     </div>
//   </div>
// );

// export default ButtonSection;

import React, { useState } from 'react';

const ButtonSection = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

  const toggleDropdown1 = () => setIsDropdownOpen1(!isDropdownOpen1);
  const toggleDropdown2 = () => setIsDropdownOpen2(!isDropdownOpen2);
  const toggleDropdown3 = () => setIsDropdownOpen3(!isDropdownOpen3);

  return (
    <div className="button-section flex flex-col md:flex-row justify-around p-4">
      <div className="solution1 relative">
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={toggleDropdown1}
        >
          Personal Solutions
        </button>
        {isDropdownOpen1 && (
          <div className="dropdown-content absolute bg-white shadow-lg rounded mt-2 p-2">
            <a href="#SelfDiscovery" className="block px-4 py-2 hover:bg-gray-200">
              Self Discovery
            </a>
            <a href="#CVProfileServices" className="block px-4 py-2 hover:bg-gray-200">
              CV & Profile Services
            </a>
            <a href="#CareerCounseling" className="block px-4 py-2 hover:bg-gray-200">
              Career Counseling
            </a>
            <a href="#JobSupportServices" className="block px-4 py-2 hover:bg-gray-200">
              Job Support Services
            </a>
          </div>
        )}
      </div>

      <div className="solution2 relative mt-4 md:mt-0">
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded  hover:bg-blue-600"
          onClick={toggleDropdown2}
        >
          Business Solutions
        </button>
        {isDropdownOpen2 && (
          <div className="dropdown-content absolute bg-white shadow-lg rounded mt-2 p-2">
            <a href="#HRBusinessConsulting" className="block px-4 py-2 hover:bg-gray-200">
              HR (Talent Mgt, OD, HR Audit, T&D)<br /> Research & Frameworks Business Consulting
            </a>
          </div>
        )}
      </div>

      <div className="solution3 relative mt-4 md:mt-0">
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded   hover:bg-blue-600"
          onClick={toggleDropdown3}
        >
          Social Services
        </button>
        {isDropdownOpen3 && (
          <div className="dropdown-content absolute bg-white shadow-lg rounded mt-2 p-2">
            <a href="#Sanjeeda" className="block px-4 py-2 hover:bg-gray-200">
              Sanjeeda<br />Open Flux Foreign Investor Support<br />(Feasibilities & More)
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonSection;
