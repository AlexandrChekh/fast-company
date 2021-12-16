import React, { useState } from "react";


import api from '../api'
import 'bootstrap/dist/css/bootstrap.css'

  

const Users = () => {
    const [people, setPeople] = useState(api.users.fetchAll()) 
    
    const handleDelete = (elemId) => {
        setPeople(prevState => prevState.filter((elem) => elem._id !== elemId ))  
    }
    
    const lastElement = (number) => {
        const newArray = String(number).split('')
        const lastElement = Number(newArray[newArray.length - 1])
        const someElement = [2, 3, 4].some((item) => item === lastElement)
        if (someElement && newArray.indexOf(String(lastElement)) === 0) {
            return 'человека'
        }
        if (someElement && Number(newArray[newArray.length - 2]) === 1) {
            return 'человек'
        }
        else {
            return 'человек'
        }
    }
    


    return (
        <>   
            <h1 className={'badge m-2 ' + (people.length === 0 ? 'bg-warning' : 'bg-primary')}>{people.length === 0
                ? 'Никто с тобой не тусанет'
                : `${people.length} ${lastElement(people.length)} тусанет с тобой сегодня`}</h1>  
            {people.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((elem) => (
                            <tr key={elem._id}>
                                <td>{elem.name}</td>
                                <th scope="col">
                                    <ul >{elem.qualities.map((quality) => (
                            
                                        <li key={quality._id} className={`badge m-2 bg-${quality.color}`} >
                                            {quality.name}
                                        </li>
                                    )
                                    )}
                                    </ul>
                                </th>
                                <td>{[elem.profession].map((prof) => (prof.name))}</td>
                                <td>{elem.completedMeetings}</td>
                                <td>{elem.rate + ' /5'}</td>
                                <td><button className='btn btn-danger m-2' onClick={() => handleDelete(elem._id)}>delete</button></td>
                            </tr>
                        ))}
                    
                    </tbody>
                </table>
            )}

        </>
        )
}
export default Users


