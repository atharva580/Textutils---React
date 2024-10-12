import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';

// import {Routes, Route} from 'react-router-dom';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

let name = "Harry";

function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textutils - Dark mdoe';
      // setInterval(() => {
      //   document.title = 'Textutils - is amazing mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install textutils now';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'Textutils - Light mode'
    }
  }
  return (
    <>
     {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
     {/* <Navbar/> */}
     <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3"> 
     {/* <Routes> */}
          {/* /users --> Component 1
          /users/home --> Component 2 */}
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert}heading="Enter the text to analyze"/>
          </Route> */}
          {/* <Route exact path='/' element={<TextForm showAlert={showAlert}heading="Enter the text to analyze"/>}/> */}
          {/* <Route exact path='/about' element={<About/>}/> */}
      {/* </Routes> */}

      <TextForm showAlert={showAlert}heading="Enter the text to analyze"/>

     </div>
    </>
  ); 
}

export default App;
