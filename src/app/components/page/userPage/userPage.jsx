import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../../common/loading";
import api from "../../../api";
import Qualities from "../../ui/qualities";
const UserPage = ({ usersId }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(usersId).then((data) => setUser(data));
    }, [usersId]);
    const history = useHistory();
    const handleSave = () => {
        history.push(`/users/${user._id}/${user.name}`);
    };
    return (
        <>
            {user ? (
                <>
                    <ul className="list-group">
                        <li>{user.name}</li>
                        <li>{`Профессия: ${user.profession.name}`} </li>
                        <div>{<Qualities qualities={user.qualities} />}</div>
                        <li>{`completedMeetings: ${user.completedMeetings}`}</li>
                        <li>{`Rate: ${user.rate}`}</li>
                    </ul>
                    <button onClick={() => handleSave()}>Изменить</button>
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
