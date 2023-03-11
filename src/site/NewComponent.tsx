import React from 'react';
type NewComponentType = {
    students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}

type topCarsType = {
    manufacturer: string
    model: string
}
type TopCarsPropsType = {
    topCars: Array<topCarsType>
}

export const topCars = [
    { manufacturer: "BMW", model: 'm5cs' },
    { manufacturer: "Mercedes", model: 'e63s' },
    { manufacturer: "Audi", model: 'rs6' }
]

export const NewComponent2 = (props: TopCarsPropsType) => {
    return (
        <ul>
            {props.topCars.map((Array, index) => {
                return (
                    <li key={index}>
                        <span>--{Array.manufacturer}--</span>
                        <span>--{Array.model}--</span>
                    </li>
                )
            })}
        </ul>
    )
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((objectArr, index) => {
                return (
                    <li key={objectArr.id}>
                        <span> {objectArr.name}</span>
                        <span> {objectArr.age}</span>
                    </li>
                )
            })}
            <th> CAR </th>
        </ul>
    )
}


