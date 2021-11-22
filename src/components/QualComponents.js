/* eslint-disable react/prop-types */
import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Box = styled(motion(NavLink))`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;

  color: ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  border: 4px solid ${(props) => props.theme.text};
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`

const Container = styled(motion.div)``

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;

  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: cursive, sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`

const Description = styled.div`
  padding: 0.5rem 0;
`

const cardAnimation = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}

const QualComponents = (props) => {
  const { name, description, imgSrc, link } = props.proj
  return (
    <Container variants={cardAnimation}>
    <Box target="_blank" to={{ pathname: link }} >
      <Image img={imgSrc} />
      <Title>{name}</Title>
      <Description>
          {description}
        </Description>
    </Box>
    </Container>
  )
}

export default QualComponents
