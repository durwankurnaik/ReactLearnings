import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal(
    <div className='text-center mt-3'>
      This is a portal demo in React
    </div>,
    document.getElementById("portal-root")
  )
}

export default PortalDemo
