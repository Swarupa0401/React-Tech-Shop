import React, { useState, useMemo } from "react";
import productsData from "../Components/details";
import { Link } from "react-router-dom";
import Card from "../Components/Card";

const ProductCard = ({ item, addToCart }) => {
  return (
    <div className="bg-dark text-white rounded-lg shadow-md overflow-hidden border border-gray">
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-contain bg-dark"
        />
      </Link>
      <div className="p-4 text-center">
        <h5 className="card-title">{item.title}</h5>
        <p className="mb-2">
          ₹{item.finalPrice}{" "}
          {item.originalPrice && (
            <span className="text-muted text-decoration-line-through">
              ₹{item.originalPrice}
            </span>
          )}
        </p>
        <button className="add-to-cart" onClick={() => addToCart(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

function Browserproducts({ cart, setCart }) {
  const [sortOption, setSortOption] = useState("Latest");
  const [filters, setFilters] = useState({ brand: [], category: [] });
  const [priceRange, setPriceRange] = useState(20000);

  const handleAddToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleCheckboxChange = (type, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      if (newFilters[type].includes(value)) {
        newFilters[type] = newFilters[type].filter((v) => v !== value);
      } else {
        newFilters[type] = [...newFilters[type], value];
      }
      return newFilters;
    });
  };

  const filteredProducts = useMemo(() => {
    let result = [...productsData];

    // Brand filter
    if (filters.brand.length) {
      result = result.filter((p) => filters.brand.includes(p.brand));
    }

    // Category filter
    if (filters.category.length) {
      result = result.filter((p) => filters.category.includes(p.category));
    }

    // Price filter
    result = result.filter((p) => p.finalPrice <= priceRange);

    // Sorting
    if (sortOption === "Price(Lowest First)") {
      result.sort((a, b) => a.finalPrice - b.finalPrice);
    } else if (sortOption === "Price(Highest First)") {
      result.sort((a, b) => b.finalPrice - a.finalPrice);
    } else if (sortOption === "Latest") {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [filters, sortOption, priceRange]);

  return (
    <div className="all-products-container flex bg-dark min-h-screen text-white">
      {/* Sidebar */}
      <div className="sidebar p-4 w-64 border-r border-gray-700 space-y-6">
        <button
          onClick={() => {
            setFilters({ brand: [], category: [] });
            setPriceRange(20000);
            setSortOption("Latest");
          }}
          className="bg-red-600 text-white w-full py-2 rounded hover:bg-red-700"
        >
          Clear Filters
        </button>

        <div>
          <h3 className="text-lg font-semibold mb-2">Sort By</h3>
          {[
            "Latest",
            "Featured",
            "Top Rated",
            "Price(Lowest First)",
            "Price(Highest First)",
          ].map((option) => (
            <div key={option}>
              <label
                className={`cursor-pointer ${sortOption === option ? "text-red-500 font-semibold" : ""
                  }`}
              >
                <input
                  type="radio"
                  name="sort"
                  value={option}
                  checked={sortOption === option}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="mr-2"
                />
                {option}
              </label>
            </div>
          ))}
        </div>

        <div className="filter-section space-y-4">
          <div>
            <p className="font-semibold mb-1">Brands</p>
            {["JBL", "boAt", "Sony"].map((brand) => (
              <label key={brand} className="block cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.brand.includes(brand)}
                  onChange={() => handleCheckboxChange("brand", brand)}
                  className="mr-2"
                />
                {brand}
              </label>
            ))}
          </div>

          <div>
            <p className="font-semibold mb-1">Category</p>
            {["Headphones", "Earbuds", "Wired"].map((cat) => (
              <label key={cat} className="block cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.category.includes(cat)}
                  onChange={() => handleCheckboxChange("category", cat)}
                  className="mr-2"
                />
                {cat}
              </label>
            ))}
          </div>

          <div>
            <p className="font-semibold mb-1">
              Price Range: Up to ₹{priceRange}
            </p>
            <input
              type="range"
              min="0"
              max="20000"
              step="500"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-section flex-1 p-6 pb-40">
        <h2 className="text-2xl font-bold mb-6">All Products</h2>
        {filteredProducts.length === 0 ? (
          <p className="text-gray-400">No products found</p>
        ) : (
          <div className="products-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-32">
            {filteredProducts.map((item) => (
              <Card
                key={item.id}
                data={item}
                cart={cart}
                setCart={setCart}

              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Browserproducts;
