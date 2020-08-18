import React from "react";
import image1 from "../images/over/image1.jpg";
import image2 from "../images/over/image2.jpg";
import "./Over.css";

export default function Over() {
  return (
    <div className="over-page">
      <div className="image-text">
        <div className="textblock" id="text1">
          <h2>OVER CITROEN CATERING</h2>
          <p>
            Rhoncus commodo, nulla. Fusce quis ipsum. Nulla neque massa, feugiat
            sed, commodo in, adipiscing ut, est. In fermentum mattis ligula.
            Nulla ipsum. Vestibulum condimentum condimentum augue. Nunc purus
            risus, volutpat sagittis, lobortis at, dignissim sed, sapien. Fusce
            porttitor iaculis ante. Curabitur eu arcu. Morbi quam purus, tempor
            eget, ullamcorper feugiat, commodo ullamcorper, neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            libero leo, pellentesque ornare, adipiscing vitae, rhoncus commodo,
            nulla. Fusce quis ipsum. Nulla neque massa, feugiat sed, commodo in,
            adipiscing ut, est. In fermentum mattis ligula. Nulla ipsum.
            Vestibulum condimentum condimentum
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            libero leo, pellentesque ornare, adipiscing vitae, rhoncus commodo,
            nulla. Fusce quis ipsum. Nulla neque massa, feugiat sed, commodo in,
            adipiscing ut, est. In fermentum mattis ligula. Nulla ipsum.
            Vestibulum condimentum condimentum
          </p>
        </div>
        <img id="img1" src={image1} alt="image1" />
      </div>
      <div className="image-text">
        <img id="img2" src={image2} alt="image2" />
        <div className="textblock" id="text2">
          <p>
            Rhoncus commodo, nulla. Fusce quis ipsum. Nulla neque massa, feugiat
            sed, commodo in, adipiscing ut, est. In fermentum mattis ligula.
            Nulla ipsum. Vestibulum condimentum condimentum augue. Nunc purus
            risus, volutpat sagittis, lobortis at, dignissim sed, sapien. Fusce
            porttitor iaculis ante. Curabitur eu arcu. Morbi quam purus, tempor
            eget, ullamcorper feugiat, commodo ullamcorper, neque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            libero leo, pellentesque ornare, adipiscing vitae, rhoncus commodo,
            nulla. Fusce quis ipsum. Nulla neque massa, feugiat sed, commodo in,
            adipiscing ut, est. In fermentum mattis ligula. Nulla ipsum.
            Vestibulum condimentum condimentum
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            libero leo, pellentesque ornare, adipiscing vitae, rhoncus commodo,
            nulla. Fusce quis ipsum. Nulla neque massa, feugiat sed, commodo in,
            adipiscing ut, est. In fermentum mattis ligula. Nulla ipsum.
            Vestibulum condimentum condimentum
          </p>
        </div>{" "}
      </div>
    </div>
  );
}
