import React from "react";
import Slider from "react-slick";
import img20 from "../../images/img20.avif";
import img21 from "../../images/img21.avif";
import img22 from "../../images/img22.avif";
import img23 from "../../images/img23.avif";
import img24 from "../../images/img24.avif";
import img25 from "../../images/img25.avif";
import img26 from "../../images/img26.avif";
import img27 from '../../images/img27.avif'

const Card2 = () => {
  const CardData = [
    {
      id: 1,
      img: img20,
    },
    {
      id: 2,
      img: img21,
    },
    {
      id: 3,
      img: img22,
    },
    {
      id: 4,
      img: img23,
    },
    {
      id: 5,
      img: img24,
    },
    {
      id: 6,
      img: img25,
    },
    {
      id: 7,
      img: img26,
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
      <div className="bg-card p-5" style={{ backgroundColor: "rgba(43, 49, 72)" }}>
        <div className="">
          <div className="my-3 mx-3">
            <img src={img27} alt="img" style={{ width: "1250px" }} />
          </div>
          <div className="mx-4 mt-5 mb-2">
            <h5 className="fs-4 text-white p-0 m-0">Premieres</h5>
            <p className="fs-6 text-white p-0 m-0">Brand new release every Friday</p>
          </div>
          <div className="mx-2">
            <Slider {...settings}>
              {CardData.map((e) => (
                <div key={e.id} className="card px-3 border-0 bg-transparent" style={{ width: "18rem;" }}>
                  <img src={e.img} className="card-img-top w-100" alt="img" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
