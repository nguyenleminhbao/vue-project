import { axiosInstance } from '../axios-instance'

export const getUserStreamById = async (userId: string) => {
  try {
    const { data } = await axiosInstance.get(`/livestream/get-user-stream/${userId}`)
    return data
  } catch (err) {
    throw err
  }
}
