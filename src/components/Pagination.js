import React from "react";

const Pagination = ({page, setPage}) => (
    <>
        <button disabled={page < 2} onClick={() => setPage(prev => prev - 1)}>Back</button>
        <button onClick={() => setPage(prev => prev + 1)}>Next</button>
    </>
)

export default Pagination;