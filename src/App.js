import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Nav from './Components/Nav/Nav'

import Home from './Pages/Home/Home'
import Podcasts from './Pages/Podcasts/Podcasts'




const App = () => {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route to={Home}/>
        </Routes>
        <Home />
        <Podcasts />
      </Router>
    </div>
  )
}

export default App