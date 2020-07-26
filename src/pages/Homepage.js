import React from "react";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="image-text1">
        <img
          className="img1"
          src="https://pixnio.com/free-images/2017/03/23/2017-03-23-13-45-54-725x483.jpg"
        ></img>
        <div className="text1">Dit is tekst</div>
        <div className="text2">Dit is tekst</div>
        <div className="text3">Dit is tekst</div>
      </div>
      <div className="image-text2">
        <img
          className="img2"
          src="https://upload.wikimedia.org/wikipedia/commons/9/95/Strawberry_is_a_fruit_instead_of_love_%2813%29.jpg"
        />
        <div className="text1">Dit is tekst</div>
        <div className="text2">Dit is tekst</div>
        <div className="text3">Dit is tekst</div>
      </div>
    </div>
  );
}
