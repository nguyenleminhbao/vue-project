import axios from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const axiosInstance = <T>(url: string, method: string = 'GET') => {
  const { data, isFinished } = useAxios<T>(url, { method }, instance)
  return { data, isFinished }
}
