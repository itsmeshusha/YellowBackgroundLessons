import React, {useReducer, useState} from 'react';

type AccordionPropsType = {
    title: string

}

type AccordionTitlePageType = {
    title: string
    setCollapsed: () => void

}

type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            return state;
    }
}


export const UncontrolledAccordion = React.memo((props: AccordionPropsType) => {



    //let [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <div>

        <AccordionTitle title={props.title} setCollapsed={() => dispatch({
            type: TOGGLE_COLLAPSED
        })} />

        { !state.collapsed && <AccordionBody/> }
    </div>

})

export const AccordionTitle = React.memo((props: AccordionTitlePageType) => {
    return <div onClick={() => {props.setCollapsed()}}>
        <h3>{props.title}</h3>
    </div>
})

export const AccordionBody = React.memo(() => {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
})