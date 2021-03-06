import React from 'react'
import ReactDOM from 'react-dom'
import BarsSpan from './src/components/BarsSpan'
import OutlineInput from './src/components/OutlineInput'

const App = () => {
  return (
    <div>
      <p>BarsSpan : </p>
      <BarsSpan spanStyle={{color: 'red', padding: '0.3em 0'}} barColor='#fc2f70'>Hello</BarsSpan>

      <p>OutlineInput : </p>
      <OutlineInput
        lineColor='#fc2f70'
        // width='6em'
        placeholder='Hey!'
        // height='8rem'
        type='text'
        name='name'
        // resize={true}
      />
      <OutlineInput
        lineColor='#fc2f70'
        // width='6em'
        placeholder='Hey!'
        // height='8rem'
        type='text'
        name='surname'
        // resize={true}
      />
      <OutlineInput
        lineColor='#fc2f70'
        width='36em'
        placeholder='Hey!'
        height='28rem'
        type='textarea'
        name='surname'
        // resize={true}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
