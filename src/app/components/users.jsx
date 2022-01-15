import React from "react";
import UserPage from "./userPage";
import UsersList from "./usersList";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const Users = () => {
    const params = useParams();
    const { usersId } = params;
    return <>{usersId ? <UserPage usersId={usersId} /> : <UsersList />}</>;
};

export default Users;
