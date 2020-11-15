import React, {useState} from 'react';
import {OnOff} from '../components/OnOff'
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff stories',
    component: OnOff
}

export const OnStory= () => <OnOff on={true} onClick={action('clicked')} />
export const OffStory= () => <OnOff on={false} onClick={action('clicked')} />
export const OnOffChanging = () => {
    const [on, setOn] = useState(true)
    return <OnOff on={on} onClick={setOn} />
}

