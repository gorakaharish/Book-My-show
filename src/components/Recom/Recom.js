import React from "react";
import "./Recom.css";
import Slider from "react-slick";
import img1 from "../../images/img5.avif";
import img6 from "../../images/img6.avif";
import img7 from "../../images/img7.avif";
import img8 from "../../images/img8.avif";
import img9 from "../../images/img9.avif";
import img10 from "../../images/img10.avif";
import img11 from "../../images/img11.avif"
import Card from "../Card/Card";

const Recom = () => {
  const Data = [
    {
      id: 1,
      name: "Operation Valentine",
      type: "Thriller/Action",
      img: img1
    },
    {
      id: 2,
      name: "Dune: Part Two",
      type: "Action/Drama",
      img: img6
    },
    {
      id: 3,
      name: "Shaitaan",
      type: "Thriller",
      img: img7
    },
    {
      id: 4,
      name: "Article 370",
      type: "Drama/Poltical",
      img: img8
    },
    {
      id: 5,
      name: "movie",
      type: "Thriller/Action",
      img: img9
    },
    {
      id: 6,
      name: "movie",
      type: "Thriller/Action",
      img: img10
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <div className="overflow-hidden ">
      <div className="mx-5">
        <div className="d-flex justify-content-between mx-3">
          <h1 className="fs-4 fw-bold">Recommended Movies</h1>
          <a href="/" className="fs-6 text-decoration-none text-danger">
            See All<i className="bi bi-chevron-right icon"></i>{" "}
          </a>
        </div>
        <Slider {...settings}>
          {Data.map((e) => (
            <div key={e.id} className="card px-3 border-0 outline-none" style={{ width: "18rem" }}>
              <img src={e.img} className="card-img-top w-100" alt={`img_${e.id}`} />
              <div className="card-body">
                <h5>{e.name}</h5>
                <p>{e.type}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="container mx-5 my-5">
        <img src={img11} alt="img" style={{ width: "1230px" }} />
      </div>
      <div className=" px-2 my-5 mx-5">
        <Card />
      </div>
    </div>
  );
};

export default Recom;