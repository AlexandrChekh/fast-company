import React, { useState, useEffect } from "react";
import UserPage from "./userPage";
import UsersList from "./usersList";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import api from "../api";
const Users = () => {
    const params = useParams();
    const { usersId } = params;
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(usersId).then((data) => setUser(data));
    }, [usersId]);
    return <>{usersId ? <UserPage user={user} /> : <UsersList />}</>;
};

export default Users;
