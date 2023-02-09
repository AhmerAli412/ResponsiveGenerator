import React, { useState } from "react";
import "./index.css";

function ResponsiveGenerator() {
  const [inputCSS, setInputCSS] = useState("");
  const [outputCSS, setOutputCSS] = useState("");

  const handleInputCSS = (event) => {
    setInputCSS(event.target.value);
  };

  const generateResponsiveCSS = () => {
    const responsiveCSS = `
      @media (max-width: 767px) {
        ${inputCSS}
      }

      @media (max-width: 480px){
        ${inputCSS}
      }
    `;
    setOutputCSS(responsiveCSS);
  };

  return (
    <>
    <div className="main">
        
        <div className="container">
      <h2>Enter your <span> CSS code </span> here</h2>
      <textarea className="box" value={inputCSS} onChange={handleInputCSS} />
      </div>

<div className="container">
      <h2>Get your <span>Responsive CSS code </span>  here</h2>
      <textarea className="box" value={outputCSS} readOnly />
      </div>
      
    </div>
    <div className="b">
    <button className="btn" onClick={generateResponsiveCSS}>Generate CSS</button>
    </div>
    </>
  );
}

export default ResponsiveGenerator;
