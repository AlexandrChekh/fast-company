import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
const UserPage = ({ user }) => {
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

                        <li>
                            {user.qualities.map((item) => (
                                <span
                                    className={"badge m-1 bg-" + item.color}
                                    key={item._id}
                                >
                                    {item.name}
                                </span>
                            ))}
                        </li>
                        <li>{`completedMeetings: ${user.completedMeetings}`}</li>
                        <li>{`Rate: ${user.rate}`}</li>
                    </ul>

                    <button onClick={() => handleSave()}>
                        Все пользователи
                    </button>
                </>
            ) : (
                <button className="btn btn-primary m-3" type="button" disabled>
                    <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Loading...</span>
                </button>
            )}
        </>
    );
};
UserPage.propTypes = {
    user: PropTypes.obj
};
export default UserPage;
