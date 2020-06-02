import React from 'react';


export default function Header({ person, style, children, }) {

    const { name, age, city, } = person

        return (
            <div style={style}>
                <h1>{`Hello I'm ${name} and I'm ${age} and I'm from ${city}`}</h1>
                {children}
            </div>
        )

}




