import styled from "styled-components";
import {  FaLightbulb  } from "react-icons/fa"
import pic from "../Assets/feautres-banner.png"
import {  FaCode  } from "react-icons/fa"
import {  FaRocket  } from "react-icons/fa"
import {  FaPalette  } from "react-icons/fa"

const Features = () => {
    return (
        <div id="features">
           <Container>
             <Main>
              <Box>
                <Circle>
                    <Icon1>
                    <FaLightbulb />
                    </Icon1>
                </Circle>
                <P>
                <h2 style={{paddingLeft: "30px", paddingBottom: "0px"}}>Idea & Analysis</h2>
                <p style={{marginLeft: "30px", marginTop: "-10px"}}>Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                </p>
                </P>
              </Box>
              <Box1>
              <Circle>
                    <Icon1>
                    <FaPalette />
                    </Icon1>
              </Circle>
              <P>
                <h2 style={{paddingLeft: "30px", paddingBottom: "0px"}}>Designing</h2>
                <p style={{marginLeft: "30px", marginTop: "-10px"}}>Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                </p>
                </P>
              </Box1>
             </Main>
             <Main1>
             </Main1>
             <Main2>
              <Box3>
              <Circle>
                    <Icon1>
                    <FaCode />
                    </Icon1>
              </Circle>
              <P>
                <h2 style={{paddingLeft: "30px", paddingBottom: "0px"}}>Development</h2>
                <p style={{marginLeft: "30px", marginTop: "-10px"}}>Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                </p>
                </P>
              </Box3>
             <Box4>
             <Circle>
                    <Icon1>
                    <FaRocket />
                    </Icon1>
             </Circle>
             <P>
                <h2 style={{paddingLeft: "30px", paddingBottom: "0px"}}>Testing and Launching</h2>
                <p style={{marginLeft: "30px", marginTop: "-10px"}}>Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                </p>
                </P>
             </Box4>
             </Main2>
           </Container>
        </div>
    )
}

export default Features;
const Icon1 = styled.div`
font-size:35px;
`
const Circle = styled.div`
width: 90px;
height: 90px;
background-color: #222772;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
// position: relative;
top: 10px;
left: 8px;
color:white;
`
const P = styled.div`
// background-color: orange;
color:#222772;
height:110px;
width:290px;
margin-top:-90px;
margin-left:80px;
`

const Box = styled.div`
width: 380px;
height: 150px;
// background-color: yellow;
margin-left: 38px;
flex-direction:rows;
`
const Box1 = styled.div`
width: 380px;
height: 150px;
// background-color: pink;
margin-top: 20px;
margin-left: 38px;
flex-direction:rows;

`
const Box3 = styled.div`
width: 380px;
height: 150px;
flex-direction:rows;

`
const Box4 = styled.div`
width: 380px;
height: 150px;
// background-color: pink;
margin-top: 20px;
flex-direction:rows;

`

const Main = styled.div`
width: 30%;
height: 400px;
// background-color: green;
flex-direction: column;
`

const Main1 = styled.div`
width: 390px;
height: 340px;
// background-color: orange;
background-image: url(${pic});
background-repeat:no-repeat;
object: contain;
`
const Main2 = styled.div`
width: 30%;
height: 400px;
// background-color: blue;
flex-direction: column;
margin-right:50px;
`

const Container = styled.div`
margin-top:130px;
height: 500px;
width: 100%;
// background-color: red;
display: flex;
align-items: center;
justify-content: space-around
`