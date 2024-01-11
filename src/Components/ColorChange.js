import React from 'react';
import './styles.css';
import { useState } from 'react';

const ColorChange = () => {

    let white = '#ffffff';

    const [bgColor, setbgColor] = useState(white);
    const [text, setText] = useState("")

    const changePinkCol = () => {
        let pk = 'Pink';
        setbgColor(pk);
        setText("Current background color is pink")
    }

    const changeyellowCol = () => {
        let yl = 'Yellow';
        setbgColor(yl);
        setText("Current background color is yellow")
    }

    const changeSkyCol = () => {
        let sb = 'Skyblue';
        setbgColor(sb);
        setText("Current background color is skyblue")
    }

    const changeWheatCol = () =>{
        let wh = 'Wheat';
        setbgColor(wh);
        setText("Current background color is wheat")
    }

    const changeTomatoCol = () =>{
        let tm = 'Tomato';
        setbgColor(tm);
        setText("Current background color is tomato")
    }

    return (
        <div>
            <div style={{ backgroundColor: bgColor, height: '96vh' }}>
                <br></br><br></br><h1><center>Color Changer</center></h1><br></br><br></br>
                <center>
                    <button style={{ background: 'Pink' }} onClick={changePinkCol}>PINK</button>
                    <button style={{ background: 'yellow'}} onClick={changeyellowCol}>YELLOW</button>
                    <button style={{ background: 'skyblue'}} onClick={changeSkyCol}>SKY BLUE</button>
                    <button style={{ background: 'wheat' }} onClick={changeWheatCol}>WHEAT</button>
                    <button style={{ background: 'tomato' }} onClick={changeTomatoCol}>TOMATO</button>

                    <h2><center>{text}</center></h2>
                </center>
            </div>
        </div>
    )
}

export default ColorChange
