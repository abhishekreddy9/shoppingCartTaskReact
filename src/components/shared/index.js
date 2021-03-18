import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import { theme } from "../../utils";

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.light ? "#fff" : "#000")};
`;

export const Container = styled.div`
  padding: 60px;
`;

export const WhiteTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& label": {
      color: `${theme.gray}`,
    },
    "& .MuiInput-underline": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

export const CheckOutButton = withStyles({
  root: {
    backgroundColor: `${theme.blue}`,
    height: "50px",
    marginTop: "30px",
  },
})(Button);
