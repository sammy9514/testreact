import styled from "styled-components";
import image from "../Assets/about-banner.png"

const About = () => {
    return (
        <div id="about">
           <Container>
             <ImageBox>
              <Image src={image} />
             <TextBox>
                <h1 style={{
                  paddingLeft: "20px", color:"#222772", fontSize: "40px", }}>Why Our Agency</h1>
                  <Line></Line>
                <P style = {{
                  fontSize: "16px",
                  paddingLeft: "20px",
                  color: "#917d95"
                  }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, provident beatae, repellat asperiores sequi error esse assumenda quibusdam cumque, alias non earum explicabo sit officiis dignissimos architecto accusantium natus dolore nobis blanditiis consequatur! Sunt, at!<br /> <br />

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat. Quos reiciendis officiis nulla beatae illo deleniti molestias distinctio eius?</P>
                <Year>
              <First>
              <p style={{color: "#212671",fontSize: "17px",}}>
              <h1>9875</h1>
              Satisfied Clients
              </p>
              </First>
              <Second>
              <p style={{color: "#212671", textAlign: "center", fontSize: "17px",}}>
              <h1>75</h1>
              Years Completed</p>
              </Second>
              <Third>
              <p style={{color: "#212671", textAlign: "center", fontSize: "17px",}}>
              <h1>7894</h1>
              Project Lunched</p>
              </Third>
             </Year>
             </TextBox>
             </ImageBox>
           </Container>
        </div>
    )
}

export default About;
const Line = styled.div`
width: 200px;
height: 7px;
margin-top: -14px;
margin-left:28px;

background: linear-gradient(to right, #ef186f,#fd9c59); 
border-radius: 30px;
`

const P = styled.div`
// background-color:red;
height:200px;
width:568px;
margin-top:40px;
`
const First = styled.div`
width: 155px;
height: 92px;
background-color: white;
box-shadow:0 6px 10px rgba(0, 0, 0, 0.4);
border-radius: 10px;
line-height: 8px;
text-align:center;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
`
const Second = styled.div`
width: 155px;
height: 92px;
background-color: white;
box-shadow:0 6px 10px rgba(0, 0, 0, 0.4);
border-radius: 10px;
line-height: 8px;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
`
const Third = styled.div`
width: 155px;
height: 92px;
background-color: white;
box-shadow:0 6px 10px rgba(0, 0, 0, 0.4);
border-radius: 10px;
line-height: 8px;
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;

`
const Year = styled.div`
width: 579px;
height: 97px;
display: flex;
align-items: center;
justify-content: space-around;
// background-color: blue;
margin-left: 13px;
`
const Image = styled.img`
width:525px;
height:500px;
margin-left:20px;
`
const ImageBox = styled.div`
width:100%;
height:800px;
display: flex;
align-items: center;
justify-content: space-around;
`
const TextBox = styled.div`
width: 640px;
height: 400px;
// background-color: orange;
`

const Container = styled.div`
height: 750px;
width: 100%;
display: flex
align-items: center;
justify-content: space-between;
// background-color: yellow;
flex-direction: rows;
`