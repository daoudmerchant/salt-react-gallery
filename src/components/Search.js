import React, { useState } from "react";
import Datalist from "./Datalist";

const Search = ({ getImages }) => {
    const [value, setValue] = useState('cats');
    const handleSubmit = async e => {
        e.preventDefault();
        await getImages(value);
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input className="input" placeholder='Search for images' onInput={e => setValue(e.target.value)} value={value} type="text" list="prevsearches" />
            <Datalist />
        </form>
    )
}

export default Search;