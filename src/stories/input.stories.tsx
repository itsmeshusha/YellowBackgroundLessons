import React, {ChangeEvent, useRef, useState} from 'react';



export default {
    title: 'Uncontrolled Input stories',
    //component: Rating
}

export const uncontrolledInput = () => {
    return <input />
}

export const getValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    return <> <input ref={inputRef} /> <button onClick={() => {
        const el = inputRef.current as HTMLInputElement

        setValue(el.value)
    } }> save</button> actual value: {value}
    </>
}

export const uncontrolledInputWithTrackingValue = () => {
    const [value, setValue] = useState("")
    return <> <input onChange={(e) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }} />

    {value}
    </>
}

export const controlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHandle} />
}

export const controlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {

        setParentValue(e.currentTarget.checked)
    }
    return <input type={'checkbox'} checked={parentValue} onChange={onChangeHandle} />
}

export const controlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChangeHandle = (e: ChangeEvent<HTMLSelectElement>) => {

        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange = {onChangeHandle} >
        <option>none</option>
        <option value={'1'}>Moscow</option>
        <option value={'2'}>Minsk</option>
        <option value={'3'}>Kiev</option>

    </select>
}