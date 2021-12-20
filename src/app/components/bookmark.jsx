import React from 'react'
const BookMark = (props) => {
    return (
            <> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"></link>
   <i className={props.bookmark === false ? "bi bi-bookmark-dash" : "bi bi-bookmark-check-fill"}></i>
        </>
            
    )
}
export default BookMark

