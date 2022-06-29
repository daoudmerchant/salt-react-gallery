import React from "react";

const Pagination = ({page, setPage, lastPage}) => (
    <div>
        <button disabled={page < 2} onClick={() => setPage(prev => prev - 1)}>Back</button>
        <button disabled={page === lastPage} onClick={() => setPage(prev => prev + 1)}>Next</button>
    </div>
)

export default Pagination;