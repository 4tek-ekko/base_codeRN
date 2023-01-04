import { Config } from '@/Config'
import { generateHeader } from '@/Utils'
import axios from 'axios'

const API = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 10000,
})

// Handle Cookie manualy in header of request
API.defaults.withCredentials = false

API.interceptors.request.use(
  config => {
    config.headers = { ...config.headers, ...generateHeader() }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

API.interceptors.response.use(
  response => {
    return response
  },
  ({ message, response: { data, status } }) => {
    return Promise.reject({ message, data, status })
  },
)

export const request = async (url, method, data, onError) => {
  try {
    const respose = await API[method](
      url,
      method === RequestMethod.GET ? { params: data } : data,
    )
    return respose.data
  } catch (e) {
    onError && onError(e)
    handleError(e)
  }
}

const handleError = error => {
  console.log(error)
}

export const RequestMethod = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
  OPTIONS: 'options',
  HEAD: 'head',
  PATCH: 'patch',
}

export default API
