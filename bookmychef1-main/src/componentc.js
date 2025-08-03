import React from 'react'
import {usercontext} from './App.js';

const componentc = () => {
  return (
    <div>
        <usercontext.Consumer>
            {value=> <div>{value}</div>}
        </usercontext.Consumer>
      
    </div>
  )
}

export default componentc
