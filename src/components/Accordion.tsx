import React from 'react';

export function Accordion(props: any) {
    return <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody />

    </div>
}

export function AccordionTitle (props: any) {
    return <div>
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