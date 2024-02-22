import React from 'react'
import Prop from './comp/props'
import Accordian from './comp/accordian'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import Navbar from './comp/navbar'
import Alert from './comp/alert'
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showalert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212832'
      showalert("Dark mood is enable", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showalert("light mood is enable", "success")
    }
  }



  return (
    <>
      <Router>

      
        <Navbar mode={mode} toggle={togglemode} />
          <Alert alert={alert} />

        <Routes>
         

          <Route path="/" element={<Prop mode={mode} showalert={showalert} />}/>
            
          <Route path='/accordian' element={<Accordian />} />
            
         

        </Routes>

      </Router>




    </>
  )
}

export default App
