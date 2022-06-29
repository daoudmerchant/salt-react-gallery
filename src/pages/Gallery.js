import React, { useState } from "react";
import Image from "../components/Image";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

import { UNSPLASH_KEY } from "../secret";

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1)
    const [error, setError] = useState(null)
    const getImages = async(searchTerm)=> {
        const uri = `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_KEY}&query=${encodeURIComponent(searchTerm)}
        ${page > 1 ? `&page=${page}` : ""}`;
        try{
            const response = await fetch(uri);
            const data = await response.json();
            const images = data.results;
            setImages(images)
        } catch(e){
            setError(e.message)
        }
    }
    return (
        <main>
            <Search getImages={getImages} />
            {images.map((img, i) => <Image key={i} img={img}/>)}
            <Pagination />
        </main>
    )
}

export default Gallery;