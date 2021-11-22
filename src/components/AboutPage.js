/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled, { ThemeProvider, keyframes } from 'styled-components'

import { darkTheme } from './Themes'
import Spacedude from '../assets/Images/spaceman.png'

import ParticleComponent from '../subComponents/ParticleComponent'

import LogoComponent from '../subComponents/LogoComponents'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import PageTitle from '../subComponents/PageTitle'

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations//
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(20px) translateX(30px) }
100% { transform: translateY(-10px) }

`

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations//
const Spaceman = styled.div`
position: absolute;
top: 10%;
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
height: 60vh;
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

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme} >
      <Box >
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman ><img src={Spacedude} alt="spacedude" /></Spaceman>
        <Main >
          I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.
          <br /> <br />
          I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.
          <br /> <br />
          I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
        </Main >
        <PageTitle text="ABOUT ME" bottom='5%' right="3%" />
      </Box>
    </ThemeProvider>)
}

export default AboutPage
