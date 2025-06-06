import { useState } from 'react'

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Team from './Pages/Team';
import Updates from './Pages/Updates';
import './styles/App.css'



function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/project" exact element={<Project />}></Route>
          <Route path="/team" exact element={<Team />}></Route>
          <Route path="/updates" exact element={<Updates />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
