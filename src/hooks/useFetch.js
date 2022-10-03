import React, { useEffect, useState } from 'react'

export const useFetch = (url, dependency = []) => {

    const [data, setData] = useState()

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setData(data))
    }, dependency)
    return ({
        data
    })
}
