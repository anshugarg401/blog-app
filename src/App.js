// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react'; 
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState("light")
  const [primary, setprimary] = useState("primary")
  const [alert, setalert] = useState(null)
  
  const showalert = (message,type)=>{
         setalert({
           msg: message,
           type : type
         })
    
setTimeout(() => {
      setalert(null)
    }, 3000);
}
const checkprimary = (cls)=>{
  if(cls==="primary"){
    setprimary("success")
  }
  else{
    setprimary("primary")
  }
}
const changecls = (cls)=>{
  if(cls==="primary"){
    return "blue"
  }
  else if(cls==="warning"){
    return "yellow"
  }
  else if(cls==="danger"){
    return "red"
  }
  else if(cls==="success"){
    return "green"
  }
  
}
const removetonggle = ()=>{
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-light')
}
 const tonggleswitch = (cls)=>{
  removetonggle();
  document.body.classList.add('bg-'+cls);

    if(mode=== "light"){
      checkprimary(cls)
      console.log(cls)
      setmode("dark")
      document.body.style.background = "black"
      const colour = changecls(cls)
      showalert(cls===null?"dark mode has been enabled":`dark mode has been enabled with ${colour} background` ,"success")
      console.log(mode)
    }
    else{
      checkprimary(cls)
      setmode("light")
      document.body.style.background = "white"
      const colour = changecls(cls)
      showalert(cls===null?"light mode has been enabled":`light mode has been enabled with ${colour} background`,"success")
      console.log(mode)
    }
    return cls
  }

  return (
     <>
  {/* this is the navbar  */}

 <Navbar mode = {mode} tonggleswitch = {tonggleswitch}  />
 <div className="container my-3"  >
 <Alert alert = {alert}/>

 
 </div>
      {/* <Router>
        <Switch> */}
          {/* <Route exact path="/"> */}
          <TextForm heading = " Write your content here " uppercaseText= "UPPERCASE THE TEXT " mode = {mode} primary= {primary}tonggleswitch = {tonggleswitch} />
          {/* </Route>
          <Route exact path="/about">
            <About />
          </Route>
          
         
        </Switch>
      </Router> */}

 </>
  );
  }

export default App;
