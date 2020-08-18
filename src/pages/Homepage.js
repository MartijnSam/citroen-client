import React from "react";
import image1 from "../images/homepage/image1.jpg";
import image2 from "../images/homepage/image2.jpg";
import image3 from "../images/homepage/image3.jpg";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="image-text1">
        <img className="img1" src={image1} alt="image1" />
        <div className="textbanner" id="text1-1">
          PURE PRODUCTEN
        </div>
        <div className="textbanner" id="text1-2">
          HOGE KWALITEIT
        </div>
        <div className="textbanner" id="text1-3">
          RUSTIEKE PRESENTATIE
        </div>
      </div>
      <div className="image-text2">
        <img className="img2" src={image2} alt="image2" />
        <div className="textbanner" id="text2-1">
          OVERHEERLIJKE TAARTEN
        </div>
        <div className="textbanner" id="text2-2">
          UITBUNDIGE BORRELPLANKEN
        </div>
        <div className="textbanner" id="text2-3">
          DUIDELIJKE EN PASSENDE SERVICE
        </div>
      </div>
      <div className="image-text3">
        <img className="img3" src={image3} alt="image3" />
        <div className="textblock" id="text3">
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            libero leo, pellentesque ornare, adipiscing vitae, rhoncus commodo,
            nulla. Fusce quis ipsum. Nulla neque massa, feugiat sed, commodo in,
            adipiscing ut, est. In fermentum mattis ligula. Nulla ipsum.
            Vestibulum condimentum condimentum augue. Nunc purus risus, volutpat
            sagittis, lobortis at, dignissim sed, sapien. Fusce porttitor
            iaculis ante. Curabitur eu arcu. Morbi quam purus, tempor eget,
            ullamcorper feugiat, commodo ullamcorper, neque. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>
          <p>
            Vivamus libero leo, pellentesque ornare, adipiscing vitae, rhoncus
            commodo, nulla. Fusce quis ipsum. Nulla neque massa, feugiat sed,
            commodo in, adipiscing ut, est. In fermentum mattis ligula. Nulla
            ipsum. Vestibulum condimentum condimentum augue. Nunc purus risus,
            volutpat sagittis, lobortis at, dignissim sed, sapien. Fusce
            porttitor iaculis ante. Curabitur eu arcu. Morbi quam purus, tempor
            eget, ullamcorper feugiat, commodo ullamcorper, neque.
          </p>
        </div>
      </div>
    </div>
  );
}
