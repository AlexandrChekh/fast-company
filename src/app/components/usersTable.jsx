import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import BookMark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";
const UsersTable = ({
    users,
    onSort,
    selectedSort,
    onToggle,
    onDelete
}) => {
    const columns = {
        name: { path: "name", name: "Имя" },

        qualities: {
            name: "Качестава",
            component: (user) => <QualitiesList qualities={user.qualities} />
        },
        professions: {
            path: "profession.name",
            name: "Профессия"
        },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <BookMark
                    bookmark={user.bookmark}
                    onClick={() => onToggle(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    className="btn btn-danger m-2"
                    onClick={() => onDelete(user._id)}
                >
                    delete
                </button>
            )
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        >
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: users }} />
        </Table>
    );
};
UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};
export default UsersTable;
