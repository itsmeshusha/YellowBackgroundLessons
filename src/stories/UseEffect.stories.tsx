import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}


export const Example = () => {
    console.log("Example render")
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("useEffect every render")
        document.title = count.toString()
    })

    useEffect(() => {
        console.log("useEffect only one render (ComponenteDidMount)")
        document.title = count.toString()
    },[])

    useEffect(() => {
        console.log("useEffect render when count change")
        document.title = count.toString()
    },[count])

    return <div>
        <button onClick={() => setCount(count+1)}>+</button>
        {count}
    </div>
}