import React from 'react'
import "./index.css";
import Header from './components/Header';
import About from './components/About';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
    </div>
  )
}

export default App
