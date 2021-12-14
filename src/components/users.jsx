import React, { useState } from "react";


import api from '../api'
import 'bootstrap/dist/css/bootstrap.css'

  

const Users = () => {
 
    const [quantity, setCounter] = useState(api.users.fetchAll().length)
      const[people, setPeople]=useState(api.users.fetchAll())
  
   
    const colorForQuantity = () => {
        let classes = 'badge m-2 '
        classes+=  quantity===0?'bg-warning':'bg-primary'
        return classes
    }
    const handleDelete = (userId) => {
        setCounter((prevState) => prevState - 1)   
           setPeople(prevState=>prevState.filter(elem=>elem!==userId))
       console.log(userId)      
    }


    const colorForTable = (color) => {
        let classes = `badge m-2 bg-${color}` 
        return classes
    } 
    const russianLanguage = () => {  
        return quantity === 2 || quantity === 3 || quantity === 4?'человека':'человек' 
    }
   
 
    const quantityOfPeople = () => {
        return quantity === 0 ? 'Никто с тобой не тусанет' : `${quantity} ${russianLanguage()} тусанет с тобой сегодня`
    }
    const table = () => {
        if(quantity!==0)
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
          <td scope="col">{elem.name}</td>
                                <th scope="col">
                                    <ul >{elem.qualities.map((quality) => (
                                        <li key={quality._id} className={colorForTable(quality.color)} >
                                            {quality.name}
                                        </li>
                                    )
                                    )}
                                    </ul>
                                </th>
                                <td scope="col">{[elem.profession].map((prof) => (prof.name))}</td>
                                <td scope="col">{elem.completedMeetings}</td>
                                <td scope="col">{elem.rate + ' /5'}</td>
                                <td scope="col"><button className='btn btn-danger m-2' onClick={()=>handleDelete(elem)}>delete</button></td>
                            </tr>
                            
    ))}        
        </tbody>
            </table>
    }

    return (
        <>   
        <h1 className={colorForQuantity()}>{quantityOfPeople()}</h1>    
     {table()}
        </>
        )
}
export default Users