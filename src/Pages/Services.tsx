import styled from "styled-components";
import { MdComputer } from "react-icons/md";
import {GoTelescope} from "react-icons/go"
import {BsGlobe2} from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import pix1 from "../Assets/service-banner-pattern.png"

const Services = () => {
    return (
        <div id="services">
           <Container>
             <h1 style={{textAlign: "center", paddingTop: "19px", fontSize: "40px", color:"#222772"}}>Our Specialization</h1>
                 <Line></Line>
             {/* <H1Holder>

             </H1Holder> */}
             <Main2>
              <First>
                <Circle>
                  <Icon>
                  <GoTelescope />
                  </Icon>
                </Circle>
                <Contain1>
                  <h3>Strategy & Research</h3>
                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem,   molestias consequuntur excepturi architectofacilis reiciendis veniam animi minus perferendis praesentium laborum placeat sed?</P>
                </Contain1>
                <Circle2>
                    <Icon1>
                    <FaAngleRight />
                    </Icon1>
                </Circle2>
              </First>
              <Second>
              <Circle>
                  <Icon>
                  <MdComputer/>
                  </Icon>
              </Circle>
              <Contain1>
              <h3>Web Development</h3>
              <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis veniam animi minus perferendis praesentium laborum placeat sed?</P></Contain1>
              <Circle2>
                    <Icon1>
                    <FaAngleRight />
                    </Icon1>
                </Circle2>
              </Second>
              <Third>
              <Circle>
                  <Icon>
                  <BsGlobe2 />
                  </Icon>
                </Circle>
                <Contain1>
                  <h3>Web Solution</h3>
                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem,   molestias consequuntur excepturi architectofacilis reiciendis veniam animi minus perferendis praesentium laborum placeat sed?</P></Contain1>
                <Circle2>
                    <Icon1>
                    <FaAngleRight />
                    </Icon1>
                </Circle2>
              </Third>
              </Main2>
           </Container>
        </div>
    )
}

export default Services;
const Line = styled.div`
width: 250px;
height: 7px;
margin-top: -10px;
margin-left:550px;

background: linear-gradient(to right, #ef186f,#fd9c59); 
border-radius: 30px;
`
const H1 = styled.h1`
color: #1f2470;
font-family: sans-serif;
font-size: 40px;
font-weight: 800;
margin: 0;
`

const H1Holder = styled.div`
width: 60%;
height: 100px;
margin-top: 30px;
// background-color: green;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Icon1 = styled.div`
`

const Circle2 = styled.div`
font-size:17px;
height:50px;
width:50px;
border-radius:30px;
color: rgb(239,31,118);
display: flex;
align-items: center;
justify-content: center;
// background-color: blue;
margin-top: 20px;
border: solid 1px rgb(239,31,118);
cursor:pointer;

&: hover{
    background-color:rgb(239,31,118);
    color:white;
}
`

const P = styled.div`
font-size:17px;
`

const Contain1 = styled.div`
width: 300px;
height: 220px;
color:#212671;
font-size:18px;
// background-color: red;
display:flex;
justifycontent: center;
align-items:center;
flex-direction:column;
text-align:center;
`
const Circle = styled.div`
height: 170px;
width: 170px;
// border-radius: 100%;
background-color: rgb(253,227,238);
color: rgb(239,31,118);
font-size: 40px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 50px;
// margin-left: 55px;
background-image: url(${pix1});
object:cover;
cursor:pointer;

&: hover{
    background-color:rgb(239,31,118);
    color:white;
}
`
const Icon = styled.div`
`


const First = styled.div`
width: 25%;
height: 530px;
background-color: white;
box-shadow:0 6px 10px rgba(0, 0, 0, 0.4);
border-radius: 12px;
display:flex;
justifycontent: center;
align-items:center;
flex-direction:column;
`
const Second = styled.div`
width: 25%;
height: 530px;
background-color: white;
box-shadow:0 6px 10px rgba(0, 0, 0, 0.4);
border-radius: 12px;
display:flex;
justifycontent: center;
align-items:center;
flex-direction:column;
text-align:center;
`
const Third = styled.div`
width: 25%;
height: 530px;
background-color: white;
box-shadow:0 6px 10px rgba(0, 0, 0, 0.4);
border-radius: 12px;
display:flex;
justifycontent: center;
align-items:center;
flex-direction:column;
text-align:center;
`
const Main2 = styled.div`
width: 100%;
height: 600px;
// background-color: yellow;
display: flex;
align-items: center;
justify-content: space-evenly;
margin-left:-20px;
`

const Container = styled.div`
height: 600px;
width: 100%;
// background-color: orange;
`