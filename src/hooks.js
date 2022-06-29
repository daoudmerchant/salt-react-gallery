import React, { useState } from "react";

export const useList = (initialList) => {
    const [list, setList] = useState(initialList || [])
    return [
        list,
        (str) => setList(prev => [str, ...prev.filter(x => x !== str)])
    ]
}