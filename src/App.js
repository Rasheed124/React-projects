import React from 'react'

import "../src/index.css"

import "./fonts/sohne/test-soehne-buch.woff2"

import "./fonts/FontsFree-Net-Migra-Extralight.ttf"



import { NavBarMain, Navbar } from './components';
import { Home, About, Contact, Portfolio } from './containers'

import { Routes, Route, useLocation } from 'react-router-dom';






function App() {

  const location = useLocation();

  // Render Navbar on Home page and NavBarMain on all other pages
  const header = location.pathname === "/" ? <Navbar /> : <NavBarMain />;



  return (

    <div className="App">
      <div className="">
        {header}
        <main >
          <div className="max-w-8xl mx-auto ">
            <Routes >
              <Route path='/' element={<Home />} />


              <Route path='/about' element={<About />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>

        </main>
      </div>


    </div>

  );
}

export default App;
