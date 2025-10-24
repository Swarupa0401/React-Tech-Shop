import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../Components/details";
import { FaStar } from "react-icons/fa";
import "./Productsdetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const reviews = [
    {
      id: 3,
      name: "Atharva Kumar",
      date: "10 Dec 2023",
      rating: 5,
      text: "Very good and awesome product",
      avatar: "https://ui-avatars.com/api/?name=Atharva+Kumar&background=F31260&color=fff",
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  useEffect(() => {
    const found = productsData.find((p) => p.id.toString() === id);
    setProduct(found);

    if (found) {
      const imgs =
        found.images && found.images.length > 0
          ? found.images
          : found.image
          ? [found.image]
          : [];
      setMainImage(imgs[0] || "");

      const related = productsData.filter(
        (p) => p.category === found.category && p.id !== found.id
      );
      setRelatedProducts(related);
    }
  }, [id]);

  if (!product) {
    return (
      <h1 className="text-center text-red-500 text-3xl mt-10">
        Product Not Found
      </h1>
    );
  }

  return (
    <>
      {/* Product Section */}
      <div className="d-flex bg-dark product-container w-100">

        {/* Thumbnails + Main Image */}
        <div className="d-flex image-wrapper">
          <div className="d-flex flex-column thumbnails">
            {(product.images && product.images.length > 0
              ? product.images
              : [product.image]
            ).map((img, i) => (
              <img
                key={i}
                className="mb-2 border border-white product_details_small_image_width cursor-pointer"
                src={img}
                alt={`Thumbnail ${i + 1}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>

          <div className="main-image ms-3">
            <img src={mainImage} alt={product.title} />
          </div>
        </div>

        {/* Product Info */}
        <div className="product_details_right ms-5">
          <h3 className="text-white">{product.title}</h3>
          <p className="text-white">{product.info}</p>

          {/* Ratings (Horizontal Alignment) */}
          <div className="star-rating">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                color={i < Math.round(product.ratings / 250) ? "#ff4500" : "#555"}
              />
            ))}
            <span className="text-white ms-2">
              | {product.ratings} Ratings
            </span>
          </div>

          <hr className="text-white" />

          {/* Price and Stock */}
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <p className="card-text text-white fs-2 fw-bold m-1 d-inline">
                ₹{product.finalPrice}
              </p>
              {product.originalPrice && (
                <p className="card-text text-white fs-5 d-inline text-decoration-line-through">
                  ₹{product.originalPrice}
                </p>
              )}
              <p style={{ color: "rgb(0, 255, 0)" }}>You save: ₹534 (33%)</p>
              <p className="text-white">(Inclusive of all taxes)</p>
            </div>

            <div>
              <button className="border-0 text-white p-1 mt-5 product_details_stock_button text-nowrap">
                <i className="fa-solid fa-check fa-sm"></i>
                <strong className="text-white">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </strong>
              </button>
            </div>
          </div>

          <hr className="text-white" />

          {/* Add to Cart */}
          <button
            className="rounded-5 border-0 text-white p-2 product_details_rigth_button"
            onClick={() => alert(`${product.title} added to cart!`)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-black text-white p-6">
        <div className="flex justify-center gap-10 mb-6">
          {["specifications", "overview", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-6 py-2 text-lg font-semibold rounded transition ${
                activeTab === tab ? "bg-orange-500" : "bg-transparent"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {activeTab === "specifications" && (
            <div className="grid grid-cols-2 gap-2 text-white specificationWidth w-[600px]">
              <p className="font-light">Brand</p>
              <p className="font-light">{product.brand}</p>

              <p className="font-light">Model</p>
              <p className="font-light">{product.title}</p>

              <p className="font-light">Generic Name</p>
              <p className="font-light">{product.category}</p>

              <p className="font-light">Headphone Type</p>
              <p className="font-light">{product.type}</p>

              <p className="font-light">Connectivity</p>
              <p className="font-light">{product.connectivity}</p>

              <p className="font-light">Microphone</p>
              <p className="font-light">Yes</p>
            </div>
          )}

          {activeTab === "overview" && (
            <div>
              <h2 className="text-xl font-bold mb-2">Overview</h2>
              <p>
                The <strong>{product.title}</strong> {product.type} provides fabulous sound quality.
              </p>
              <ul className="list-disc pl-6">
                <li>Sound Turned to Perfection</li>
                <li>Comfortable to Wear</li>
                <li>Long Hours Playback Time</li>
              </ul>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="mt-6 text-white">
              <h2 className="text-xl font-bold mb-4">Reviews</h2>
              {reviews.map((review) => (
                <div key={review.id} className="flex items-start space-x-4 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex text-red-500 items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < review.rating ? "text-red-500" : "text-gray-500"
                          }
                        />
                      ))}
                      <span className="text-gray-400 text-sm ms-2">
                        | {review.date}
                      </span>
                    </div>
                    <p className="text-gray-300 mt-1">{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="container-fluid bg-dark pb-5">
        <h3 className="text-center text-white p-4">Related Products</h3>
        <div className="container">
          <div className="row justify-content-center gx-4 gy-4">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((prod) => (
                <div key={prod.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="card h-100 bg-dark border border-white text-white">
                    <Link to={`/product/${prod.id}`}>
                      <img
                        src={prod.images?.[0] || prod.image}
                        className="card-img-top"
                        alt={prod.title}
                      />
                    </Link>
                    <div className="card-body card_font_s">
                      <div className="pt-2">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fas fa-star text-warning"></i>
                        ))}
                      </div>
                      <h5 className="card-title">{prod.title}</h5>
                      <p className="card-text">{prod.info}</p>
                      <hr />
                      <h4 className="product_font_head">
                        ₹{prod.finalPrice}{" "}
                        <span className="text-muted">
                          <s className="font_mute_c">{prod.originalPrice}</s>
                        </span>
                      </h4>
                      <button
                        type="button"
                        className="btn card_button_bottom w-100"
                        onClick={() => alert(`${prod.title} added to cart!`)}
                      >
                        <i className="fas fa-shopping-cart"></i> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-white">No related products found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
