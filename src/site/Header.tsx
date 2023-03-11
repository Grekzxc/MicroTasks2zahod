import React from 'react';


export type HeaderType = {
    title: string
}

export const Header = (props: HeaderType) => {
    return (
        <div>{props.title}</div>
    )
}