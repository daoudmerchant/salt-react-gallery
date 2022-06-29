import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
    margin-bottom: calc(3em + 40px);
    padding-block: 1em;
`

const Button = styled.button`
    padding: 1em 2.5em;
    &:first-child {
        margin-right: 1em;
    }
`

const Pagination = ({page, setPage, lastPage}) => (
    <ButtonContainer>
        <Button disabled={page < 2} onClick={() => setPage(prev => prev - 1)}>Back</Button>
        <Button disabled={page === lastPage} onClick={() => setPage(prev => prev + 1)}>Next</Button>
    </ButtonContainer>
)

export default Pagination;