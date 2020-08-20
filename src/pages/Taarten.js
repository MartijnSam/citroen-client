import React, { useState } from "react";
import taartenData from "../products/taarten.json";
import "./Taarten.css";
import ImagesCarousel from "../components/ImagesCarousel";

export default function Taarten() {
  const [showCarousel, setShowCarousel] = useState(false);
  const show = showCarousel !== false ? "none" : "block";
  function renderCarousel() {
    if (showCarousel === false) return <></>;
    else
      return (
        <div className="carousel-popup">
          <div className="carousel-content">
            <ImagesCarousel
              images={[
                taartenData[showCarousel].mainImg,
                ...taartenData[showCarousel].imgs,
              ]}
            />
            <div
              className="close-container"
              onClick={() => setShowCarousel(false)}
            >
              <h4>CLOSE</h4>
            </div>
          </div>
        </div>
      );
  }
  return (
    <div className="taarten-page">
      {renderCarousel()}
      <div style={{ display: show }}>
        <div className="text-block">
          <h2>ONZE TAARTEN</h2>
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
        <div className="taarten-container">
          {taartenData.map((taart, i) => {
            return (
              <div className="taarten-card" key={i}>
                <div className="left">
                  <div className="image-container">
                    <img
                      src={`${process.env.PUBLIC_URL}${taart.mainImg}`}
                      alt={`${taart.name}`}
                      onClick={() => setShowCarousel(i)}
                    />
                  </div>
                </div>
                <div className="right">
                  <h3>{taart.name.toUpperCase()}</h3>
                  <div className="tag-container">
                    {taart.tags.map((tag, i) => {
                      return (
                        <span className="tag" key={i}>
                          {tag.toUpperCase()}
                        </span>
                      );
                    })}
                  </div>
                  <p>{taart.descr}</p>
                  <div className=".ingredients-container">
                    {taart.content.map((ingredient, i) => {
                      return (
                        <span className="tag" key={i}>
                          {ingredient.toUpperCase()}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
