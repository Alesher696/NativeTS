import React from 'react';


type StarListPropsType = {
    value: number
    onClick: (value: number) => void
}

export const CtrlStarList = (props: StarListPropsType) => {

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    onClick: (value: number) => void
    value: number
}

const Star = (props: StarPropsType) => {

    const collapsedStar = () => {
        props.onClick(props.value)
    }
    return <span onClick={collapsedStar}>{props.selected ? <b>Star</b> : "Star"}</span>
}