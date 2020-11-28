import React, {useMemo, useState} from 'react';
import {Select} from "../components/Select/Select";
import {action} from "@storybook/addon-actions";
import { Counter } from './ReactMemo.stories';

export default {
    title: 'Select memo',
    component: Select
}


export const Example1 = () => {

    const items = [
        {
            title: "Moscow",
            value: '1',
            countryId: 1,
            numberOfPeople: 12000000
        },
        {
            title: "Saint-Petesburg",
            value: '2',
            countryId: 1,
            numberOfPeople: 5000000
        },
        {
            title: "Kazan",
            value: '3',
            countryId: 1,
            numberOfPeople: 1200000
        },
        {
            title: "Minsk",
            value: '4',
            countryId: 2,
            numberOfPeople: 2000000
        },
        {
            title: "Gomel",
            value: '5',
            countryId: 2,
            numberOfPeople: 500000
        },
        {
            title: "Grodno",
            value: '6',
            countryId: 2,
            numberOfPeople: 350000
        },
        {
            title: "Kiev",
            value: '7',
            countryId: 3,
            numberOfPeople: 2800000
        },
        {
            title: "Kharkov",
            value: '8',
            countryId: 3,
            numberOfPeople: 1400000
        },
        {
            title: "Odessa",
            value: '9',
            countryId: 3,
            numberOfPeople: 1000000
        }
    ]
    const [value, setValue] = useState('1')
    const [count, setCount] = useState(0)

       return <div>

        <button onClick={()=>setCount(count+1)}>+</button>
        <Counter count={count}/>
        <Select value={value} onChange={setValue} items={items} />

    </div>
}

export const FilteredWithM = () => {

    const items = [
        {
            title: "Moscow",
            value: '1',
            countryId: 1,
            numberOfPeople: 12000000
        },
        {
            title: "Saint-Petesburg",
            value: '2',
            countryId: 1,
            numberOfPeople: 5000000
        },
        {
            title: "Kazan",
            value: '3',
            countryId: 1,
            numberOfPeople: 1200000
        },
        {
            title: "Minsk",
            value: '4',
            countryId: 2,
            numberOfPeople: 2000000
        },
        {
            title: "Gomel",
            value: '5',
            countryId: 2,
            numberOfPeople: 500000
        },
        {
            title: "Grodno",
            value: '6',
            countryId: 2,
            numberOfPeople: 350000
        },
        {
            title: "Kiev",
            value: '7',
            countryId: 3,
            numberOfPeople: 2800000
        },
        {
            title: "Kharkov",
            value: '8',
            countryId: 3,
            numberOfPeople: 1400000
        },
        {
            title: "Odessa",
            value: '9',
            countryId: 3,
            numberOfPeople: 1000000
        }
    ]
    const [value, setValue] = useState('1')
    const [count, setCount] = useState(0)

    const newItems = useMemo(()=>{
        const newArr = items.filter(i => i.title.toLowerCase().indexOf("m") > -1)
        return newArr;
    }, [items])

    return <div>

        <button onClick={()=>setCount(count+1)}>+</button>
        <Counter count={count}/>
        <Select value={value} onChange={setValue} items={newItems} />

    </div>
}

export const FilteredWithСountry = () => {

    const items = [
        {
            title: "Moscow",
            value: '1',
            countryId: 1,
            numberOfPeople: 12000000
        },
        {
            title: "Saint-Petesburg",
            value: '2',
            countryId: 1,
            numberOfPeople: 5000000
        },
        {
            title: "Kazan",
            value: '3',
            countryId: 1,
            numberOfPeople: 1200000
        },
        {
            title: "Minsk",
            value: '4',
            countryId: 2,
            numberOfPeople: 2000000
        },
        {
            title: "Gomel",
            value: '5',
            countryId: 2,
            numberOfPeople: 500000
        },
        {
            title: "Grodno",
            value: '6',
            countryId: 2,
            numberOfPeople: 350000
        },
        {
            title: "Kiev",
            value: '7',
            countryId: 3,
            numberOfPeople: 2800000
        },
        {
            title: "Kharkov",
            value: '8',
            countryId: 3,
            numberOfPeople: 1400000
        },
        {
            title: "Odessa",
            value: '9',
            countryId: 3,
            numberOfPeople: 1000000
        }
    ]
    const [value, setValue] = useState('1')
    const [count, setCount] = useState(0)

    const newItems = useMemo(()=>{
        const newArr = items.filter(i => i.countryId === 2)
        return newArr;
    }, [items])

    return <div>

        <button onClick={()=>setCount(count+1)}>+</button>
        <Counter count={count}/>
        <Select value={value} onChange={setValue} items={newItems} />

    </div>
}

export const FilteredWithNumberOfPeople = () => {

    const items = [
        {
            title: "Moscow",
            value: '1',
            countryId: 1,
            numberOfPeople: 12000000
        },
        {
            title: "Saint-Petesburg",
            value: '2',
            countryId: 1,
            numberOfPeople: 5000000
        },
        {
            title: "Kazan",
            value: '3',
            countryId: 1,
            numberOfPeople: 1200000
        },
        {
            title: "Minsk",
            value: '4',
            countryId: 2,
            numberOfPeople: 2000000
        },
        {
            title: "Gomel",
            value: '5',
            countryId: 2,
            numberOfPeople: 500000
        },
        {
            title: "Grodno",
            value: '6',
            countryId: 2,
            numberOfPeople: 350000
        },
        {
            title: "Kiev",
            value: '7',
            countryId: 3,
            numberOfPeople: 2800000
        },
        {
            title: "Kharkov",
            value: '8',
            countryId: 3,
            numberOfPeople: 1400000
        },
        {
            title: "Odessa",
            value: '9',
            countryId: 3,
            numberOfPeople: 1000000
        }
    ]
    const [value, setValue] = useState('1')
    const [count, setCount] = useState(0)

    const newItems = useMemo(()=>{
        const newArr = items.filter(i => i.numberOfPeople >= 1000000)
        return newArr;
    }, [items])

    return <div>

        <button onClick={()=>setCount(count+1)}>+</button>
        <Counter count={count}/>
        <Select value={value} onChange={setValue} items={newItems} />

    </div>
}