import axios from "axios"
import { useState } from "react"
import getConfigToken from "../services/getConfigToken"

const useCrud = (url) => {
    
    const [response, setResponse] = useState()
    
    //getApi
    const getApi = () => {
        axios.get(url, getConfigToken())
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }

    //postApi
    const postApi = (data) => {
        axios.post(url, data, getConfigToken())
        .then(res => {
            console.log(res.data)
            setResponse(response ? [...response, res.data]: [res.data])
        })
        .catch(err => console.log(err))

    }
    //delteApi
    const deleteApi = (id) => {
        axios.delete(url, id, getConfigToken())
        .then(res => {
            console.log(res.data)
            setResponse(response.filter(e => e.id !== id))
        })
        .catch(err => console.log(err))
    }
    //updateApi
    const updateApi = (data, id) => {
        axios.put(url, data, id, getConfigToken())
        .then(res => {
            console.log(res.data)
            setResponse(response.map(e => e.id === id ? res.data : e))
        })
        .catch(err => console.log(err))
    }

    return [response, getApi, postApi, deleteApi, updateApi]
}

export default useCrud