import React, {useCallback, useMemo, useState} from 'react';
import {Counter} from "./ReactMemo.stories";

export default {
    title: 'useMemo'
}


export const Example1 = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <div>

        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </div>
}


export const MemoUsers = (props: { users: Array<string> }) => {
    console.log("Users")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

export const Users = React.memo(MemoUsers)

export const HelpsToReactMemo = () => {

    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Viktor", "Artem"])

    const newArray = useMemo(() => {

        const newArr = users.filter(u => u.toLowerCase().indexOf("a") > -1)
        return newArr
    }, [users])

    return <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <Counter count={count}/>

        <Users users={newArray} />
    </div>
}



export const LikeUseCallback = () => {
    console.log('Like useCallback')
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const newArray = useMemo( () =>{
        const newArray = books.filter(book => book.toLowerCase().indexOf('a') > -1)
    return newArray
}, [books])

    const addBook = useCallback(() => {
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])



    return <div>
        <button onClick={() => setCount(count + 1)}>+</button>

        {count}
        <Books books={newArray} addBook={addBook} />
    </div>
}

const MemoBooks = (props: { books: Array<string>; addBook: ()=> void }) => {
    console.log("Books")
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {props.books.map((b, i) => <div key={i}>{b}</div>)}
    </div>
}

const Books = React.memo(MemoBooks)