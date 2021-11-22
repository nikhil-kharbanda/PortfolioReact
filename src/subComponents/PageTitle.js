/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Text = styled.h1`
position: fixed;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
bottom: ${props => props.bottom};
color:${props => `rgba(${props.theme.textRgba},0.5)`};
font-size: calc(4rem + 4vw);
z-index:0;
`
const PageTitle = (props) => {
  return (
        <Text top={props.top} left={props.left} right={props.right} bottom={props.bottom}>
            {props.text}
        </Text>
  )
}

export default PageTitle
