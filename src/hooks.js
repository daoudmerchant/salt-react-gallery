import React, { useState } from "react";

export const useList = () => {
    const [list, setList] = useState([])
    return [
        list,
        (str) => setList(prev => [str, ...prev.filter(x => x !== str)])
    ]
}