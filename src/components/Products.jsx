import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => setProducts(result));

    // Dispatch action  for fetch products
    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING) {
    return <p>Loading.....</p>;
  } else if (status === StatusCode.ERROR) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  const addTocart = (product) => {
    // Dispatch add action
    dispatch(add(product));
  };

  return (
    <div className="pro-main">
      <div className="row ">
        {products.length > 0 &&
          products.map((product, index) => {
            return (
              <div className="col-md-3">
                <MDBCard key={index} className="pro-card">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <div className="text-center" style={{padding:"10px"}}>
                    <MDBCardImage
                      src={product.image}
                      fluid
                      alt="..."
                      width={100}
                    /></div>
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>{product.title}</MDBCardTitle>
                    <MDBCardText>INR: {product.price}</MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className="text-muted text-center">
                    <MDBBtn onClick={() => addTocart(product)} className="btn-warning">
                      Add to cart
                    </MDBBtn>
                  </MDBCardFooter>
                </MDBCard>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Products;
