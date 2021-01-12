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

export const ExampleSetInterval = () => {
    console.log("tick")
    const [count, setCount] = useState(0)


    useEffect(() => {
        setInterval(() => {
            setCount(state => state +1)
        }, 1000)

    },[])

    return <div>

        count: {count}
    </div>
}

export const Clock = () => {
    console.log("tick")
    const [count, setCount] = useState(new Date())


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let date = new Date();
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()


        return <div>

            {hours}:{minutes}:{seconds}

        </div>

}