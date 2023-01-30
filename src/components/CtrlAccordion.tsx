import React from 'react';


type CtrlAccordionPropsType = {
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    title: string
}


export const CtrlAccordion: React.FC<CtrlAccordionPropsType> = (props) => {
    let {collapsed, setCollapsed, title} = props

    const menuStyle = {
        display: !collapsed ? 'none' : 'block'
    }

    return (
        <div>
            <div onClick={() => setCollapsed(collapsed)}>{title}</div>
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

