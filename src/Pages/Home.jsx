import productsData from "../Components/details";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderData } from "./CarouselData";
import "./Carouselpage.css";
import React, { useEffect, useRef, useState } from "react";
import firstSlider from "../assets/products/boat203-1.png";
import secondSlider from "../assets/products/boat518-1.png";
import thirdSlider from "../assets/products/jbl760nc-1.png";
import fourthSlider from "../assets/products/boat255r-1.png";
import sevenSlider from "../assets/products/jbl-endu-1.png";
import "./Featured.css";

function Home({ cart, setCart }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: "linear",
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => <div className="custom-dot" />,
  };
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Carousel logic
  useEffect(() => {
    const track = trackRef.current;
    let items = Array.from(track.children);

    const interval = setInterval(() => {
      const first = items.shift();
      items.push(first);
      track.innerHTML = ""; // Clear track
      items.forEach((item) => track.appendChild(item)); // Append reordered items
      setCurrent((prev) => (prev + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const totalSlides = 5;
  const topproducts = productsData.filter(
    (products) => products.rateCount === 4 || products.rateCount === 5
  );
  const [category, setCategory] = useState("All");
  const filtercategories =
    category === "All"
      ? topproducts
      : topproducts.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );
  return (
    //---------------Carousel-----------------------
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {SliderData.map((item, index) => (
          <div key={index} className="relative bg-black">
            {/* Background Type Label */}
            <h2 className="type-bg-text">{item.type}</h2>

            {/* Foreground Content */}
            <div className="slide-content flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 py-12 relative z-10">
              {/* LEFT TEXT BLOCK */}
              <div className="w-full md:w-1/2 flex flex-col items-start text-left p-6">
                <h5 className="text-3xl md:text-6xl font-bold text-white mb-4">
                  {item.title}
                </h5>
                <h1 className="text-lg md:text-2xl font-semibold text-white mb-4">
                  {item.tagline}
                </h1>
                <h3 className="text-white text-xl md:text-2xl mb-6">
                  ₹{item.finalPrice}{" "}
                  <span className="text-gray-500 line-through ml-3">
                    {item.originalPrice}
                  </span>
                </h3>
                <Link to={`/product/${item.id}`} state={{ product: item }}>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 mt-3 py-3 rounded-md font-bold">
                    Shop Now
                  </button>
                </Link>
              </div>

              {/* RIGHT IMAGE BLOCK */}
              <div className="flex md:w-[45%] w-full justify-end ml-auto -mr-8">
                <img
                  src={item.images}
                  alt={item.title}
                  className="w-full object-contain md:h-[600px] h-[500px]"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* -----------------Featured products-------------- */}
      <div className="carousel-container bg-black">
        <h1
          style={{ textAlign: "center", color: "white", marginTop: "10px" }}
          className="pb-10">
          Featured Products
        </h1>

        <div className="carousel-track" ref={trackRef}>
          <div className="carousel-item-custom">
            <p className="product_font_carousel">JBL Tune 760NC</p>
            <Link to="/Allproduct">
              <img src={firstSlider} alt="1" className="img-fluid" />
            </Link>
            <h4 className="product_font_head">
              ₹5,999{" "}
              <span className="text-muted muteddd">
                <s>₹7,999</s>
              </span>
            </h4>
          </div>

          <div className="carousel-item-custom">
            <p className="product_font_carousel">boAT Airdopes 203</p>
            <Link to="/Allproduct">
              <img src={secondSlider} alt="2" className="img-fluid" />
            </Link>
            <h4 className="product_font_head">
              ₹1,074{" "}
              <span className="text-muted muteddd">
                <s>₹3,999</s>
              </span>
            </h4>
          </div>

          <div className="carousel-item-custom">
            <p className="product_font_carousel">boAT Rockerz 518</p>
            <Link to="/Allproduct">
              <img src={thirdSlider} alt="3" className="img-fluid" />
            </Link>
            <h4 className="product_font_head">
              ₹1,299{" "}
              <span className="text-muted muteddd">
                <s>₹3,999</s>
              </span>
            </h4>
          </div>

          <div className="carousel-item-custom">
            <p className="product_font_carousel">boAT Rockerz 255</p>
            <Link to="/Allproduct">
              <img src={fourthSlider} alt="4" className="img-fluid" />
            </Link>
            <h4 className="product_font_head">
              ₹899{" "}
              <span className="text-muted muteddd">
                <s>₹2,999</s>
              </span>
            </h4>
          </div>

          <div className="carousel-item-custom">
            <p className="product_font_carousel">JBL Endurance Run</p>
            <Link to="/Allproduct">
              <img src={sevenSlider} alt="5" className="img-fluid" />
            </Link>
            <h4 className="product_font_head">
              ₹15,999{" "}
              <span className="text-muted muteddd">
                <s>₹27,999</s>
              </span>
            </h4>
          </div>
        </div>

        {/* 🔴 Dots below carousel */}
        <div className="dots-container">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>

      {/* // ----------------------top products----------------- */}
      <div className="bg-black text-white  mt-0 pt-0 ">
        <h1 className="text-center text-white mt-0 pt-0 ">Top Products</h1>
        <div className="px-5 ">
        <div className="flex justify-around ">
          <button
            onClick={() => setCategory("All")}
            className="bg-danger text-white mt-5 px-3 py-1" style={{border:"1px solid white"}}
          >
            All
          </button>
          <button onClick={() => setCategory("Headphones")} className="bg-danger text-white mt-5 px-3 py-1" style={{border:"1px solid white"}}>Headphones</button>
          <button onClick={() => setCategory("Earbuds")} className="bg-danger text-white mt-5 px-3 py-1" style={{border:"1px solid white"}}>Earbuds</button>
          <button onClick={() => setCategory("Earphones")} className="bg-danger text-white mt-5 px-3 py-1" style={{border:"1px solid white"}}>Earphones</button>
          <button onClick={() => setCategory("Neckbands")} className="bg-danger text-white mt-5 px-3 py-1" style={{border:"1px solid white"}}>Neckbands</button>
          </div>
          <div className="row mx-5 mt-4 px-5 py-5 gap-4">
            {filtercategories.map((item, index) => (
              <Card key={item.id} data={item} cart={cart} setCart={setCart} />
            ))}
            {/* extra card */}
            {/* {category === "All" && ( */}
            <div className="col-lg-3 col-md-3 col-12 custom-col">
              <div className="card h-100 bg-dark border border-white d-flex align-items-center justify-content-center text-center">
                <div className="card-body card_font_s d-flex flex-column align-items-center justify-content-center">
                  <Link to="/Allproduct" className="yyy">
                    {" "}
                    <h2 className="card-title text-white ">
                      Browse all <br /> Product &#10140;
                      <i className="fa-solid fa-arrow-right-long bgggg"></i>
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
