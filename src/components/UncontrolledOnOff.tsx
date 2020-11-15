import React, {useState} from 'react';

type PropsType = {
    defaultValue?: boolean
    onClick: (on: boolean) => void
}

export function UncontrolledOnOff(props: PropsType) {

    const [on, setOn] = useState(props.defaultValue ? props.defaultValue : false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    const onClicked = () => {
        setOn(true);
        props.onClick(true)
    }

    const offClicked = () => {
        setOn(false);
        props.onClick(false)
    }

    return <div>
        <div style={onStyle} onClick={onClicked}  >On</div>
        <div style={offStyle} onClick={offClicked} >Off</div>
        <div style={indicatorStyle}></div>
    </div>
}