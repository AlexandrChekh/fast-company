import React, { useState } from "react";
import api from './api'
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";



function App() {
    const [people, setPeople] = useState(api.users.fetchAll())

    const handleDelete = (elemId) => {
        setPeople(prevState => prevState.filter((elem) => elem._id !== elemId))
    }

    const handleToggleBookMark = (id) => {
       const updatedPeople=people.map((element) => {
            if (element._id === id) {
                if (element.bookmark === false) {
                    element.bookmark = true
                    return element
                } else if(element.bookmark === true) {
                    element.bookmark = false
                    return element
                }
                
           }
           
           return element
        })
     setPeople(updatedPeople)
    }
    return (
        <div>
            <SearchStatus length={people.length} />
                < Users  people={people} onDelete={handleDelete} onToggle={handleToggleBookMark} />
            </div>
       
    )
    
}

export default App