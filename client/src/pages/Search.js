import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useCart } from "../context/cart"; 
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; 

const Search = () => {
  const [values] = useSearch();
  const [cart, setCart] = useCart(); 
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
    toast.success("Item Added to cart");
  };

  const navigateToProductDetails = (slug) => {
    
    navigate(`/product/${slug}`);
  };

  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description.substring(0, 30)}...</p>
                  <p className="card-text">  {p.price} DT</p>
                  <button
                    style={{marginBottom:5}}
                    className="btn btn-primary ms-1"
                    onClick={() => navigateToProductDetails(p.slug)} // Call the function to navigate to product details page
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-secondary ms-1"
                    onClick={() => addToCart(p)} // Call the function to add the product to cart
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
