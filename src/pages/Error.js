import React from 'react'
import { useParams, useSearchParams } from "react-router-dom"

const Error = () => {
    const [searchParams] = useSearchParams();
    const invalidKeys = decodeURIComponent(searchParams.get('keys')).split(',')
    const plural = invalidKeys.length !== 1;
    const { invalid } = useParams();
    if (invalidKeys[0] !== 'null') {
        return <div>The search key{plural ? "s" : ""} {invalidKeys.join(', ')} {plural ? "are" : "is"} invalid. If typing manually, use the key 'q'.</div>
    }
  return (
    <div>Error, page '{decodeURIComponent(invalid)}' not found</div>
  )
}

export default Error