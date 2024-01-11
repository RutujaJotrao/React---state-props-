import React from 'react'
import './styles.css'
import { useState } from 'react';

const StringLength = () => {

  const [word, setWord]=useState();
  const [text, setText]=useState();

  const cal = () => {
    var len=word.length;
    setText("Length of string is " + len);
  }
  return (
    <div className='main_content'>
        <center>
            <h2>Application calculates the length of user's entered string</h2>
            <br></br>
            <input type='text' placeholder='Enter String' value={word} onChange={(e) => setWord(e.target.value)}/> <br/><br/><br/>
            <input type='submit' value="Calculate Length" onClick={cal} style={{backgroundColor:'skyblue'}}/> <br/><br/>
            <label>{text}</label>
        </center>
    </div>
  )
}

export default StringLength
