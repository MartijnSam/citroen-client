import React from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default function ImagesCarousel(props) {
  const { images } = props;
  return (
    <Carousel
      arrows
      centered
      infinite
      slidesPerPage="2"
      plugins={[
        "infinite",
        "centered",
        "arrows",
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 2,
          },
        },
      ]}
      breakpoints={{
        800: {
          arrows: true,
          infinite: true,
          slidesPerPage: 1,
          plugins: [
            "infinite",
            "arrows",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
          ],
        },
      }}
    >
      {images.map((img, i) => {
        return (
          <img key={i} src={`${process.env.PUBLIC_URL}${img}`} alt={img} />
        );
      })}
    </Carousel>
  );
}
