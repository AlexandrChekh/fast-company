import React from 'react'
import Qualitie from './qualitie'
import BookMark from './bookmark'

const User = (elem) => {
    return(
    <>
 <tr >
                        
                            <td>{elem.name}</td>
                             <th scope="col">
                                <ul >{elem.qualities.map((quality) => (
                                    < Qualitie key={quality._id} {...quality}/>
                                )
                                )}
                                </ul>
                            </th>
                            <td>{elem.profession.name}</td> 
                            <td>{elem.completedMeetings}</td>
                <td>{elem.rate + ' /5'}</td>
                <td onClick={() => elem.onToggle(elem._id)}><BookMark {...elem}/></td>
                            <td><button className='btn btn-danger m-2' onClick={() => elem.onDelete(elem._id)}>delete</button></td>
                        </tr >
        </>    
    )
}           
 export   default User