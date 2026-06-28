// components/EclypseLogo.tsx
import React from "react";

const EclypseLogo: React.FC = () => {
  return (
    <div className="flex items-center text-white">
      <div className="relative">
        <span className="text-4xl font-bold tracking-wider">Eclypse</span>
        <sup className="text-xs align-top ml-1">®</sup>
      </div>
      <div className="text-xs ml-4 font-bold flex items-center">
        <span className="mr-1">©</span>
        <span>2025</span>
      </div>
    </div>
  );
};

export default EclypseLogo;
