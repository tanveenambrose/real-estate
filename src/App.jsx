import React from 'react'
import "./index.css";
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
