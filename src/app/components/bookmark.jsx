import React from "react";
import PropTypes from "prop-types";
const BookMark = ({ bookmark, ...props }) => {
  return (
    <>
      {" "}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
      ></link>
      <button {...props}>
        <i
          className={
            bookmark === false
              ? "bi bi-bookmark-dash"
              : "bi bi-bookmark-check-fill"
          }
        ></i>
      </button>
    </>
  );
};
BookMark.propTypes = {
  bookmark: PropTypes.bool.isRequired,
};
export default BookMark;
