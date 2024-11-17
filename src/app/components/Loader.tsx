import React, { useState } from "react";

const LoaderButton: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    // Simulate loading (you can replace this with your actual API call or action)
    setTimeout(() => {
      setLoading(false);
      // Perform any action after loading completes
    }, 3000);
  };

  return (
    <button
      onClick={handleClick}
      className="relative inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
      disabled={loading}
    >
      {/* Loader */}
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      {/* Button Text */}
      {!loading && <span>Click Me</span>}
    </button>
  );
};

export default LoaderButton;
