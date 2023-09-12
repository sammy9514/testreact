import React from "react";
import styled from "styled-components";

interface iButton {
  text: string;
}

const Button: React.FC<iButton> = ({ text }) => {
  return (
    <div>
      <Container>{text}</Container>
    </div>
  );
};

export default Button;

const Container = styled.div`
  padding: 15px 19px;
  border-radius: 40px;
  color: white;
  font-size: 20px;
  background-color: gray;
  margin-right: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  scroll-snap-align: start;
  transition: 350ms ease-in-out;

  &:hover {
    transform: scale(0.9);
    background-color: white;
    color: black;
  }
`;
