/**
* @augments {Component<{  children:node.isRequired,  barColor:string,>}
*/
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Span = styled.span`
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${props => props.barColor};
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }

  &::before {
    top: 0;
    transform-origin: center right;
  }

  &:hover::before {
    transform-origin: center left;
    transform: scaleX(1);
  }

  &::after {
    bottom: 0;
    transform-origin: center left;
  }

  &:hover::after {
    transform-origin: center right;
    transform: scaleX(1);
  }
`

const BarsSpan = ({ children, barColor, spanStyle }) => (
  <Span style={spanStyle} barColor={barColor}>{children}</Span>
)

BarsSpan.propTypes = {
  children: PropTypes.node.isRequired,
  barColor: PropTypes.string,
  spanStyle: PropTypes.object,
}

export default BarsSpan
