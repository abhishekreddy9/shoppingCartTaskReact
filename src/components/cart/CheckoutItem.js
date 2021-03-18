import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ClearIcon from "@material-ui/icons/Clear";
import Button from "@material-ui/core/Button";
import { theme } from "../../utils";

const ImageContainer = styled.div`
  background-image: url(${(props) => props.url});
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 60px 0px 60px 0px;
  flex: 10;
  border-bottom: 1px solid #efefef;
`;

const Title = styled.div`
  font-size: 16px;
  color: ${theme.gray};
  margin-left: 40px;
`;

const Price = styled.div`
  font-size: 20px;
  margin: 20px 40px 20px 20px;
  color: ${theme.gray};
`;

const FoodItemTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 5;
  align-items: center;
`;

const Quantity = styled.div`
  margin: 20px;
  flex: 3;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

const CheckoutItem = (props) => {
  const handleIncrement = (item_id) => {
    props.incrementQuantity(item_id);
  };

  const handleDecrement = (item_id) => {
    if (props.quantity !== 0) {
      props.decrementQuantity(item_id);
    }
  };

  const handleDelete = (item_id) => {
    props.deleteItem(item_id);
  };

  return (
    <>
      <Item>
        <FoodItemTitle>
          <ImageContainer url={props.url} />
          <Title>{props.title}</Title>
        </FoodItemTitle>
        <Quantity>
          <RemoveIcon
            fontSize="small"
            onClick={handleDecrement.bind(this, props.item_id)}
          />
          <Button variant="outlined" disabled onChange>
            {props.quantity}
          </Button>
          <AddIcon
            fontSize="small"
            onClick={handleIncrement.bind(this, props.item_id)}
          />
        </Quantity>
        <Price>
          <AttachMoneyIcon /> {props.price}
        </Price>
        <ClearIcon onClick={handleDelete.bind(this, props.item_id)} />
      </Item>
    </>
  );
};

export default CheckoutItem;
