import { styled } from "styled-components";
import { BsEyeFill } from "react-icons/bs";

interface iCard {
  TopConText: string;
  imgs: any;
  bcc: string;
  HoverText: string;
  Namee: string;
  Number: number;
}
const Card: React.FC<iCard> = ({
  TopConText,
  imgs,
  bcc,
  HoverText,
  Namee,
  Number,
}) => {
  return (
    <div>
      <Container>
        <ImgWrap>
          <TopCon>{TopConText}</TopCon>
          <Img src={imgs}></Img>
          <HoverContent>
            <Text>{HoverText}</Text>
          </HoverContent>
        </ImgWrap>
        <Details>
          <Left>
            <Profile bcc={bcc}>{Namee.charAt(0)}</Profile>
            <Name>{Namee}</Name>
          </Left>
          <Right>
            <Icons>
              <BsEyeFill />
            </Icons>
            <Num>{Number}</Num>
          </Right>
        </Details>
      </Container>
    </div>
  );
};

export default Card;
const Num = styled.div``;
const Icons = styled.div``;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Name = styled.div``;
const Profile = styled.div<{ bcc: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ bcc }) => bcc};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Text = styled.div`
  color: white;
  padding: 8px;
`;
const HoverContent = styled.div`
  width: 100%;
  height: 230px;
  border-radius: 8px;
  background: linear-gradient(
    to top,
    rgba(59, 59, 59, 0.9),
    rgba(57, 56, 56, 0.5),
    rgba(56, 56, 56, 0.2),
    transparent
  );
  color: white;
  display: flex;
  align-items: end;
  position: absolute;
  bottom: 0;
  opacity: 0;
  transition: 350ms ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

const TopCon = styled.div`
  margin: 8px;
  padding: 10px 20px;
  background-color: rgba(3, 3, 3, 0.5);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: white;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  margin: 13px;
  justify-content: space-between;
`;
const ImgWrap = styled.div`
  width: 100%;
  height: 230px;
  /* background-color: yellow; */
  position: relative;
`;
const Container = styled.div`
  width: 320px;
  min-height: 250px;
  border-radius: 6px;
  /* border: 1px solid black; */
  /* box-shadow: 1px 0px 10px 1px rgba(0, 0, 0, 1); */
`;
