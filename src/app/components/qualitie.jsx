import React from 'react'
const Qualitie = (props) => {
    return(
       <li  className={`badge m-2 bg-${props.color}`} >
                                        {props.name}
        </li>
    )
}
export default Qualitie