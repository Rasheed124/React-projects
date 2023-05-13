import React from 'react'

import "../src/index.css"

import "./fonts/sohne/test-soehne-buch.woff2"

import "./fonts/FontsFree-Net-Migra-Extralight.ttf"



import { Navbar } from './components';
import { Home, About, Contact, Portfolio } from './containers'

import { Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <div className="">
        <Navbar />
        <main >
          <div className="max-w-8xl mx-auto px-4 xl:px-0">
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
