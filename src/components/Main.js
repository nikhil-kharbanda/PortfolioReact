import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

import LogoCompoent from '../subComponents/LogoComponents'
import PowerButton from '../subComponents/HomeButton'
import SocialIcons from '../subComponents/SocialIcons'
import Intro from '../components/Intro'

import { LoadIcon } from './AllSvgs'

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`

const Container = styled.div`
  padding: 2rem;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  background-color: #000;
  width: ${(props) => (props.click ? '50%' : '0')};
  height: ${(props) => (props.click ? '100%' : '0')};
  z-index: 1;
  background-color: #000000;
  transition: height 0.5s ease, width 1s ease 0.5s;
`

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? '85%' : '50%')};
  left: ${(props) => (props.click ? '90%' : '50%')};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? 'none' : 'inline-block')};
    padding-top: 1rem;
  }
`

const Contact = styled(NavLink)`
  font-size: 20px;
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`

const Quals = styled(NavLink)`
  font-size: 20px;
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 60%;
  right: -30%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`

const Work = styled(NavLink)`
  font-size: 20px;
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`

const About = styled(NavLink)`
  font-size: 20px;
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`
const Skills = styled(NavLink)`
  font-size: 20px;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`

const Main = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }

  return (
    <MainContainer>
      <Container>
        <DarkDiv click={click} />
        <PowerButton />
        <LogoCompoent theme={click ? 'dark' : 'light'} />
        <SocialIcons theme={click ? 'dark' : 'light'} />

        <Center click={click}>
          <LoadIcon
            onClick={() => handleClick()}
            width={click ? 80 : 200}
            height={click ? 80 : 200}
            fill="currentColor"
          ></LoadIcon>
          <span>click here</span>
        </Center>

        <Contact
          target="_blank"
          to={{ pathname: 'mailto:nikhil_kharbanda@hotmail.com' }}>
          <motion.h3
          initial={{ y: -200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
          animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}>
            Send me an email...
          </motion.h3>
        </Contact>

        <Quals click={click} to="/qual">
          <motion.h3
          initial={{ y: -200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
          animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}>
            <h3>Qualifications</h3>
          </motion.h3>
        </Quals>

        <Work click={click} to="/work">
          <motion.h3
          initial={{ y: -200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
          animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}>
            <h3>Work</h3>
          </motion.h3>
        </Work>

        <BottomBar>
          <About click={click} to="/about">
            <motion.h3
            initial={{ y: 200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}>
              <h3>About me</h3>
            </motion.h3>
          </About>

          <Skills click={click} to="/skills">
            <motion.h3
            initial={{ y: 200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}>
              <h3>Skills</h3>
            </motion.h3>
          </Skills>
        </BottomBar>
      </Container>

      {click ? <Intro click={click} /> : null}
    </MainContainer>
  )
}

export default Main
