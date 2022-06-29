import React from "react";

const Datalist = ({ searches, id }) => {
    return (
        <datalist id={id}>
            {searches.map((search, i) => <option key={i} value={search} /> )}
        </datalist>
    )
}
    


export default Datalist