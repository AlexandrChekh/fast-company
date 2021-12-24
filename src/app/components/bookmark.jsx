import React from "react";
import PropTypes from "prop-types";
const BookMark = ({ bookmark }) => {
    return (
        <>
            {" "}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
            ></link>
            <i
                className={
                    bookmark === false
                        ? "bi bi-bookmark-dash"
                        : "bi bi-bookmark-check-fill"
                }
            ></i>
        </>
    );
};
BookMark.propTypes = {
    bookmark: PropTypes.bool.isRequired
};
export default BookMark;
