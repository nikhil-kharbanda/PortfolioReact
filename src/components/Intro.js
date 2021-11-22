/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

import Me from '../assets/Images/bitmoji.png'
import { NavLink } from 'react-router-dom'

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 160vh;
  height: 50vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;

  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;
`

const SubBox = styled(motion.div)`
  width: 50%;
  position: relative;
  display: flex;

  .avatar {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 120%;
    height: auto;
  }
`

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: cursor;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`

const Link = styled(NavLink)`

`

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1, bounce: 0.75 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Nikhil Kharbanda.</h3>
          <h6>
            <Typewriter
              loop="true"
              cursor
              words={['Computer Systems Engineer', 'Full Stack Developer']}
              delaySpeed={2000}
              deleteSpeed={100}
            />
          </h6>
          <Link to={{ pathname: 'https://drive.google.com/file/d/1iVPxbSMaJz0P9I3mqtvCOaeLp_R1kFkP/view?usp=sharing' }} target="_blank" >
                    Download my resume
          </Link>
        </Text>
      </SubBox>

      <SubBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 1.5, delay: 1, bounce: 0.75 }}
      >
        <div>
          <img className="avatar" src={Me} alt="ProfilePic" />
        </div>
      </SubBox>
    </Box >
  )
}

export default Intro
