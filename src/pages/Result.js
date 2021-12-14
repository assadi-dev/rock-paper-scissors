import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PlayerContext from "../context/PlayerContext";
import { basic_result } from "../shared/utils";
import styled from "styled-components";
import Button from "../components/Button";
import { getInfoChoice } from "../shared/table_elements";

const ResultSection = styled.div `
  position: relative;
  padding-top: 5rem;
  width: 100%;
  min-height: 60vh;
  @media (max-width: 768px) {
    padding-top: 0rem;
  }

  @media (max-width: 550px) {
    width: 100%;
    min-height: 40vh;
  }
`;
const ResultContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    height: 300px;
  }
  @media (max-width: 478px) {
    margin-top: 0;
    height: 300px;
  }
`;

const Col = styled.div `
  padding: 0 1rem;
  margin: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
const ColMid = styled.div `
  padding: 0 1rem;
  margin: 0;
  width: ${(props) => (props.countdown >= 5 ? "100%" : "20%")};
  text-align: center;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const Circle = styled.div `
  width : 180px;
  height: 180px;
  background : rgba(0,0,0,0.1);
  border-radius 100%;
  margin:auto;
  display: flex;
  align-items : center;
  justify-content : center;
  font-size : 3.5rem;
  @media screen and (max-width:768px){
    margin-top: 0;
    width : 160px;
    height: 160px;
  }
  @media screen and (max-width:550px){
  margin:initial;
    width : 120px;
    height: 120px;
    font-size:2.5rem;
  }
`;

const Title = styled.h4 `
  margin-bottom: 2.5rem;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  font-weight: 700;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 550px) {
    margin-top: 2.5rem;
  }
`;

const PlayAgainButton = styled(Link)
`
  opacity: 0;
  border: none;
  padding: 0.8rem 2rem;
  text-transform: uppercase;
  font-size: 1rem;
  border-radius: 5px;
  color: red;
  width: 100%;
  background-color: #fff;
  font-weight: 700;
  white-space: nowrap;
  animation: showResult 0.3s ease-in-out 3s forwards;
  @keyframes showResult {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 0.8rem 2rem;
    width: 80%;
    font-weight: 600;
    font-size: 1.3rem;
    color: var(--dark-text);
  }
`;

const TextAnnonce = styled.h4 `
  opacity: 0;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-size: 3rem;
  animation: showResult 0.3s ease-in-out forwards;

  @media screen and (max-width: 1144px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @keyframes showResult {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const MobilZoneAnonce = styled.div `
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  animation: showResult 0.3s ease-in-out 1s forwards;

  @keyframes showResult {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  padding: 1rem 2.5rem;
  @media screen and (min-width: 550px) {
    display: none;
  }
`;
const Result = () => {
    const context = useContext(PlayerContext);
    const { playerChoice, computerChoice, setInfo, score } = context;
    const [state, setState] = useState({
        player: getInfoChoice(playerChoice || "paper"),
        computer: getInfoChoice(computerChoice || "rock"),
        score: score,
        result: "",
    });

    const [countdown, setCountdown] = useState(3);
    const [ready, setReady] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        if (state.result === undefined) {
            navigate("/");
        }
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(countdown - 1);
        }, 1000);
        const start = setInterval(() => {
            setReady(ready + 1);
        }, 1000);
        if (countdown === 0) {
            clearInterval(timer);
            setCountdown(0);
            const decision = basic_result(computerChoice, playerChoice);
            setState({...state, result: decision });

            if (ready >= 6) {
                if (decision === "win") {
                    setInfo({...context, score: score + 1 });
                }
                clearTimeout(start);
            }
        }

        return () => {
            clearInterval(timer);

            clearTimeout(start);
        };
    }, [countdown, ready]);

    return ( <
        >
        <
        ResultSection >
        <
        ResultContainer >
        <
        Col >
        <
        div >
        <
        Title > You picked { ready } < /Title> <
        /div>

        <
        Button color = { state.player.color }
        icon = { state.player.icon }
        className = {
            state.result === "win" && countdown === 0 ?
            ready >= 4 ?
            "btn-result shadow-pulse" :
            "btn-result slide-right" :
                "btn-result slide-right"
        }
        /> <
        /Col>

        <
        ColMid countdown = { ready } > {
            ready >= 5 && ( <
                TextAnnonce > { state.result === "win" && "You win" } { " " } { state.result === "lose" && "You lose" } { state.result === "draw" && "You draw" } <
                /TextAnnonce>
            )
        }

        {
            countdown === 0 && ( <
                PlayAgainButton to = "/" > Play again < /PlayAgainButton>
            )
        } <
        /ColMid>

        <
        Col >
        <
        div >
        <
        Title > The house picked < /Title> <
        /div>

        {
            countdown === 0 ? ( <
                Button color = { state.computer.color }
                redirect = { false }
                icon = { state.computer.icon }
                className = {
                    state.result === "lose" && countdown === 0 ?
                    ready >= 4 ?
                    "btn-result shadow-pulse" :
                    "btn-result slide-left" :
                        "btn-result slide-left"
                }
                />
            ) : ( <
                Circle > { countdown } < /Circle>
            )
        } <
        /Col> <
        /ResultContainer> <
        /ResultSection>

        <
        MobilZoneAnonce > {
            ready >= 4 && ( <
                TextAnnonce > { state.result === "win" && "You win" } { state.result === "lose" && "You lose" } { state.result === "draw" && "You draw" } <
                /TextAnnonce>
            )
        } {
            countdown === 0 && ( <
                PlayAgainButton to = "/" > Play again < /PlayAgainButton>
            )
        } <
        /MobilZoneAnonce> <
        />
    );
};

export default Result;