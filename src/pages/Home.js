import React, { useContext, useEffect, useState } from "react";
import PlayerContext from "../context/PlayerContext";
import Button from "../components/Button";
import styled from "styled-components";
import trangle from "../assets/images/bg-triangle.svg";
import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import scissors from "../assets/images/icon-scissors.svg";
import { basic_choices, random_arrayIndex } from "../shared/utils";
import { useNavigate } from "react-router-dom";

const SelectSection = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 50%;
  height: 50vh;
  margin: 6rem auto auto auto;
  @media (max-width: 768px) {
    margin-top: 3rem;
    width: 45%;
    min-height: 35vh;
  }
  @media (max-width: 550px) {
    width: 60%;
    min-height: 25vh;
  }
  @media (max-width: 475px) {
    width: 70%;
  }
`;
const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
  margin: 0 auto;
  @media (max-width: 768px) {
    height: 220px;
  }
  @media (max-width: 550px) {
    height: 220px;
  }
  @media (max-width: 475px) {
    height: 30vh;
  }
`;
const Trinagle = styled.img`
  position: absolute;
  opacity: 0;
  top: 25px;
  width: 100%;
  height: 60%;
  margin: 1rem auto auto;
  animation: fade 1s ease-in forwards 0.5s;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 550px) {
    top: 0px;
    height: 80%;
    margin: 1rem auto auto;
  }
`;

const rockPosition = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  texAlign: "center",
  marginLeft: "auto",
  marginRight: "auto",
  zIndex: 100,
};
const paperPosition = {
  position: "absolute",
  left: -5,
  top: -25,
  zIndex: 100,
};
const scissorsPosition = {
  position: "absolute",
  right: -5,
  top: -25,
  zIndex: 120,
};

const Home = () => {
  const gameContext = useContext(PlayerContext);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".btn-home");
      for (let btn of elements) {
        btn.classList.remove("home-presentation");
      }
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleSelect = (element) => {
    let current = element.toLowerCase();
    const computer = random_arrayIndex(basic_choices);
    gameContext.setInfo({
      ...gameContext,
      player: current,
      computer: computer,
    });

    navigate("/result");
  };
  return (
    <SelectSection>
      <ButtonContainer>
        <Trinagle src={trangle} />
        <Button
          style={paperPosition}
          color="var(--paper-single)"
          icon={paper}
          value="paper"
          onClick={() => handleSelect("paper")}
          className="btn-home home-presentation"
        ></Button>
        <Button
          style={rockPosition}
          color="var(--rock-single)"
          icon={rock}
          value="rock"
          onClick={() => handleSelect("rock")}
          className="btn-home home-presentation "
        ></Button>
        <Button
          style={scissorsPosition}
          color="var(--scissors-single)"
          gradient="var(--scissors-gradient)"
          icon={scissors}
          value="scissors"
          onClick={() => handleSelect("scissors")}
          className="btn-home home-presentation"
        ></Button>
      </ButtonContainer>
    </SelectSection>
  );
};

export default Home;
