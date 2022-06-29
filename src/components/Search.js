import React, { useState, useId } from "react";
import { useList } from "../hooks";
import Datalist from "./Datalist";

const Search = ({ setSearchTerm }) => {
    const [value, setValue] = useState('');
    const [searches, setSearches] = useList()
    const datalistId = useId();
    const handleSubmit = e => {
        e.preventDefault();
        if (searches[0] === value || value === '') {
            return;
        }
        setSearchTerm(value)
        setSearches(value);
        setValue('')
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="input"
                placeholder='Search for images'
                onInput={e => setValue(e.target.value)}
                value={value}
                type="text"
                list={datalistId}
            />
           {searches.length ? <Datalist id={datalistId} searches={searches}/> : null}
        </form>
    )
}

export default Search;