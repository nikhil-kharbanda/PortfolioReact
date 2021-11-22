/* eslint-disable react/prop-types */

/* https://vincentgarreau.com/particles.js/ - my test playground, used in config file */
import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

import configDark from '../config/particlesjs-config.json'
import configLight from '../config/particlesjs-config-light.json'
import configWork from '../config/particlesjs-config-work.json'

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`

const ParticleComponent = (props) => {
  let config = 'light'
  const particlesEffect = props.theme

  if (particlesEffect === 'light') {
    config = configLight
  } else if (particlesEffect === 'dark') {
    config = configDark
  } else if (particlesEffect === 'work') {
    config = configWork
  }

  return (
    <Box>
        <Particles style={{ position: 'absolute', top: 0 }} params={ config } />
    </Box>
  )
}

export default ParticleComponent
