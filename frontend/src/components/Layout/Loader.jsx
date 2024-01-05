import React from "react";
import { PacmanLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <PacmanLoader />
    </div>
  );
};

export default Loader;
