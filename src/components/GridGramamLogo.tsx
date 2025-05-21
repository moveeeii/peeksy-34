
import React from 'react';
import { useTheme } from 'next-themes';

const GridGramamLogo = () => {
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  
  return (
    <div className="flex items-center justify-center w-full">
      <div className="font-bold text-3xl tracking-tight">
        <span className={`${textColor}`}>Grid</span>
        <span className="text-blue-500">Gramam</span>
      </div>
    </div>
  );
};

export default GridGramamLogo;
