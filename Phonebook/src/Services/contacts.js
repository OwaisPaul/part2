import axios from 'axios'

const baseUrl = '/api/persons'


const getAll = ()=> {
    return axios.get(baseUrl)
}

const create = (newContact) => {
     return axios.post(baseUrl, newContact)
}

const update = (id, newContact) => {
    return axios.put(`${baseUrl}/${id}`, newContact)
}

const deleteContact = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {getAll, create, update, deleteContact}