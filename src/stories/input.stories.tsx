import React, {useRef, useState} from 'react';



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

export const controlledInput = () => <input value={'hello'} />

