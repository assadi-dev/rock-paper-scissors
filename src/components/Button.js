import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonContainer = styled.div`
  border-radius: 100%;
  border: solid 20px ${(props) => props.color};
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 998px) {
    box-shadow: inset 0px 8px 5px rgba(0, 0, 0, 0.3),
      0px 3px rgba(0, 0, 0, 0.3)
        ${(props) => (props.shadow === true ? ",var(--shadow-mobile)" : null)};
  }

  @keyframes shadow-animation {
  }
`;

const Innerbutton = styled.div`
  background: #fff;
  padding: 2%;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  box-shadow: 0 0 0, 0px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  height: 50%;
  width: 50%;
  margin: auto;
  object-fit: contain;
  @media (max-width: 768px) {
  }
`;

const CustomLink = styled(Link)`
  width: 100%;
`;

const Button = ({ icon, color, value, redirect, ...props }) => {
  return (
    <ButtonContainer {...props} color={color}>
      <Icon src={icon} alt={value} />
    </ButtonContainer>
  );
};

export default Button;
