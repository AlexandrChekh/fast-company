import React, { useState } from "react";
import Pagination from "./pagination";
import User from "./user";
import paginate from "../utils/paginate";
import PropTypes from "prop-types";
const Users = ({ people, ...props }) => {
    const count = people.length;
    const pageSize = 4;
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const userCrop = paginate(currentPage, pageSize, people);
    return (
        <>
            {people.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((elem) => (
                            <User key={elem._id} {...elem} {...props} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
            />
        </>
    );
};
Users.propTypes = {
    people: PropTypes.array.isRequired
};
export default Users;
