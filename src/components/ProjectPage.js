/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components'

import LogoComponent from '../subComponents/LogoComponents'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'

import { Projs } from '../data/ProjData'

import img from '../assets/Images/ProjectsBackground.jpg'
import ProjectsComponents from './ProjectsComponents'

const MainContainer = styled.div`
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

const ProjectPage = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />

        <Center>
          <Grid>
            {Projs.map((Proj) => {
              return <ProjectsComponents key={Proj.id} proj={Proj} />
            })}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  )
}

export default ProjectPage
