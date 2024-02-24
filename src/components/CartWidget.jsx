import React from 'react';

const Cart = ({ itemCount }) => {
  return (
    <div className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4h16a1 1 0 011 1v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a1 1 0 011-1zm0 0l2.477 7.431A2 2 0 008 13h8a2 2 0 001.523-3.569L20 4M8 13h0"
        />
      </svg>
      <span className="text-gray-300">{itemCount}</span>
    </div>
  );
};

export default Cart;
