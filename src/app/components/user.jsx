import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";
const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    bookmark,
    onDelete,
    onToggle
}) => {
    return (
        <>
            <tr>
                <td>{name}</td>
                <th scope="col">
                    <ul>
                        {qualities.map((quality) => (
                            <Qualitie key={quality._id} {...quality} />
                        ))}
                    </ul>
                </th>
                <td>{profession.name}</td>
                <td>{completedMeetings}</td>
                <td>{rate + " /5"}</td>
                <td onClick={() => onToggle(_id)}>
                    <BookMark bookmark={bookmark} />
                </td>
                <td>
                    <button
                        className="btn btn-danger m-2"
                        onClick={() => onDelete(_id)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    );
};
User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
};
export default User;
