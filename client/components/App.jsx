import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Entries from './Entries'
import Study from './Study'
import Practice from './Practice'

const App = () => {
  return (
    <div>
      <Header />
      <div className="main-body eighty">
        <div className="main-content">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/entries" element={<Entries />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/study" element={<Study />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
