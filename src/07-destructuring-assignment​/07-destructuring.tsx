import React, {useState} from 'react';

export type ManType = {
    name: string
    age: number
    lessons: { title: string, name?: string }[]
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: string[]
    car: {model: string}
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {

    // const { title, man, ...restProps } = props

    // const { title, man: {name} } = props

    // const { title } = props
    // const { name } = props.man

    const [state, setState] = useState('state')

    // const useState = (state) => {
    //     return [
    //         state,
    //         setState: function(){}
    //     ]
    // }


    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
            <div>
                {props.car.model}
            </div>
        </div>
    )
}