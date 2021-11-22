/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

import { darkTheme } from './Themes'

import ParticleComponent from '../subComponents/ParticleComponent'

import LogoComponent from '../subComponents/LogoComponents'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/HomeButton'

import { Work } from '../data/WorkData'
import Card from '../subComponents/Card'
import PageTitle from '../subComponents/PageTitle'
import { LoadIcon } from './AllSvgs'

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height:400vh;
  position: relative;
  display: flex;
  align-items: center;
`

const Main = styled(motion.ul)`
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

// Framer-motion Configuration
const transitionEffect = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }

}

const WorkPage = () => {
  const ref = useRef(null)
  const initialIcon = useRef(null)

  useEffect(() => {
    const element = ref.current

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`

      return (initialIcon.current.style.transform =
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

                <Main ref={ref}
                    variants={transitionEffect}
                    initial='hidden'
                    animate='show' > {
                        Work.map(wd =>

                            <Card key={wd.id}
                                data={wd}
                            />
                        )
                    } </Main>

                <Rotate ref={initialIcon} >
                    <LoadIcon width={80}
                        height={80}
                        fill={darkTheme.text}
                    /> </Rotate>

                <PageTitle text="WORK"
                    bottom='45%'
                    left="-4%" />

            </Box> </ThemeProvider>)
}

export default WorkPage
