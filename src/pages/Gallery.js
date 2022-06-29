import { buildQueries } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "../components/Image";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

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
    margin-bottom: calc(3em + 40px);
`

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(null);
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
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
        if (!images.length && searchTerm === '') {
            return;
        }
        getImages()
    }, [page, searchTerm])
    return (
        <main>
            <Search setSearchTerm={setSearchTerm} />
            <GalleryContainer $ready={true}>
                {images.map((img, i) => <Image key={i} img={img}/>)}
            </GalleryContainer>
            {images.length ? <Pagination setPage={setPage} page={page} lastPage={maxPage}/> : null}
        </main>
    )
}

export default Gallery;