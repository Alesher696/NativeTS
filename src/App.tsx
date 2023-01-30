import React from 'react';
import './App.css';
import {useState} from 'react'
import {FullInput} from "./components/FullInput";
import {UncontrolledOnOff} from "./OnOff/UncontrolledOnOff";
import {UnctrlAccordion} from "./components/Uncontrolled Accordion";
import {CtrlStarList} from "./components/CtrlStarList";
import {UncStarList} from "./components/UncontrolledStars";
import {CtrlAccordion} from "./components/CtrlAccordion";


function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    let messageList = message.map((el, index) => (
            <div key={index}>{el.message}</div>
        )
    )
    const addTitleInmessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }

//--------------------------Controlable accordion and StarList ----------------------------------------

    let [value, setRatingValue] = useState(0)

    let [collapsed, setCollapsed] = useState(false)
    const title = 'Menu'


//-----------------------------------------------------------------------------------------------------
    return (
        <div className="App">
            <FullInput addMessage={addTitleInmessage}/>
            {messageList}

            <UncontrolledOnOff/>
            <UnctrlAccordion/>
            <CtrlAccordion setCollapsed={() => setCollapsed(!collapsed)} collapsed={collapsed} title={title}/>
            <CtrlStarList value={value} onClick={setRatingValue}/>
            <UncStarList/>
        </div>
    );
}

export default App;
