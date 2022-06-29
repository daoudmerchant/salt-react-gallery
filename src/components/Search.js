import React, { useState, useId } from "react";
import styled from "styled-components";
import { useList } from "../hooks";
import Datalist from "./Datalist";

const Form = styled.form`
    width: 100%;
    text-align: center;
`

const Input = styled.input`
    width: 60%;
    margin: auto;
    padding: .5em .8em;
`

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
        <Form className="form" onSubmit={handleSubmit}>
            <Input
                className="input"
                placeholder='Search for images'
                onInput={e => setValue(e.target.value)}
                value={value}
                type="text"
                list={datalistId}
            />
           {searches.length ? <Datalist id={datalistId} searches={searches}/> : null}
        </Form>
    )
}

export default Search;