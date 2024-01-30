import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

function Header() {

  const cartProducts = useSelector(state=>state.cart);


  return (
    <div>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand>Fashion Land</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <Link to={"/"}>Products</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <MDBNavbarNav className="justify-content-end">
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <Link to={"/cart"}>My Cart {cartProducts.length}</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Header;
