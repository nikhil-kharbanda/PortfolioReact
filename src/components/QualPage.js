/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components'

import LogoComponent from '../subComponents/LogoComponents'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/HomeButton'

import { Qual } from '../data/QualData'

import img from '../assets/Images/ProjectsBackground.jpg'
import QualComponents from './QualComponents'
import PageTitle from '../subComponents/PageTitle'
import { motion } from 'framer-motion'

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  width: 100%;
  height: auto;
`

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;

  position: relative;
  padding-bottom: 5rem;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`

const transitionSlide = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}

const ProjectPage = () => {
  return (
    <MainContainer variants= {transitionSlide}
    initial="hidden"
    animate="show"
    exit={{
      opacity: 0,
      transition: { duration: 0.5 }
    }}
  >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />

        <Center>
          <Grid>
            {Qual.map((Proj) => {
              return <QualComponents key={Proj.id} proj={Proj} />
            })}
          </Grid>
        </Center>
      </Container>
      <PageTitle text="QUALIFICATIONS" bottom='39%' left="-12%" />
    </MainContainer>
  )
}

export default ProjectPage
