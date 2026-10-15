import React from 'react'
import Header from './components/Header'

/**
 * LayoutPage — shared page shell.
 * Renders a common header plus children (defaulting to null so the
 * component is safe to render without any children).
 */
const LayoutPage = ({ children = null }) => {
  return (
    <div className='min-h-screen bg-white'>
        <Header />
        <main>{children}</main>
    </div>
  )
}

export default LayoutPage