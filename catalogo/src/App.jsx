import {Outlet } from 'react-router-dom'

import './App.css'

import Navbar from './componentes/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <h2>Movies Lib</h2>
        <Outlet/>
      </div>
    </>
  )
}

export default App
