import React, { useState } from "react";


import api from '../api'
import 'bootstrap/dist/css/bootstrap.css'

  

const Users = () => {
      const[people, setPeople]=useState(api.users.fetchAll()) 
    const colorForQuantity = (number) => {
        let classes = 'badge m-2 '
        classes+=  number===0?'bg-warning':'bg-primary'
        return classes
    }

    const handleDelete = (elemId) => {
        setPeople(prevState => prevState.filter((elem) => elem._id !== elemId ))  
    }


    const colorForTable = (color) => {
        let classes = `badge m-2 bg-${color}` 
        return classes
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
    
   
 
    const quantityOfPeople = (number) => {
        return number === 0 ? 'Никто с тобой не тусанет' : `${number} ${lastElement(people.length)} тусанет с тобой сегодня`
    }
    const table = (number) => {
        if(number!==0)
        return  <table className="table">
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
                            
                                        <li key={quality._id} className={colorForTable(quality.color)} >
                                            {quality.name}
                                        </li>
                                    )
                                    )}
                                    </ul>
                                </th>
                        <td>{[elem.profession].map((prof) => ( prof.name ))}</td>
                                <td>{elem.completedMeetings}</td>
                                <td>{elem.rate + ' /5'}</td>
                                <td><button className='btn btn-danger m-2' onClick={()=>handleDelete(elem._id)}>delete</button></td>
                            </tr>
    ))}        
        </tbody>
            </table>
    }

    return (
        <>   
        <h1 className={colorForQuantity(people.length)}>{quantityOfPeople(people.length)}</h1>    
     {table(people.length)}
        </>
        )
}
export default Users