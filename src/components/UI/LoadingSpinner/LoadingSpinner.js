import React from "react";

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="w-6 h-6 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingSpinner;
