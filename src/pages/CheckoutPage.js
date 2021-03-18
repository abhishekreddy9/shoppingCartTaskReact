import React from "react";
import CardDetails from "../components/card-details/CardDetails";
import ShoppingCart from "../components/cart/CheckoutItems";
import styled from "styled-components";

const CheckoutContainer = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
`;

const ShoppingCartWrapper = styled.div`
  width: 65%;
`;

const CardDetailsWrapper = styled.div`
  width: 35%;
  margin: 100px;
`;

const Checkout = () => {
  return (
    <CheckoutContainer>
      <ShoppingCartWrapper>
        <ShoppingCart />
      </ShoppingCartWrapper>
      <CardDetailsWrapper>
        <CardDetails />
      </CardDetailsWrapper>
    </CheckoutContainer>
  );
};

export default Checkout;
