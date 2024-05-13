
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
}
setTimeout(() => {
  setAlert(null);
}, 3000);

const toogleMode = ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor="#143769";
    document.body.style.color="white"
    showAlert(": The Dark Mode is enabled","success")
  }
  else{
    document.body.style.backgroundColor="white";
    document.body.style.color="black"
    setMode('light')
    showAlert(": The Light Mode is enabled","success")
  }
}

  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode}/>
      
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
            <Route exact index path="/" element={
      
      <TextForm heading="Enter text to analyze:" showAlert={showAlert} mode={mode} toogleMode={toogleMode}/> 
    }></Route>
    </Routes>
      </div>
      <Routes>
            <Route exact path="/about" element={
      <About mode={mode} toogleMode={toogleMode}/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;

          