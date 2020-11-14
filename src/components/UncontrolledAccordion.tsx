import React, {useState} from 'react';

type AccordionPropsType = {
    title: string

}

type AccordionTitlePageType = {
    title: string
}


export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.title}/>
        <button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>
        { !collapsed && <AccordionBody/> }
    </div>

}

export function AccordionTitle (props: AccordionTitlePageType) {
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