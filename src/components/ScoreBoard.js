import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import PlayerContext from "../context/PlayerContext";
import { basic_result } from "../shared/utils";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 14px;
  border: 3px solid var(--header-outline);
  width: 100%;
  @media screen and (max-width: 550px) {
    border: 4px solid var(--header-outline);
  }
`;

const Left = styled.div`
  padding: 1rem;

  @media screen and (max-width: 768px) {
    padding: 0rem 0.5rem;
  }
`;
const Right = styled.div`
  padding: 1rem;
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Logo = styled.img`
  height: 100%;
  object-fit: contain;
  width: 100%;
  @media screen and (max-width: 760px) {
    width: 50%;
  }
`;
const ScoreContainer = styled.div`
  background: #fff;
  padding: 1rem 2.5rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--score-text);
  border-radius: 5px;
  font-size: 80%;
  font-weight: 700;
  height: 100%;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 768px) {
    padding: 0.5rem 2rem;
  }
  @media screen and (max-width: 550px) {
    padding: 0.5rem 1.5rem;
  }
`;

const ScoreNumber = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dark-text);
  transition: all ease 0.5s;
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ScoreBoard = () => {
  const context = useContext(PlayerContext);
  const { score } = context;

  return (
    <Header>
      <Left>
        <Logo src={logo} alt="logo" />
      </Left>{" "}
      <Right>
        <ScoreContainer>
          <p> Score </p> <ScoreNumber> {score} </ScoreNumber>{" "}
        </ScoreContainer>{" "}
      </Right>{" "}
    </Header>
  );
};

export default ScoreBoard;
