import React, { useState, useEffect } from "react";
import Pagination from "../../common/pagination";
import PropTypes from "prop-types";
import GroupList from "../../common/groupList";
import SearchStatus from "../../ui/searchStatus";
import UsersTable from "../../ui/usersTable";
import api from "../../../api";
import Paginate from "../../../utils/paginate";
import _ from "lodash";
import Loading from "../../common/loading";
const UsersListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
    const pageSize = 6;
    const [searchItems, setSearchItems] = useState("");
    const [people, setPeople] = useState();
    const [people2, setPeople2] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setPeople(data));
        api.users.fetchAll().then((data) => setPeople2(data));
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
    const clearFilter = () => {
        setSelectedProf();
    };
    const hahdleChange = ({ target }) => {
        setSearchItems(target.value);
        const reg = new RegExp(target.value, "i");
        const regResult = people2.map((elem) => elem.name.match(reg));
        const filteredArr = regResult.filter((item) => item !== null);
        const arrayOfName = filteredArr.map((item, i) => filteredArr[i].input);
        setPeople(people2.filter((item) => arrayOfName.includes(item.name)));
        clearFilter();
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
        if (searchItems !== "") setSearchItems("");
        setSelectedProf(item);
        setPeople(people2);
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
            <>
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
                        <input
                            type="search"
                            placeholder="Search..."
                            onChange={hahdleChange}
                            value={searchItems}
                        ></input>
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
                )
            </>
        );
    }
    return <Loading />;
};
UsersListPage.propTypes = {
    people: PropTypes.array
};
export default UsersListPage;
