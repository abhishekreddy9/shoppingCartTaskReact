import styled from "styled-components";
import React from "react";
import { theme } from "../../utils";

const MainContainer = styled.div`
  height: 180px;
`;

const CardContainer = styled.div`
  width: 180px;
  height: 90px;
  background-color: ${theme.gray};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  position: absolute;
  margin-left: -80px;
  margin-top: 20px;
`;

const Logo = styled.div`
  background-image: url("https://logotyp.us/file/visa.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 70px;
  height: 30px;
`;
const CardNo = styled.div`
  color: #fff;
  font-size: 10px;
`;
const CardName = styled.div`
  color: #fff;
  font-size: 10px;
`;
const Expiry = styled.div`
  color: #fff;
  font-size: 10px;
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardType = ({ name, cardNumber, expiryMonth, expiryYear }) => {
  return (
    <MainContainer>
      <CardContainer>
        <Logo></Logo>
        <CardNo>{cardNumber}</CardNo>
        <CardDetails>
          <CardName>{name}</CardName>
          {expiryMonth && <Expiry>{`${expiryMonth}/${expiryYear}`}</Expiry>}
        </CardDetails>
      </CardContainer>
    </MainContainer>
  );
};

export default CardType;
