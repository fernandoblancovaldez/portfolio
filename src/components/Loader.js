import React from "react";
import loader from "../assets/loader.svg";

const Loader = () => {
  return (
    <img
      src={loader}
      alt="Cargando ... "
      width="38"
      height="38"
      viewBox="0 0 38 38"
      className="loader"
    />
  );
};
export default Loader;
