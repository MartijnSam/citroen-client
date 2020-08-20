import React, { useState } from "react";
import borrelData from "../products/borrelplanken.json";
import "./Borrelplanken.css";

export default function Borrelplanken() {
  const [showPopup, setShowPopup] = useState(false);

  function borrelPopup() {
    if (showPopup === false) return <></>;
    else
      return (
        <div className="borrel-popup">
          <div className="borrel-popup-container">
            <div
              onClick={() => setShowPopup(false)}
              className="close-button"
            ></div>
            <div className="borrel-popup-content">
              <div className="borrel-popup-image-container">
                <img
                  src={`${process.env.PUBLIC_URL}${borrelData[showPopup].img}`}
                  alt={borrelData[showPopup].name}
                />
              </div>
              <div className="borrel-popup-text">
                <h3>BORRELPLANK {borrelData[showPopup].name.toUpperCase()}</h3>
                <p>{borrelData[showPopup].descr}</p>
              </div>
            </div>
          </div>
        </div>
      );
  }
  const show = showPopup !== false ? "none" : "block";
  return (
    <div className="borrel-page">
      {borrelPopup()}
      <div className="borrel-page-content" style={{ display: show }}>
        <div className="borrel-container">
          {borrelData.map((borrel, i) => {
            return (
              <div
                key={i}
                className="borrel-card"
                onClick={() => setShowPopup(i)}
              >
                <img
                  src={`${process.env.PUBLIC_URL}${borrel.img}`}
                  alt={`borrelplank ${borrel.name}`}
                />
                <h3>BORRELPLANK {borrel.name.toUpperCase()}</h3>
                <ul>
                  {borrel.content.map((ing, i) => {
                    return <li key={i}>{ing}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="text-block">
          <h3>ONZE BORRELPLANKEN</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            libero leo, pellentesque ornare, adipiscing vitae, rhoncus commodo,
            nulla. Fusce quis ipsum. Nulla neque massa, feugiat sed, commodo in,
            adipiscing ut, est. In fermentum mattis ligula. Nulla ipsum.
            Vestibulum condimentum condimentum augue. Nunc purus risus, volutpat
            sagittis, lobortis at, dignissim sed, sapien. Fusce porttitor
            iaculis ante. Curabitur eu arcu. Morbi quam purus, tempor eget,
            ullamcorper feugiat, commodo ullamcorper, neque.
          </p>
        </div>
      </div>
    </div>
  );
}
