import React from "react";
const Loading = () => {
    return (
        <button className="btn btn-primary m-3" type="button" disabled>
            <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
            ></span>
            <span className="sr-only">Loading...</span>
        </button>
    );
};

export default Loading;
