import React from "react";
import Lottie from "react-lottie-player"; // Importez la bibliothèque correcte

// Remplacez le chemin d'accès à votre fichier d'animation
import animationData from "../../Assests/animations/Animation - 1704121365706.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* Utilisez la composante Lottie de react-lottie-player */}
      <Lottie loop={defaultOptions.loop} play={defaultOptions.autoplay} animationData={defaultOptions.animationData} style={{ width: 300, height: 300 }} />
    </div>
  );
};

export default Loader;
