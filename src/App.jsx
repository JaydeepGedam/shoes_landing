import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  const ref = useRef(null);
  return (
    <div ref={ref} className='w-full h-screen bg-black text-white selection:text-yellow-500'>
      <Navbar reference={ref} />
      <Hero reference={ref} />
    </div>
  )
}

export default App
