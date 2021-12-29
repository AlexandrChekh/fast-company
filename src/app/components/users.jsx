import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import Paginate from "../utils/paginate";
import PropTypes from "prop-types";
import api from "../api";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import UsersTable from "./usersTable";
import _ from "lodash";

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const pageSize = 6;
    const [people, setPeople] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setPeople(data));
    }, []);
    const handleDelete = (elemId) => {
        setPeople((prevState) =>
            prevState.filter((elem) => elem._id !== elemId)
        );
    };
    const handleToggleBookMark = (id) => {
        setPeople((people) =>
            people.map((user) =>
                user._id === id ? { ...user, bookmark: !user.bookmark } : user
            )
        );
    };
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleProfessionsSelect = (item) => {
        setSelectedProf(item);
    };
    const clearFilter = () => {
        setSelectedProf();
    };
    const handleSort = (item) => {
        setSortBy(item);
    };
    if (people) {
        const filteredUsers = selectedProf
            ? people.filter((user) => user.profession._id === selectedProf._id)
            : people;
        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );
        const userCrop = Paginate(currentPage, pageSize, sortedUsers);
        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionsSelect}
                            valueProperty="_id"
                            contentProperty="name"
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />

                    {count > 0 && (
                        <UsersTable
                            users={userCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
                            onToggle={handleToggleBookMark}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            onPageChange={handlePageChange}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return "Loading...";
};
Users.propTypes = {
    people: PropTypes.array.isRequired
};
export default Users;
