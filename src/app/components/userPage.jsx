import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "./loading";
import api from "../api";
import QualitiesList from "./qualitiesList";
const UserPage = ({ usersId }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(usersId).then((data) => setUser(data));
    }, [usersId]);
    const history = useHistory();
    const handleSave = () => {
        history.push("/users");
    };
    return (
        <>
            {user ? (
                <>
                    <ul className="list-group">
                        <li>{user.name}</li>
                        <li>{`Профессия: ${user.profession.name}`} </li>
                        <div>
                            {<QualitiesList qualities={user.qualities} />}
                        </div>
                        <li>{`completedMeetings: ${user.completedMeetings}`}</li>
                        <li>{`Rate: ${user.rate}`}</li>
                    </ul>

                    <button onClick={() => handleSave()}>
                        Все пользователи
                    </button>
                </>
            ) : (
                <Loading />
            )}
        </>
    );
};
UserPage.propTypes = {
    usersId: PropTypes.string.isRequired
};
export default UserPage;
