import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import PlayerContext from "../context/PlayerContext";
import ScoreBoard from "./ScoreBoard";
import close from "../assets/images/icon-close.svg";
import rules from "../assets/images/image-rules.svg";

const ShowRulesBtn = styled.div`
  text-align: center;
`;

const RulesBtn = styled.button`
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 0.8rem 3rem;
  position: absolute;
  bottom: 0;
  right: 0;
  text-transform: uppercase;
  background: transparent;
  color: inherit;
  margin: 1.5rem;
  transition: all 0.35s ease;
  :active {
    transform: scale(1.2);
  }
  @media screen and (max-width: 768px) {
    position: static;
    marin: 0 auto;
  }
`;

const BackDrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  transition: all ease 0.35s;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
const RulesModal = styled.div`
  flex: 0.3;
  position: relative;
  background: rgba(255, 255, 255, 1);
  padding: 0rem 1.5rem;
  border-radius: 12px;
  @media screen and (max-width: 550px) {
    flex: 1;
    width: 100%;
    height: 100%;
    border-radius: 0px;
  } ;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  @media screen and (max-width: 550px) {
    justify-content: center;
    padding: 2rem 0;
  } ;
`;
const CloseBtn = styled.button`
  border: none;
  background: transparent;
  transition: all ease 0.35s;
  @media screen and (max-width: 550px) {
    display: none;
  }
  :active {
    transform: scale(1.2);
  }
`;
const Close = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
const Col = styled.div``;

const Title = styled.div`
  color: #000;
  font-weight: 700;
  font-size: 1.6rem;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    text-align: center;
  } ;
`;

const RuleModalBody = styled.div`
  padding: 1.5rem;
  @media screen and (max-width: 550px) {
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

const Body = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  @media screen and (max-width: 550px) {
    height: 50vh;
  }
`;

const MobileCloseButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  transition: all ease 0.35s;
  :active {
    transform: scale(1.2);
  }
  @media screen and (min-width: 550px) {
    display: none;
  }
`;

const Layout = () => {
  const gameContext = useContext(PlayerContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="wrapper">
        <main className="container">
          <ScoreBoard score={gameContext.score} />
          <Outlet />
          <ShowRulesBtn>
            <RulesBtn onClick={() => setOpen(true)}>Rules</RulesBtn>
          </ShowRulesBtn>
        </main>
        {open && (
          <BackDrop>
            <RulesModal>
              <Header>
                <Col>
                  <Title>Rules</Title>
                </Col>{" "}
                <Col>
                  <CloseBtn onClick={() => setOpen(false)}>
                    {" "}
                    <Close src={close} alt="Close" />
                  </CloseBtn>
                </Col>{" "}
              </Header>
              <RuleModalBody>
                <Body src={rules} alt="rules" />
                <MobileCloseButton onClick={() => setOpen(false)}>
                  <Close src={close} alt="Close" />
                </MobileCloseButton>
              </RuleModalBody>
            </RulesModal>
          </BackDrop>
        )}
      </div>
    </>
  );
};

export default Layout;
