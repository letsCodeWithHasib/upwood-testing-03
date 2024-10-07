import { Link } from "react-router-dom";
import { useState } from "react";
import SellSharePopup from "./SellSharePopup";

/**
 * PortfolioProject Component
 * Displays information about a specific project related to forest plantations.
 *
 * @param {Object} item - The project item details. Currently not used but can be utilized for dynamic content.
 * @returns {JSX.Element} - The rendered project item.
 */
const PortfolioProject = ({ item, openPopup }) => {
  const { heading, title, description, roi, carbonCredits, image, area, id } =
    item;
  const [isSellShareOpen, setIsSellShareOpen] = useState(false);
  const [selectedSellShareProject, setSelectedSellShareProject] =
    useState(null);

  const openSellPopup = (item) => {
    setIsSellShareOpen(true); // Open the sell share popup
    setSelectedSellShareProject(item); // Set the selected project to sell
  };

  const closeSellPopup = () => {
    setIsSellShareOpen(false); // Close the sell share popup
    setSelectedSellShareProject(null); // Clear the selected project
  };

  // Investment state management
  const [isInvestMentOpen, setIsInvestMentOpen] = useState(false);
  const [selectedInvestProject, setSelectedInvestProject] = useState(null);

  const openInvestPopup = (item) => {
    setIsInvestMentOpen(true); // Open the investment popup
    setSelectedInvestProject(item); // Set the selected investment project
  };

  const closeInvestPopup = () => {
    setIsInvestMentOpen(false); // Close the investment popup
    setSelectedInvestProject(null); // Clear the selected project
  };
  return (
    <div className="shadow-custom rounded-xl overflow-hidden">
      {isInvestMentOpen && (
        <InvestmentPopup
          selectedInvestProject={selectedInvestProject}
          closePopup={closeInvestPopup}
        />
      )}

      {isSellShareOpen && (
        <SellSharePopup
          selectedSellShareProject={selectedSellShareProject}
          closePopup={closeSellPopup} // Corrected function call
        />
      )}
      {/* Container for the project item */}
      <div className="h-[200px] md:h-[250px] bg-gray-50 flex justify-center">
        {/* Project image */}
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="Project Illustration"
        />
      </div>
      <p className="bg-[#EBEBEB] text-xs uppercase text-center font-bold text-[#6B6B6B]">
        {heading} {/* Label for the project type */}
      </p>
      <div className="p-4 md:p-5">
        {/* Main content area */}
        <h3 className="text-[#333333] font-bold text-[18px] md:text-[20px] font-lexend">
          {title} {/* Project title */}
        </h3>
        <p className="text-[#333333] text-[14px] md:text-[16px] pt-2">
          {description}
          {/* Project description */}
        </p>
        <div className="flex flex-col md:flex-row gap-3 items-start mt-2">
          {/* Stats container */}
          <p className="text-[#6B6B6B] flex items-center gap-2">
            Area:
            <span className="text-[#333333] text-lg font-semibold">
              {area}
              {area === "TBA" ? "" : " ha"}
            </span>
          </p>
          <p className="text-[#6B6B6B] flex items-center gap-2">
            ROI:
            <span className="text-[#333333] text-lg font-semibold">
              {roi}
              {roi === "TBA" ? "" : " %"}
            </span>
          </p>
          <p className="text-[#6B6B6B] flex items-center gap-2">
            Carbon Credit:
            <span className="text-[#333333] text-lg font-semibold">
              {carbonCredits}
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-end gap-3 mt-4">
          {/* Action buttons container */}
          <button
            onClick={() => openSellPopup(item)}
            className="py-2 uppercase px-4 text-sm font-bold rounded-lg text-[#0FB404] bg-white border-[#0FB404] border-[1px] w-full md:w-auto"
          >
            sell shares {/* Button to view project details */}
          </button>
          <button
            onClick={() => openSellPopup(item)}
            className="py-2 px-4 uppercase text-sm font-bold rounded-lg bg-[#0FB404] text-white"
          >
            Invest more {/* Button to initiate investment */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProject; // Exporting the component for use in other parts of the application
