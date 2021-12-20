import React from "react"
import User from './user'
const Users = ({people,...props}) => {
    return (
        <>   
            {people.length > 0 && (<table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                        <th/>

                    </tr>
                </thead>
                <tbody>
                    {people.map((elem) => (
                        <User key={elem._id} {...elem} onDelete={props.onDelete} onToggle={ props.onToggle}/>
                    ))}
                    
                </tbody>
            </table>)}
         

        </>
        )  
}
export default Users


