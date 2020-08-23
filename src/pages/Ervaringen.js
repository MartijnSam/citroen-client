import React from "react";
import moment from "moment";
import "moment/locale/nl";
import "./Ervaringen.css";

export default function Ervaringen() {
  moment.locale("nl");
  const ervaringenData = [
    {
      id: 1,
      date: "2015-03-25",
      stars: 5,
      name: "Pietje van der Test",
      title: "Geweldige service en heerlijke eten!",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero leo, pellentesque ornare, adipiscing vitae, rhoncus commodo, nulla. Fusce quis ipsum. Nulla neque massa, feugiat sed, commodo in, adipiscing ut, est. In fermentum mattis ligula. Nulla ipsum. Vestibulum condimentum condimentum",
    },
    {
      id: 2,
      date: "2015-08-25",
      stars: 4,
      name: "Karel",
      title: "Dit was echt super hoor",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero leo, pellentesque ornare, adipiscing vitae, rhoncus commodo, nulla. Fusce quis ipsum. Nulla neque massa, feugiat sed, commodo in, adipiscing ut, est. In fermentum mattis ligula. Nulla ipsum. Vestibulum condimentum condimentum",
    },
    {
      id: 3,
      date: "2016-10-02",
      stars: 5,
      name: "Echt persoon",
      title: "Nog nooit zo iets geweldigs meegemaakt",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero leo, pellentesque ornare, adipiscing vitae, rhoncus commodo, nulla. Fusce quis ipsum. Nulla neque massa, feugiat sed, commodo in, adipiscing ut, est. In fermentum mattis ligula. Nulla ipsum. Vestibulum condimentum condimentum",
    },
    {
      id: 4,
      date: "2015-01-25",
      stars: 1,
      name: "Zuur Pruim",
      title: "Meh...",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero leo, pellentesque ornare, adipiscing vitae, rhoncus commodo, nulla. Fusce quis ipsum. Nulla neque massa, feugiat sed, commodo in, adipiscing ut, est. In fermentum mattis ligula. Nulla ipsum. Vestibulum condimentum condimentum",
    },
  ];

  function starRating(rating) {
    let stars = [
      <span key="0">☆</span>,
      <span key="1">☆</span>,
      <span key="2">☆</span>,
      <span key="3">☆</span>,
      <span key="4">☆</span>,
    ];
    for (let index = 0; index < rating; index++) {
      stars[index] = (
        <span className="full-star" key={index}>
          ☆
        </span>
      );
    }
    return stars;
  }

  return (
    <div className="ervaringen-page">
      <div className="text-block">
        <h3>Ervaringen</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          libero leo, pellentesque ornare, adipiscing vitae, rhoncus commodo,
          nulla. Fusce quis ipsum. Nulla neque massa, feugiat sed, commodo in,
          adipiscing ut, est. In fermentum mattis ligula. Nulla ipsum.
          Vestibulum condimentum condimentum
        </p>
      </div>
      <div className="ervaringen-container">
        {ervaringenData.map((erv) => {
          return (
            <div className="ervaring-card" key={erv.id}>
              <h4>{erv.title}</h4>
              <h5>{erv.name}</h5>
              <div className="rating">{starRating(erv.stars)}</div>
              {moment(erv.date).format("LLLL")}

              <p>{erv.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
