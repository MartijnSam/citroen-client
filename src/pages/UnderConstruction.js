import React from "react";
import logo from "../images/logo.svg";
import image1 from "../images/homepage/image1.jpg";

export default function UnderConstruction() {
  return (
    <div
      className="page-construction"
      style={{
        height: "100vh",
        backgroundImage: `url(${image1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={logo}
        alt="citroen logo"
        style={{
          position: "absolute",
          right: "25%",
          left: "25%",
          top: "10%",
          width: "50%",
          borderRadius: "2rem",
          background: "white",
          boxShadow:
            "0.6322444678609063vh 0.6322444678609063vh 0.8429926238145417vh rgba(0, 0, 0, 0.5)",
        }}
      />
      <div
        className="text"
        style={{
          textAlign: "center",
          paddingTop: "1vw",
          paddingBottom: "1vw",
          fontSize: "6vw",
          position: "absolute",
          right: "25%",
          left: "25%",
          bottom: "10%",
          width: "50%",
          borderRadius: "2rem",
          background: "white",
          boxShadow:
            "0.6322444678609063vh 0.6322444678609063vh 0.8429926238145417vh rgba(0, 0, 0, 0.5)",
        }}
      >
        WEBSITE COMING SOON
      </div>
    </div>
  );
}
