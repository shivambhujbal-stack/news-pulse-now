
import React from 'react';

const LiveIndicator = () => {
  return (
    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
      <span className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse"></span>
      LIVE
    </div>
  );
};

export default LiveIndicator;
