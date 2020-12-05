import React, {useState} from 'react';

export default {
    title: 'useState demo'
}

function generateData () {
    //hard calculations...
    return 27392740;
}

export const Example = () => {

    const [count, setCount] = useState(generateData)


    return <div>
        {/*<button onClick={() => setCount(count+1)}>+</button>*/}
        <button onClick={() => setCount(state => state +1)}>+</button>
        {count}
    </div>
}