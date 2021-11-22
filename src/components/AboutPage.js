/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled, { ThemeProvider, keyframes } from 'styled-components'

import { darkTheme } from './Themes'
import rocket from '../assets/Images/Cartoon_space_rocket.png'

import ParticleComponent from '../subComponents/ParticleComponent'

import LogoComponent from '../subComponents/LogoComponents'
import SocialIcons from '../subComponents/SocialIcons'
import HomeButton from '../subComponents/HomeButton'
import PageTitle from '../subComponents/PageTitle'

import '../assets/css/About.css'
import { NavLink } from 'react-router-dom'

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  }
`

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations//
const float = keyframes`
0% { transform: translateX(20px) }
50% { transform: translateX(0px) translateY(25px) }
100% { transform: translateX(20px) }

`

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations//
const Rocket = styled.div`
position: absolute;
top: 30%;
right: 5%;
width: 20vw;
animation: ${float} 3s ease infinite;
img {
  width: 100%;
  height: auto;
}
`

const Main = styled.div`
border: 2px dashed ${props => props.theme.text};
color: ${(props) => props.theme.text};
padding: 2rem;
width: 50vw;
height: 75vh;
z-index: 3;
line-height: 1.5;
display: flex;
justify-content: center;


position: absolute;
left: calc(5rem + 5vw);
top: 10rem;
font-family: 'Ubuntu Mono', monospace;
font-style: italic;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(10px);
`

const Link = styled(NavLink)`
border-radius: 0 0 0 50px;
color: ${props => props.theme.text};

`

const AboutPage = () => {
  return (
    <div className="AboutStyle">
      <ThemeProvider theme={darkTheme} >
        <Box >
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <HomeButton />
          <ParticleComponent theme="dark" />

          <Rocket ><img src={rocket} alt="spacedude" /></Rocket>
          <Main >
            My name is Nikhil Kharbanda, and I am a recent Computer Systems Engineering graduate from Carleton University, and have successfully received my bachelor degree in April 2021. My degree primarily focuses in combining hardware and software to design and implement integrated computer systems for applications such as robotics, AI, aerospace and avionic systems, and cloud computing.
            <br /> <br />
            I also am attending a Full Stack Coding Bootcamp offered by the University of Toronto. This bootcamp allows me to buld a wide range of projects and applications for front-end and back-end development. Some examples include HTML/CSS, Node.js, MySQL, Express.js, and more.
            <br /> <br />
            Feel free to connect with me via social links.
            <br /> <br />
            <Link to={{ pathname: 'https://drive.google.com/file/d/1iVPxbSMaJz0P9I3mqtvCOaeLp_R1kFkP/view?usp=sharing' }} target="_blank" >
                    Download my resume
          </Link>
          </Main >
          <PageTitle text="ABOUT ME" bottom='45%' left="-5%" />
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default AboutPage
