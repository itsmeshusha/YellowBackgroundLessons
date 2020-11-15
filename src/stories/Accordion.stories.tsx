import React, {useState} from 'react';
import {Accordion} from "../components/Accordion";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Accordion stories',
    component: Accordion
}

export const AccordionCollapsed = () => <Accordion title={'Menu'} collapsed={true} onClick={action('clicked')} />
export const AccordionNotCollapsed = () => <Accordion title={'Menu'} collapsed={false} onClick={action('clicked')} />
export const AccordionChanging = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion title={'Menu'} collapsed={collapsed} onClick={setCollapsed} />
}


