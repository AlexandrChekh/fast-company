import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "./loading";

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
                <span className={"badge m-1 bg-" + item.color} key={item._id}>
                  {item.name}
                </span>
              ))}
            </li>
            <li>{`completedMeetings: ${user.completedMeetings}`}</li>
            <li>{`Rate: ${user.rate}`}</li>
          </ul>

          <button onClick={() => handleSave()}>Все пользователи</button>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
UserPage.propTypes = {
  user: PropTypes.obj,
};
export default UserPage;
