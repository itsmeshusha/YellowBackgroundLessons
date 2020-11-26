import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "../components/Select/Select";


export default {
    title: 'Select stories',
    component: Select
}

export const WithValue = () => {
    const [value, setValue] = useState('2')

    return <>
        <Select value={value} onChange={setValue}
                items={[
                    {title: "Moscow", value: '1'},
                    {title: "Minsk", value: '2'},
                    {title: "Kiev", value: '3'}
                ]}/>
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>
        <Select value = {value} onChange={action('Value is changed')}
                items={[
                    {title: "Moscow", value: '1'},
                    {title: "Minsk", value: '2'},
                    {title: "Kiev", value: '3'}
                ]}/>
    </>
}