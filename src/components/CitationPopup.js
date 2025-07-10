import React from 'react';

const CitationPopup = ({ link, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-2xl w-11/12 md:w-3/4 h-5/6 flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b bg-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">PDF Citation Preview</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Iframe content */}
        <iframe
          src={link}
          title="Citation PDF"
          className="flex-1 w-full border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default CitationPopup;
