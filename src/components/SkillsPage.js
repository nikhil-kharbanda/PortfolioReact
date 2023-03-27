import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { lightTheme } from './Themes'
import { Design, Develope } from './AllSvgs'

import ParticleComponent from '../subComponents/ParticleComponent'

import LogoComponent from '../subComponents/LogoComponents'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/HomeButton'
import PageTitle from '../subComponents/PageTitle'

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 150vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 35vw;
  height: 100vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 0.7vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }
`

const SkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />

        <ParticleComponent theme="light" />

        <Main>
          <Title>
            <Design width={40} height={45} /> Computer Systems Engineer
          </Title>
          <Description>
            I love to create smart home DIY devices, as well as simulate real-life applications using embedded systems (Raspberry Pis, Arduinos, MSP432 boards)
          </Description>
          <Description>
            <strong>SOME EXAMPLES</strong>
            <ul>
              <li>RC Cars and collision detector</li>
              <li>A smart mirror with a machine learning component that looks at the user’s outfit and comments on what they are wearing</li>
              <li>An elevator sub-system using UDP networking. Configured 3 subsystems (elevator model, a scheduler, and floor objects). After creating these 3, we used UDP networking to allow communication between these components and successfully
                  run an elevator simulator</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Java</li>
              <li>C/C++</li>
              <li>Python</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={45} /> Developer
          </Title>
          <Description>
            I love to create unique designs, and interesting designs. For some of my samples, see my project section
          </Description>

          <Description>
            <strong>Skills learned:</strong>
            <ul>
              <li>Javascript</li>
              <li>MySQL/MongoDB</li>
              <li>HTML/CSS</li>
            </ul>
          </Description>
        </Main>
        <PageTitle text="SKILLS" bottom='45%' left="-4%" />
      </Box>
    </ThemeProvider>
  )
}

export default SkillsPage
