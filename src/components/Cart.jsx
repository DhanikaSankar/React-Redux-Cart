import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const cartProducts = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  // console.log(cartProducts);

  const card = cartProducts.map((product, index) => {
    return (
      <MDBCard key={index} className="card-main">
        <div className="text-center">
          <MDBCardImage
            src={product.image}
            position="top"
            alt="..."
            className="card-img"
          />
        </div>
        <MDBCardBody>
          <MDBCardTitle className="text-center" style={{fontSize:"22px",fontWeight:"bold"}}>{product.title}</MDBCardTitle>
          <MDBCardText>{product.description}</MDBCardText>
          <div className="text-center">
            <MDBBtn
              className="btn-danger text-center"
              onClick={() => handleRemove(product.id)}
            >
              Remove Item
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    );
  });

  const handleRemove = (id) => {
    // dispatch remove
    dispatch(remove(id));
  };

  return <div>{card}</div>;
}

export default Cart;
