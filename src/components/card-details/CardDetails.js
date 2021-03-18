import React from "react";
import styled from "styled-components";
import { theme } from "../../utils";
import { Title } from "../shared";
import CardType from "./CardType";
import { WhiteTextField, CheckOutButton } from "../shared";

const Label = styled.label`
  font-size: 13px;
  color: ${theme.gray};
`;

const SelectFields = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;

  .select-field {
    background-color: transparent;
    color: white;
    border: none;
    margin: 0px 5px 0px 5px;
    border-bottom: 1px solid ${theme.gray};
    padding-bottom: 5px;
  }
`;

const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  background-color: ${theme.darkBackground};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 4px 4px 20px #3d3d3d;
`;

const PaymentDetails = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
`;

const CardTypeContainer = styled.div`
  font-size: 16px;
  color: ${theme.gray};
  margin-top: 10px;
`;

const MasterCardLogo = styled.div`
  background-image: url("https://logotyp.us/file/mastercard.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 130px;
  height: 70px;
  position: absolute;
  margin-left: 180px;
  margin-top: -180px;
`;

class CardDetails extends React.Component {
  state = {
    name: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  };

  handleChange = (event) => {
    event.preventDefault();

    const input_name = event.target.name;

    if (input_name === "name") {
      this.setState({ name: event.target.value });
    } else if (input_name === "cardNumber") {
      this.setState({ cardNumber: event.target.value });
    } else if (input_name === "month") {
      this.setState({ expiryMonth: event.target.value });
    } else if (input_name === "year") {
      this.setState({ expiryYear: event.target.value });
    } else if (input_name === "cvv") {
      this.setState({ cvv: event.target.value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <FormComponent onSubmit={this.handleSubmit}>
        <Title light>Card Details</Title>
        <CardTypeContainer>
          Card Type
          <CardType {...this.state} />
        </CardTypeContainer>
        <MasterCardLogo />
        <WhiteTextField
          id="standard-full-width"
          label="Name"
          style={{ margin: 8, color: "#fff !important" }}
          name="name"
          onChange={this.handleChange}
          margin="normal"
          value={this.state.name}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <WhiteTextField
          id="standard-password-input"
          label="Card Number"
          style={{ margin: 8 }}
          name="cardNumber"
          type="password"
          onChange={this.handleChange}
          margin="normal"
          value={this.state.cardNumber}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <PaymentDetails>
          <SelectFields>
            <Label className="select-lable">
              Expiration Date
              <div style={{ marginTop: "15px" }}>
                <select
                  className="select-field"
                  value={this.state.expiryMonth}
                  onChange={this.handleChange}
                  name="month"
                >
                  {new Array(12).fill("1").map((_, index) => (
                    <option value={index + 1}>
                      {index + 1 <= 9 ? "0" + (index + 1) : index + 1}
                    </option>
                  ))}
                </select>
                <select
                  className="select-field"
                  value={this.state.expiryYear}
                  onChange={this.handleChange}
                  name="year"
                >
                  {new Array(12).fill("1").map((_, index) => (
                    <option value={2021 + index}>{2021 + index}</option>
                  ))}
                </select>
              </div>
            </Label>
          </SelectFields>
          <WhiteTextField
            className="cvv"
            id="standard-password-input"
            label="CVV"
            style={{ margin: 8 }}
            name="cvv"
            type="password"
            onChange={this.handleChange}
            margin="normal"
            value={this.state.cvv}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </PaymentDetails>
        <CheckOutButton type="submit" variant="contained" color="primary">
          Check Out
        </CheckOutButton>
      </FormComponent>
    );
  }
}

export default CardDetails;
