import React from "react";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import EditForm from "../components/ui/editForm";
const Users = () => {
    const params = useParams();
    const { usersId } = params;
    const { edit } = params;

    return (
        <>
            {usersId ? (
                <>{edit ? <EditForm usersId={usersId}/> : <UserPage usersId={usersId} />}</>
            ) : (
                <UsersListPage />
            )}
        </>
    );
};

export default Users;
