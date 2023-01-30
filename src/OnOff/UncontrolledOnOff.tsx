import React, {useState} from 'react';




export const UncontrolledOnOff = () => {


    let [on, setOn] = useState(false)

    // const OnHandler =()=> {
    //     setOn(true)
    // }
    //
    // const OffHandler = () =>{
    //     setOn(false)
    // }
    //
    // const OnOffHandler = (Uncotrolled UncontrolledOnOff: any)=>{
    //     return  Uncotrolled UncontrolledOnOff()
    // }

    const Onstyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'


    }
    const OffStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'

    }
    const IndicatorStyle ={
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
        // backgroundColor: Onstyle.backgroundColor === 'green' ? 'green' : 'white'
    }
    return (
        <div>
            <div style={Onstyle} onClick={()=>setOn(true)}>On</div>
            <div style={OffStyle} onClick={()=>setOn(false)}>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    );
};

