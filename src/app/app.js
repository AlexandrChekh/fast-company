import React, { useState } from "react";
import api from '../api'
import Users from "./components/users";
import 'bootstrap/dist/css/bootstrap.css'


function App() {
    const [people, setPeople] = useState(api.users.fetchAll()) 

    const handleDelete = (elemId) => {
        setPeople(prevState => prevState.filter((elem) => elem._id !== elemId ))  
    }
    return <Users />
    
}

export default App