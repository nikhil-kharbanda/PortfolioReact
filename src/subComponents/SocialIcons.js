/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Twitter } from '../components/AllSvgs'
import { darkTheme } from '../components/Themes'

const Line = styled(motion.span)`
  width: 2px;
  height: 2rem;
  background-color: ${(props) =>
    props.color === 'dark' ? darkTheme.text : darkTheme.body};
`

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  &>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}
      >
        <NavLink style={{ color: 'inherit' }} target="__blank" to={{ pathname: 'https://github.com/nikhil-kharbanda' }}>
          <Github width={30} height={30} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
        </NavLink>
      </motion.div>

      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}
      >
        <NavLink style={{ color: 'inherit' }} target="__blank" to={{ pathname: 'https://www.linkedin.com/in/nikhil-kharbanda/' }}>
          <Twitter width={30} height={30} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
        </NavLink>
      </motion.div>

      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}
      >
        <NavLink style={{ color: 'inherit' }} target="__blank" to={{ pathname: 'https://www.instagram.com/nik22cool/' }}>
          <Facebook width={30} height={30} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
        </NavLink>
      </motion.div>

      <Line color={props.theme} initial={
        {
          height: 0
        }
      }
        animate={{
          height: '2rem'
        }}
        transition={{
          type: 'spring', duration: 1, delay: 0.8
        }}
      />
    </Icons>
  )
}

export default SocialIcons
