import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
import "./index.css";

const Home = () => {
  const [productsList, setProductsList] = useState([]);

  const [isLoading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");

      const result = await response.json();
      setLoading(false);
      setProductsList(result.products);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const onViewProduct = (product) => {
    navigate(`/products/${product.id}`, {
      state: { data: product },
    });
  };

  return (
    <>
      <Navigation />
      <div className="main-home-container">
        {isLoading ? (
          <div>
            <p className="loading">Loading...</p>
          </div>
        ) : error ? (
          <div>
            <p className="loading">Failed to fetch products</p>
          </div>
        ) : (
          <ul className="parent-list-container">
            {productsList &&
              productsList.map((product) => (
                <li key={product.id} className="list-container">
                  <Card
                    style={{
                      width: "25rem",
                      boxShadow: "0 0 10px 0px rgba(0,0,0.3)",
                    }}
                  >
                    <Button
                      variant="Light"
                      onClick={() => onViewProduct(product)}
                    >
                      <Card.Img
                        variant="top"
                        src={
                          !product.images
                            ? product.images.find((item) =>
                                item.includes("thumbnail")
                              )
                            : product.thumbnail
                        }
                        className="product-image"
                      />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Title>
                          Price : <span style={{ color: "red" }}>$</span>
                          {product.price}
                        </Card.Title>
                        <Button>Add to Cart</Button>
                      </Card.Body>
                    </Button>
                  </Card>
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Home;
