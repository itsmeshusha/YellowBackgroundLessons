import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

type AccordionTitlePageType = {
    title: string
}

export function Accordion(props: AccordionPropsType) {
    if(props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.title}/>
          </div>
    } else {
        return <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody />
      </div>
    }


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