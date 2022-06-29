import React, { useState, useEffect } from "react";
import Image from "../components/Image";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

import { UNSPLASH_KEY } from "../secret";

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const getImages = async()=> {
        const uri = `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_KEY}&query=${encodeURIComponent(searchTerm)}
        ${page > 1 ? `&page=${page}` : ""}`;
        try {
            const response = await fetch(uri);
            const data = await response.json();
            console.log(data);
            const images = data.results;
            setImages(images)
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
            {images.map((img, i) => <Image key={i} img={img}/>)}
            {images.length ? <Pagination setPage={setPage} page={page}/> : null}
        </main>
    )
}

export default Gallery;