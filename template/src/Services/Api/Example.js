import { request, Method } from '../Axios'
import Endpoint from '../Endpoint'

export const fetchExample = () =>
  request(Endpoint().exampleEndpoint, Method.GET)
