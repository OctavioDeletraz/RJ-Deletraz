import React, { useEffect, useState } from 'react'

export const useFetch = () => {

    const [data, setData] = useState()

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setData(data))
    }, [])
    return ({
        data
    })
}
