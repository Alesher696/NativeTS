import React, {useState} from 'react';


export const UnctrlAccordion = () => {
    const title = "Menu"


    let [collapse, setCollapse] = useState<boolean>(false)

    const menuStyle = {
        display: !collapse ? 'none' : 'block'
    }

    return (
        <div>
            <div onClick={() => {
                setCollapse(!collapse)
            }}>{title}</div>
            <div style={menuStyle}>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </div>
    );
};

