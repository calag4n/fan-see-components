import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #fc2f70;
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform: translate(-50%, 0) scaleX(1);
  }
`

const UnderLine = ({ children }) => {
  return <Span>{children}</Span>
}

export default UnderLine
