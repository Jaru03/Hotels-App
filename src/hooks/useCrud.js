import axios from "axios"
import { useState } from "react"
import getConfigToken from "../services/getConfigToken"

const useCrud = () => {
    
    const [response, setResponse] = useState()
    
    //getApi
    const getApi = (url) => {
        axios.get(url, getConfigToken())
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }

    //postApi
    const postApi = (url, data) => {
        axios.post(url, data, getConfigToken())
        .then(res => {
            console.log(res.data)
            setResponse(response ? [...response, res.data]: [res.data])
        })
        .catch(err => console.log(err))

    }
    //delteApi
    const deleteApi = (url, id) => {
        axios.delete(url, getConfigToken())
        .then(res => {
            setResponse(response.filter(e => e.id !== id))
        })
        .catch(err => console.log(err))
    }
    //updateApi
    const updateApi = (url, data, id) => {
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