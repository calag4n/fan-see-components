/**
 * @augments {Component<{  lineColor:string,  placeholder:string,  width:oneOf(string,number]),
 * height:oneOf(string,number]),  bg:string,  name:string,>}
 */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: 0;
  box-sizing: border-box;

  & * {
    box-sizing: border-box;
  }

  & textarea {
    resize: ${props => props.resize};
  }

  & input, & textarea {
    width: ${props => props.width};
    color: white;
    font-size: inherit;
    font-family: inherit;
    background-color: hsl(236, 32%, 26%);
    padding: 0.35em 0.45em;
    border: 1px solid transparent;
    transition: background-color 0.3s ease-in-out;
    height: ${props => props.height};
  }

  & input:focus, & textarea:focus {
    outline: none;
  }

  & input::placeholder, & textarea::placeholder {
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

  & input:focus ~ .bottom, & textarea:focus ~ .bottom {
    transform-origin: bottom left;
    transform: scaleX(1);
  }

  & .right {
    right: 0;
    transform-origin: top right;
  }

  & input:focus ~ .right, & textarea:focus ~ .right {
    transform-origin: bottom right;
    transform: scaleY(1);
  }

  & .top {
    top: 0;
    transform-origin: top left;
  }

  & input:focus ~ .top, & textarea:focus ~ .top {
    transform-origin: top right;
    transform: scaleX(1);
  }

  & .left {
    left: 0;
    transform-origin: bottom left;
  }

  & input:focus ~ .left, & textarea:focus ~ .left {
    transform-origin: top left;
    transform: scaleY(1);
  }
`

const OutlineInput = ({
  lineColor,
  placeholder,
  width,
  bg,
  name,
  height,
  type,
  resize,
}) => (
  <Wrapper
    lineColor={resize ? 'transparent' : lineColor || '#fc2f70'}
    width={width || '8em'}
    bg={bg || 'hsl(236, 32%, 26%)'}
    height={height || '2em'}
    resize={resize || 'none'}
  >
    {type === 'textarea' ? (
      <textarea placeholder={placeholder} name={name}   />
    ) : (
      <input type={type || 'text'} placeholder={placeholder} name={name} />
    )}
    <span className='bottom' />
    <span className='right' />
    <span className='top' />
    <span className='left' />
  </Wrapper>
)

OutlineInput.propTypes = {
  lineColor: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bg: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
}

export default OutlineInput
