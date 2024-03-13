import React from "react";
import Slider from "react-slick";
import img12 from "../../images/img12.avif";
import img13 from "../../images/img13.avif";
import img14 from "../../images/img14.avif";
import img15 from "../../images/img15.avif";
import img16 from "../../images/img16.avif";
import img17 from "../../images/img17.avif";
import img18 from "../../images/img18.avif";
import img19 from "../../images/img19.avif";

const Card = () => {
  const CaedData = [
    {
      id: 1,
      img: img12,
    },
    {
      id: 2,
      img: img13,
    },
    {
      id: 3,
      img: img14,
    },
    {
      id: 4,
      img: img15,
    },
    {
      id: 5,
      img: img16,
    },
    {
      id: 6,
      img: img17,
    },
    {
      id: 7,
      img: img18,
    },
    {
      id: 9,
      img: img19,
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="">
        <h5 className="fs-4 fw-bold mx-3">The Best Offline Events</h5>
        <Slider {...settings}>
          {CaedData.map((card) => (
            <div key={card.id} className="card px-3 border-0" style={{ width: "18rem;" }}>
              <img src={card.img} className="card-img-top" alt="img" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Card;
