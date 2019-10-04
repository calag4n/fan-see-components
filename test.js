import React from 'react'
import ReactDOM from 'react-dom'
import BarsSpan from './src/components/BarsSpan'
import  OutlineInput  from './src/components/OutlineInput'

const App = () => {
  
  return (    
      <div>
        <p>
        BarsSpan : {' '}
        </p>
        <BarsSpan
          barColor='#fc2f70'
        >
          Hello
        </BarsSpan>
        
        <p>
        OutlineInput : {' '}
        </p>
        <OutlineInput
          lineColor='#fc2f70'
          // width='6em'
          placeholder='Hey!'
        />
        
      
      </div>
    
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))