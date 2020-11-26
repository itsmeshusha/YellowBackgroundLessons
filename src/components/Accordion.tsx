import React from 'react';

type ItemType ={
    title: string
    value: any
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
    items: ItemType[]
    onItemClick: (value: any) => void
}

type AccordionTitlePageType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onItemClick: (value: any) => void
}


export const Accordion = React.memo((props: AccordionPropsType) => {
    return <div>
        <AccordionTitle title={props.title} onClick={props.onClick} collapsed={!props.collapsed} />
        { !props.collapsed && <AccordionBody items={props.items} onItemClick={props.onItemClick}/> }
    </div>

})

export const AccordionTitle = React.memo( (props: AccordionTitlePageType) => {
    return <div onClick={() => {props.onClick(props.collapsed)}}>
        <h3>{props.title}</h3>
    </div>
})

export const AccordionBody = React.memo( (props: AccordionBodyPropsType) => {
    return <div>
        <ul>
            { props.items.map( (i, index) => <li onClick={() => props.onItemClick(i.value)} key={index}>{i.title} </li> ) }
        </ul>
    </div>
})