import React from 'react'

import { Links } from './OffCanvasViewElements'
export const OffCanvasView = () => {
  return (
    <div>
        <Links to='/'>Home</Links>
        <Links to='/about'>About</Links>
        <Links to='/services'>Services</Links>
        <Links to='/projects'>Projects</Links>
        <Links to='/contact'>Contact Me</Links>
        
    </div>
  )
}
