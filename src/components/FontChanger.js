import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Styler = styled.div`
  p,
  table,
  th,
  ul,
  form,
  button {
    font-family: ${({ text }) => text} !important;
    a {
      font-family: ${({ text }) => text} !important;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h6 {
    font-family: ${({ titles }) => titles} !important;
  }
`

const FixedDiv = styled.div`
  display: fixed;

  button {
    font-family: cursive !important;
  }
`

const FontChanger = ({ children, text, titles }) => {
  const [titleCursor, setTitleCursor] = useState(0)
  const [textCursor, setTextCursor] = useState(0)

  return (
    <Styler
      text={text[textCursor % text.length]}
      titles={titles[titleCursor % titles.length]}
    >
      <FixedDiv>
        <button onClick={() => setTitleCursor(titleCursor + 1)}>
          Titles: {titles[titleCursor % titles.length]}
        </button>
        <button onClick={() => setTextCursor(textCursor + 1)}>
          Text: {text[textCursor % text.length]}
        </button>
      </FixedDiv>
      {children}
    </Styler>
  )
}

FontChanger.propTypes = {
  children : PropTypes.node.isRequired,
text: PropTypes.arrayOf(PropTypes.string).isRequired,
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default FontChanger
