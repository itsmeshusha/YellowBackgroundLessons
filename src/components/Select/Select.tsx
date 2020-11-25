import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredItemElement, setHoveredItemElement] = useState(props.value)

    useEffect(() => {
        setHoveredItemElement(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredItemElement)

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.items.length; i++) {
            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                if (props.items[i].value === hoveredItemElement) {
                    const pretendentElement = e.key === "ArrowDown"
                    ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                       return;
                    }

                }
                if (!hoveredItem) {
                    props.onChange(props.items[0].value)
                }
            }

            if(e.key === "Enter" || e.key === "Escape") {
                setActive(false)
            }
        }
    }

    return <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
        <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
        {active &&
        <div className={s.items}>

            {props.items.map((i) =>
                <div className={s.item + " " + (hoveredItem === i ? s.selected : "")}
                     onMouseEnter={() => {
                         setHoveredItemElement(i.value)
                     }}
                     key={i.value}
                     onClick={() => onItemClick(i.value)}>
                    {i.title}
                </div>)}
        </div>
        }
    </div>
}