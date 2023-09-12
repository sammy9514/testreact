import styled from "styled-components";
import Blog1 from "../Assets/herg.png";
import Img1 from "../Assets/bike.png";
import Img2 from "../Assets/core.jpg";
import Img3 from "../Assets/lion.png";
import Img4 from "../Assets/resilience.png";
import Img5 from "../Assets/workout.png";
import { FaClock } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import Card from "./Card";

const Blog = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Card
            HoverText="Hey There"
            Namee="Ahmed Rufai"
            Number={14}
            TopConText="Qualified"
            bcc="gold"
            imgs={Img1}
          />
          <Card
            HoverText="Hey There"
            Namee="Ekene Nwanchukwu"
            Number={42}
            TopConText="Qualified"
            bcc="green"
            imgs={Img2}
          />
          <Card
            HoverText="Hey There"
            Namee="Zion Akubo"
            Number={3}
            TopConText="Qualified"
            bcc="green"
            imgs={Img3}
          />
          <Card
            HoverText="Hey There"
            Namee="Ayomide Ogunyemi"
            Number={90}
            TopConText="Qualified"
            bcc="gold"
            imgs={Img4}
          />
          <Card
            HoverText="Hey There"
            Namee="Tobi Ajayi"
            Number={41}
            TopConText="Qualified"
            bcc="green"
            imgs={Img5}
          />
          <Card
            HoverText="Hey There"
            Namee="Eli Samuel"
            Number={64}
            TopConText="Qualified"
            bcc="teal"
            imgs={Blog1}
          />
          <Card
            HoverText="Hey There"
            Namee="Peter Wisdom"
            Number={24}
            TopConText="Qualified"
            bcc="purple"
            imgs={Img3}
          />
          <Card
            HoverText="Hey There"
            Namee="Sean Etang"
            Number={34}
            TopConText="Qualified"
            bcc="green"
            imgs={Img1}
          />
          <Card
            HoverText="Hey There"
            Namee="Jessica Felix"
            Number={51}
            TopConText="Qualified"
            bcc="black"
            imgs={Blog1}
          />
          <Card
            HoverText="Hey There"
            Namee="Daniel Okwudili"
            Number={12}
            TopConText="Qualified"
            bcc="green"
            imgs={Img4}
          />
          <Card
            HoverText="Hey There"
            Namee="Esther Ugbwu"
            Number={10}
            TopConText="Qualified"
            bcc="pink"
            imgs={Blog1}
          />
          <Card
            HoverText="Hey There"
            Namee="Sylvia Adimike"
            Number={2}
            TopConText="Qualified"
            bcc="green"
            imgs={Img4}
          />
          <Card
            HoverText="Hey There"
            Namee="Ayomide"
            Number={7}
            TopConText="Qualified"
            bcc="black"
            imgs={Blog1}
          />
          <Card
            HoverText="Hey There"
            Namee="Ayomide"
            Number={9}
            TopConText="Qualified"
            bcc="green"
            imgs={Img1}
          />
          <Card
            HoverText="Hey There"
            Namee="Ayomide"
            Number={5}
            TopConText="Qualified"
            bcc="gold"
            imgs={Img3}
          />
          <Card
            HoverText="Hey There"
            Namee="Ayomide"
            Number={40}
            TopConText="Qualified"
            bcc="yellow"
            imgs={Img1}
          />
          <Card
            HoverText="Hey There"
            Namee="Ayomide"
            Number={234}
            TopConText="Qualified"
            bcc="blue"
            imgs={Img4}
          />
        </Wrapper>
      </Container>
    </div>
  );
};

export default Blog;

const Wrapper = styled.div`
  width: 87%;
  /* height: 0; */
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
