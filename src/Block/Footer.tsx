import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import foot from "../Assets/footer-bg.png";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <Container>
        <Resolution>
          <h1 style={{ fontWeight: "600" }}>Resolution</h1>
          <p style={{ fontWeight: "500" }}>
            Maecenas pellentesque placerat quam, in finibus nisl tincidunt sed.
            Aliquam magna augue, malesuada ut feugiat eget, cursus eget felis.
          </p>
          <Icons>
            <FB>
              <FaFacebook />
            </FB>
            <IG>
              <FaInstagram />
            </IG>
            <TT>
              <FaTwitter />
            </TT>
          </Icons>
        </Resolution>
        <Link>
          <h1 style={{ fontWeight: "600" }}>Our Link</h1>
          <p style={{ fontWeight: "500" }}>Home</p>
          <p style={{ fontWeight: "500" }}>About Us</p>
          <p style={{ fontWeight: "500" }}>Services</p>
          <p style={{ fontWeight: "500" }}>Team</p>
          <p style={{ fontWeight: "500" }}>Blog</p>
        </Link>
        <Services>
          <h1 style={{ fontWeight: "600" }}>Our Services</h1>
          <p style={{ fontWeight: "500" }}>Strategy & Research</p>
          <p style={{ fontWeight: "500" }}>Web Development</p>
          <p style={{ fontWeight: "500" }}>Web Solution</p>
          <p style={{ fontWeight: "500" }}>Digital Marketing</p>
          <p style={{ fontWeight: "500" }}>App Design</p>
        </Services>
        <Olinks>
          <h1 style={{ fontWeight: "600" }}>Other Links</h1>
          <p style={{ fontWeight: "500" }}>FAQ</p>
          <p style={{ fontWeight: "500" }}>Portfoliot</p>
          <p style={{ fontWeight: "500" }}>Privacy Polio</p>
          <p style={{ fontWeight: "500" }}>Terms & Conditions</p>
          <p style={{ fontWeight: "500" }}>Support</p>
        </Olinks>
        <Contact>
          <h1 style={{ fontWeight: "600" }}>Contact Us</h1>
          <p style={{ fontWeight: "500", display: "flex" }}>
            <Call>
              <FaPhone />
            </Call>
            +234-8484-5119
            <br />
            +234-5661-0685
          </p>
          <p style={{ fontWeight: "500", display: "flex" }}>
            <Call>
              <FaEnvelope />
            </Call>
            help@desinic.com
            <br />
            info@desimic.com
          </p>
          <p style={{ fontWeight: "500", display: "flex" }}>
            <Call>
              <IoLocation />
            </Call>
            Pontiac, Michigan, United
            <br />
            States of America
          </p>
        </Contact>
        {/* <Arr style={{height: "60px", width:"60px", background: "linear-gradient(to right, #ef186f,#fd9c59)",}}>
        <Icon><FaArrowUp/></Icon>
      </Arr> */}
      </Container>
      <End>
        © 2022 <Span> TechSis.</Span> All Right Reserved
      </End>
    </div>
  );
};

export default Footer;
// const Icon = styled.div`
// font-size:25px;`

// const Arr = styled.div`
// border-radius:7px;
// color:white;
// display:flex;
// align-items:center;
// justify-content:center;
// margin-right: 20px;
// margin-top: 100px;
// `
const Span = styled.div`
  text-decoration: underline;
  margin: 6px;
`;

const End = styled.div`
  width: 100%;
  height: 65px;
  background-color: #111941;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500px;
`;

const Call = styled.div`
  border-radius: 50%;
  height: 35px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  background: linear-gradient(to right, #f2376a, #fc955b);
`;

const Contact = styled.div`
  width: 300px;
  color: white;
  margin-right: 100px;
`;
const Olinks = styled.div`
  width: 300px;
  color: white;
`;
const Services = styled.div`
  width: 300px;
  color: white;
`;
const Link = styled.div`
  width: 200px;
  color: white;
`;

const IG = styled.div`
  color: #ef1f76;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TT = styled.div`
  color: #ef1f76;
  width: 40px;
  margin-right: 10px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FB = styled.div`
  color: #ef1f76;
  width: 40px;
  margin-right: 10px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.div`
  display: flex;
`;

const Resolution = styled.div`
  width: 250px;
  margin: 0px 40px 0px 100px;
  color: white;
`;

const Container = styled.div`
  height: 70vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  align-items: center;
  background-image: url(${foot}),
    linear-gradient(to right, #592680, #994cd0, #592680);
  /* border: 2px solid red; */
`;