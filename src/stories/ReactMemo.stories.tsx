import React, {useState} from 'react';

export default {
    title: 'React memo demo'
}

export const Counter = React.memo((props: {count: number}) => {
    console.log("Counter rendering")
    return <div>
        {props.count}
    </div>

})

export const MemoUsers = (props: {users: Array<string>}) => {
    console.log("Users")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

export const Users = React.memo(MemoUsers)

export const Example = () => {

    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Viktor", "Artem"])

    return <div>
        <button onClick={() => setCount(count+1)}>+</button>
    <Counter count={count}/>
    <Users users={users} />
    </div>
}