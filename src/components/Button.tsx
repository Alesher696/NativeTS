import React from 'react';




type ButtonPropsType = {
    name:string,
    callBack: ()=> void
}
export const Button = (props:ButtonPropsType) => {
    let onCLickButtonHandler = ()=>{
        props.callBack()
    }
    return (
      <button onClick={onCLickButtonHandler}>{props.name}</button>
    );
};

