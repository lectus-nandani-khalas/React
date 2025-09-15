// import logo from './logo.svg';
// import PropTypes from 'prop-types'

import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react';
import Alert from './Components/Alert';
//   import {
//    BrowserRouter as Router,
//    Routes,
//    Route
// } from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
  }
  
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#4d4d8b';
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() =>{
      //   document.title="TextUtils is Amazing now.";
      // },2000)
      // setInterval(() => {
      //   document.title="Install Now";
      // },1500)
    }
        else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils - Light Mode";
        }  
  }
   
 
  return (
    <>
    {/*<Router>*/}
    <Navbar title="Hello World" aboutText="about us" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
    <div className='container my-3'> 
        {/*<Routes>
          <Route path="/About" element={<About />}/>
          <Route path="/" element={<Textform heading="Enter text here...." mode={mode} showAlert={showAlert} toggleMode={toggleMode}/>} />
        </Routes>*/}
        <Textform heading="Enter text here...." mode={mode} showAlert={showAlert} toggleMode={toggleMode}/>
         </div>
        {/*</Router>*/}
    {/* <About /> */}


    </>
  );
}

export default App;
