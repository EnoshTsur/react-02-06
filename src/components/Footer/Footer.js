import React from 'react'
import classes from './Footer.module.css'
import Radium from 'radium';

function Footer() {

    // state name
    const [name, setName,] = React.useState('')

    return (
        <div className={classes.Footer}>
            <input key="name-input" type="text" onChange={e => setName(e.target.value)} 
                style={{
                    ':focus': {
                        border: '0.5rem solid red',
                    }
                }}
            />
            <h4 className={name.length > 3 ? classes.More : classes.Less}>
                Hello {name}
            </h4>
            <h3 key="radium" style={{
                color: 'purple',
                ':hover': {
                    color: 'blue',
                    cursor: 'pointer'
                }
            }}>
                With radium
            </h3>
            <h3 className={classes.Mijael}>Mijael</h3>
        </div>
    )
}

export default Radium(Footer)

// rfc
// react function component

// rcc
// react class component

