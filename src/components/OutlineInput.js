import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  width: ${props => props.width};
  margin: 0;
  box-sizing: border-box;

  & *{
    box-sizing: border-box;
  }

  & input {
    width: ${props => props.width};
    color: white;
    font-size: inherit;
    font-family: inherit;
    background-color: hsl(236, 32%, 26%);
    padding: 0.35em 0.45em;
    border: 1px solid transparent;
    transition: background-color 0.3s ease-in-out;
    
  }

  & input:focus {
    outline: none;
  }

  & input::placeholder {
    color: hsla(0, 0%, 100%, 0.6);
  }

  & span {
    position: absolute;
    background-color: ${props => props.lineColor};
    transition: transform 0.5s ease;
  }

  & .bottom,
  & .top {
    height: 1px;
    left: 0;
    right: 0;
    transform: scaleX(0);
  }

  & .left,
  & .right {
    width: 1px;
    top: 0;
    bottom: 0;
    transform: scaleY(0);
  }

  & .bottom {
    bottom: 0;
    transform-origin: bottom right;
  }

  & input:focus ~ .bottom {
    transform-origin: bottom left;
    transform: scaleX(1);
  }

  & .right {
    right: 0;
    transform-origin: top right;
  }

  & input:focus ~ .right {
    transform-origin: bottom right;
    transform: scaleY(1);
  }

  & .top {
    top: 0;
    transform-origin: top left;
  }

  & input:focus ~ .top {
    transform-origin: top right;
    transform: scaleX(1);
  }

  & .left {
    left: 0;
    transform-origin: bottom left;
  }

  & input:focus ~ .left {
    transform-origin: top left;
    transform: scaleY(1);
  }
`

const OutlineInput = ({ lineColor, placeholder, width }) => (
  <Wrapper lineColor={lineColor} width={width}>
    <input type='text' placeholder={placeholder} />
    <span class='bottom'></span>
    <span class='right'></span>
    <span class='top'></span>
    <span class='left'></span>
  </Wrapper>
)

export default OutlineInput