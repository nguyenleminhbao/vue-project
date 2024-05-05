import type { IPost } from '../interfaces/post.interface'
import { axiosInstance } from './axios-instance'

export const getPost = () => {
  try {
    const { data, isFinished } = axiosInstance<IPost[]>('/posts')
    return { data, isFinished }
  } catch (err) {
    throw err
  }
}
