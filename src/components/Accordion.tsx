import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

type AccordionTitlePageType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}


export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.title} onClick={props.onClick} collapsed={!props.collapsed}/>
        { !props.collapsed && <AccordionBody/> }
    </div>

}

export function AccordionTitle (props: AccordionTitlePageType) {
    return <div onClick={() => {props.onClick(props.collapsed)}}>
        <h3>{props.title}</h3>
    </div>
}

export function AccordionBody () {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}