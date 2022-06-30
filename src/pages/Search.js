import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Image from "../components/Image";
import Pagination from "../components/Pagination";
import SearchForm from "../components/SearchForm";


import { UNSPLASH_KEY } from "../secret";

const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin-inline: 1em;
    gap: 1em;
    @media (min-width: 400px) {
        grid-template-columns: repeat(2, 1fr)
    }
    @media (min-width: 700px) {
        grid-template-columns: repeat(3, 1fr)
    }
    margin-top: 1em;
`

const Search = () => {
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get('q');

    const location = useLocation();
    const invalidKeys = [...new URLSearchParams(location.search).keys()];

    const navigate = useNavigate()

    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(null);
    const [error, setError] = useState(null)
    //const [ssearchTerm, setSearchTerm] = useState('')
    const getImages = async()=> {
        const uri = `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_KEY}&query=${encodeURIComponent(searchTerm)}
        ${page > 1 ? `&page=${page}` : ""}`;
        try {
            const response = await fetch(uri);
            const data = await response.json();
            setImages(data.results)
            setMaxPage(data.total_pages)
        } catch(e){
            setError(e.message)
        }
    }
    useEffect(() => {
       if (searchTerm) {
        // site.com/search?q=puppies
        getImages(searchTerm);
       } else if (invalidKeys.length) {
        // site.com/search?nope=invalid
        navigate(`../error?keys=${encodeURIComponent(invalidKeys.join())}`)
       }
    }, [searchTerm])
    return (
        <main>
            <SearchForm />
            <GalleryContainer $ready={true}>
                {images.map((img, i) => <Image key={i} img={img}/>)}
            </GalleryContainer>
            {images.length ? <Pagination setPage={setPage} page={page} lastPage={maxPage}/> : null}
        </main>
    )
}

export default Search;