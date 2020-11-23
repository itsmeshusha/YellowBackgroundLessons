import React, {useState} from 'react';
import {Accordion} from "../components/Accordion";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Accordion stories',
    component: Accordion
}

export const AccordionCollapsed = () => <Accordion
                                                title={'Menu'}
                                                collapsed={true}
                                                onClick={action('clicked')}
                                                items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}, {title: "Viktor", value: 3}]}
                                                onItemClick={action('Item was clicked')}
/>
export const AccordionNotCollapsed = () => <Accordion
                                                title={'Menu'}
                                                collapsed={false}
                                                onClick={action('clicked')}
                                                items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}, {title: "Viktor", value: 3}]}
                                                onItemClick={action('Item was clicked')}
/>
export const AccordionChanging = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion
        title={'Menu'}
        collapsed={collapsed}
        onClick={setCollapsed}
        items={[{title: "Dimych", value: 1}, {title: "Valera", value: 2}, {title: "Viktor", value: 3}]}
        onItemClick={action('Item was clicked')}
    />
}


