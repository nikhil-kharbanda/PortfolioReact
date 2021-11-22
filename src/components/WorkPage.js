/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { darkTheme } from './Themes'

import ParticleComponent from '../subComponents/ParticleComponent'

import LogoComponent from '../subComponents/LogoComponents'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'

import { Work } from '../data/WorkData'
import Card from '../subComponents/Card'
import { YinYang } from './AllSvgs'

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height:400vh;
  position: relative;
  display: flex;
  align-items: center;
`

const Main = styled.ul`
position: fixed;
top: 12rem;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;

color:white;
`

const Rotate = styled.span`
display:block;
position: fixed;
right:1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index:1;
`

const WorkPage = () => {
  const ref = useRef(null)
  const yinyang = useRef(null)

  useEffect(() => {
    let element = ref.current

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`

      return (yinyang.current.style.transform =
        'rotate(' + -window.pageYOffset + 'deg)')
    }

    window.addEventListener('scroll', rotate)
    return () => {
      window.removeEventListener('scroll', rotate)
    }
  }, [])

  return (
    <ThemeProvider theme={darkTheme} >
      <Box >
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="work" />

        <Main ref={ref}>
          {
            Work.map(wd =>

              <Card key={wd.id} data={wd} />
            )}
        </Main>

        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>

      </Box>
    </ThemeProvider>)
}

export default WorkPage
