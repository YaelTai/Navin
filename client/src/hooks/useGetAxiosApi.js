import useAxios from 'axios-hooks'
import { useEffect } from 'react'

export const useGetAxiosApi = (url) => {
    const [{ data, loading, error }, refetch] = useAxios(`http://localhost:3001/api/${url}`)
    useEffect(() => { console.log(error) }, [error])
    return { data, loading, error, refetch }
}