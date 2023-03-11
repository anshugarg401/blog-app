// import React from 'react';
import React, { useState } from 'react';   


// can not import react two times that was the error

// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// #region constants


// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {
};

/**
 * 
 */
const TextForm = (props) => {
  const [Text, setText] = useState("enter the text to be upper cased");
  
  const handleonupclick = () =>{

        let newtext = Text.toUpperCase()
     
      setText(newtext)
      
      console.log(" u clicked uppercase")
  }
 
  
  const handleonloclick = () =>{

        let newtext = Text.toLowerCase()
     
         setText(newtext)
      
      console.log(" u clicked lowercase")
  }
 
  
  const handleonchange = (event) =>{

    console.log("on change")
    setText(event.target.value)
  }
  const clearit = ()=>{
    let newtext = ""
     
    setText(newtext)
    console.log("you cleared the text")
  }
  const handlecopy = ()=>{
      let text = document.getElementById("exampleFormControlTextarea1");   
    //   areatext ki id dalni thi yaha
      text.select();
      navigator.clipboard.writeText(text.value);
  }
  const handlespace = ()=>{
    // let text = document.getElementById("exampleFormControlTextarea1"); 
    let newtext = Text.split(/\s+/);

    setText(newtext.join(" "))
  }
  

    return<> 

  {/* this wasfor emails */}
    {/* <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}

  
<div className={`container text-${props.mode ==="light"?"dark":"light" }`}>

    <h1>{props.heading}</h1>
    <div className="textform" >
        <label forclass="exampleFormControlTextarea1" className="form-label">{props.uppercaseText}</label>
        <textarea className={`form-control text-${props.mode==="light"? "dark":"light"} bg-${props.mode ==="light"?"white":"secondary" }`} id="exampleFormControlTextarea1" rows="6"  value = {Text} onChange = {handleonchange}></textarea>
    </div>
    <div className="btn ">
        <button className={`btn btn-${props.primary}`} onClick = {handleonupclick}>convert to upper case </button>
    </div>
    <div className="btn ">
        <button className={`btn btn-${props.primary}`} onClick = {handleonloclick}>convert to lower case </button>
        <button className={`btn btn-${props.primary} my-3 mx-3`} onClick={clearit}>Clear text</button>
        <button className={`btn btn-${props.primary} my-3 mx-3`}  id = "btncopy" onClick={handlecopy}>Copy text</button>
        <button className={`btn btn-${props.primary} my-3 mx-3`}  id = "btncopy" onClick={handlespace}>remove spaces</button>
    </div>
    <div className = "count">
    <h2>your text summery</h2>
    {Text.split.length}word {Text.length}character 
        <br /> {Text.split.length/250}  reading time 
    </div>

    <h1>preview</h1>
    <div className = "preview">
    {Text}
    </div>
</div>

        </>
    }

TextForm.propTypes = propTypes;
TextForm.defaultProps = defaultProps;
// #endregion

export default TextForm;