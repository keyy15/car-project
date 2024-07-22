import React, { useState } from "react";

const Dropdown = ({ title, category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-64">
      <button
        onClick={toggleDropdown}
        className="h-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-3 text-left text-xs cursor-pointer focus:outline-none focus:border-none w-full flex justify-between items-center"
      >
        <span className="text-xs text-[#666]">{selectedItem ? selectedItem : title}</span>
        <svg
          className="w-5 h-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
          <ul
            tabIndex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-item-3"
            className="max-h-56 rounded-md text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          >
            {category?.map((item, index) => (
              <li
                key={index}
                className="text-[#666] cursor-pointer select-none relative pl-3 pr-9 text-xs hover:bg-[#007bff] hover:text-white"
                onClick={() => handleItemClick(item)}
              >
                <span
                  className={`block truncate ${
                    selectedItem === item ? "font-semibold" : "font-normal"
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
