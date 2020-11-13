import React from 'react';

type PropsType = {
    value: boolean
}

export function OnOff(props: PropsType) {
    return <div>
        <button>On</button>
        <button>Off</button>
    </div>
}