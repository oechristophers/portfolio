import React from 'react';

const SimpleModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">In Progress</h2>
          <button onClick={onClose} className="text-xl font-bold">X</button>
        </div>
        <div className="mt-4">
          {children}
        </div>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Close
        </button>
      </div>
    </div>
  );
};

export default SimpleModal;
