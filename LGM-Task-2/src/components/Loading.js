import React from "react";
import Loader from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="loadingDiv">
      <Loader type="Circles" color="#4169e1" height={80} width={80} />
    </div>
  );
};

export default Loading;
