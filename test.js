import React from 'react'
import ReactDOM from 'react-dom'
import BarsSpan from './components/BarsSpan'

const App = () => {
  
  return (    
      <div>
        <p>
        BarsSpan : {' '}
        <BarsSpan
          barColor='#fc2f70'
        >
          Hello
        </BarsSpan>
        </p>
      </div>
    
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))