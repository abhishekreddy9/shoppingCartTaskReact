import React from "react";
import { connect } from "react-redux";
import CheckoutItem from "./CheckoutItem";
import {
  incrementQuantity,
  decrementQuantity,
  deleteItem,
} from "../../actions/checkoutItemsActions";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import styled from "styled-components";
import { Title, Container } from "../shared";
import { theme } from "../../utils";

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContinueButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.blue};
`;

const SubTotalText = styled.div`
  font-size: 16px;
  color: ${theme.gray};
`;
const PriceText = styled.span`
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;

class ShoppingCart extends React.Component {
  render() {
    const cartItems = this.props.items;
    const items = cartItems.map((item) => (
      <CheckoutItem
        key={item.id}
        price={item.price}
        title={item.title}
        item_id={item.id}
        url={item.url}
        quantity={this.props.suggested_quantities[item.id]}
        incrementQuantity={this.props.incQuantity}
        decrementQuantity={this.props.decQuantity}
        deleteItem={this.props.delItem}
      />
    ));

    const subTotal = cartItems.reduce(
      (acc, cv) => acc + this.props.suggested_quantities[cv.id] * cv["price"],
      0
    );

    return (
      <Container>
        <Title> Shopping Cart </Title>
        <div> {items} </div>
        <Footer>
          <ContinueButton>
            <KeyboardBackspaceIcon
              style={{
                color: theme.gray,
              }}
            />
            Continue Shopping
          </ContinueButton>
          <SubTotalText>
            Subtotal: <PriceText> $ {subTotal} </PriceText>
          </SubTotalText>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items.items,
  suggested_quantities: state.items.selectedQuantities,
});

const mapDispatchToProps = (dispatch) => ({
  incQuantity: (item_id) => dispatch(incrementQuantity(item_id)),
  decQuantity: (item_id) => dispatch(decrementQuantity(item_id)),
  delItem: (item_id) => dispatch(deleteItem(item_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
