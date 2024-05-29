import axios from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001'
})

axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer ${localStorage && localStorage.getItem('accessToken')}`
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// export const axiosInstance = <T>(url: string, method: string = 'GET') => {
//   const { data, isFinished } = useAxios<T>(url, { method }, instance)
//   return { data, isFinished }
// }
