import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Twitter } from "../components/AllSvgs";
import { darkTheme } from "../components/Themes";

const Line = styled.span`
  width: 2px;
  height: 2rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

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
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <NavLink style = {{color:'inherit'}} target = "__blank" to={{pathname:"https://github.com/nikhil-kharbanda"}}>
          <Github width={30} height={30} fill={props.theme ==="dark" ? darkTheme.text : darkTheme.body} />
        </NavLink>
      </div>

      <div>
        <NavLink style = {{color:'inherit'}} target = "__blank" to={{pathname:"https://www.linkedin.com/in/nikhil-kharbanda/"}}>
          <Twitter width={30} height={30} fill={props.theme ==="dark" ? darkTheme.text : darkTheme.body} />
        </NavLink>
      </div>

      <div>
        <NavLink style = {{color:'inherit'}} target = "__blank" to={{pathname:"https://www.instagram.com/nik22cool/"}}>
          <Facebook width={30} height={30} fill={props.theme ==="dark" ? darkTheme.text : darkTheme.body} />
        </NavLink>
      </div>

      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
