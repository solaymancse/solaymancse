import React from 'react'

import { MainComponents } from './MainComponents'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <MainComponents/>
    </BrowserRouter>
  )
}

export default App