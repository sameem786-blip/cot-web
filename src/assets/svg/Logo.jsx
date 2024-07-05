import * as React from "react";
import Logo from "../img/cot_logo.png"

function SvgComponent(props) {
  return (
    <>
    <img className="nav_logo" src={Logo} alt="cot"/>
    </>
  );
}

export default SvgComponent;
