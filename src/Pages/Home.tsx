import react from "react";
import bckimg from "../Assets/hero-bg-bottom.png";
import styled from "styled-components";
import vid from "../Assets/WhatsApp Video 2023-09-08 at 11.30.02 PM.mp4";
import Button from "./Button";
import { BiSearch } from "react-icons/bi";
import { BsArrowUp } from "react-icons/bs";
import { useState, useEffect } from "react";

export const Home = () => {
  const [scrollUp, setScrollUp] = useState(false);
  const scrollUpFunc = () => {
    if (window.pageYOffset > 100) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }
  };
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollUpFunc);
    // return () => {
    //   window.removeEventListener("scroll", scrollUpFunc);
    // };
  });
  return (
    <div>
      <Container>
        <BackgroundVid src={vid} autoPlay muted loop />
        <Wrap>
          <Wrapper>
            <ButtonHolder>
              <Button text="Motivational"></Button>
              <Button text="Color"></Button>
              <Button text="Romance"></Button>
              <Button text="Comedy"></Button>
              <Button text="Motivational"></Button>
              <Button text="Color"></Button>
              <Button text="Romance"></Button>
              <Button text="Comedy"></Button>
              <Button text="Motivational"></Button>
              <Button text="Color"></Button>
              <Button text="Romance"></Button>
              <Button text="Comedy"></Button>
              <Button text="Color"></Button>
              <Button text="Motivational"></Button>
              <Button text="Color"></Button>
              <Button text="Motivational"></Button>
              <Button text="Romance"></Button>
              <Button text="Comedy"></Button>
            </ButtonHolder>
            <Middle>
              <H1>Explore the world’s leading design portfolios</H1>
              <Text>
                Millions of designers and agencies around the world showcase
                their portfolio work on Dribbble - the home to the world’s best
                design and creative professionals.
              </Text>
              <Search>
                <Icons>
                  <BiSearch />
                </Icons>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search Book By Author Name"
                />
              </Search>
            </Middle>
            <Up
              onClick={scroll}
              style={{ display: scrollUp ? "flex" : "none" }}
            >
              <Icon>
                <BsArrowUp />
              </Icon>
            </Up>
          </Wrapper>
        </Wrap>
      </Container>
    </div>
  );
};

const Icon = styled.div`
  color: white;
  position: absolute;
`;
const Up = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(3, 3, 3, 0.4);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 50px;
  bottom: 50px;
`;
const Icons = styled.div`
  color: gray;
  margin-left: 28px;
`;
const Search = styled.div`
  font-size: 18px;
  margin-top: 50px;
  border-radius: 50px;
  width: 420px;
  height: 60px;
  background-color: #fff;
  display: flex;
  gap: 15px;
  align-items: center;

  input {
    outline: 0;
    width: 80%;
    border: none;
    font-size: 19px;
  }
`;
const Text = styled.div`
  font-weight: 400;
  padding-top: 10px;
  font-weight: 400;
`;
const H1 = styled.div`
  font-size: 32px;
  font-weight: 700;
  width: 500px;
`;
const Middle = styled.div`
  width: 600px;
  text-align: center;
  padding-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonHolder = styled.div`
  width: 90%;
  height: 80px;

  display: flex;
  align-items: center;
  scroll-behaviour: auto;
  overflow-y: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;

const BackgroundVid = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  /* position: relative; */
  overflow: hidden;
`;
const Wrap = styled.div`
  width: 100%;
  height: 65vh;
  background-color: rgba(3, 3, 3, 0.6);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 65vh;
  overflow: hidden;
  position: relative;
  margin-bottom: 50px;
`;
