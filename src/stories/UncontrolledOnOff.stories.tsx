import React, {useState} from 'react';

import {UncontrolledOnOff} from "../components/UncontrolledOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff
}


export const UncontrolledOnStory = () => <UncontrolledOnOff defaultValue={true} onClick={action('clicked')} />
export const UncontrolledOffStory = () => <UncontrolledOnOff defaultValue={false} onClick={action('clicked')} />

