import type { IResponse } from '@/interfaces/response.interface'
import { axiosInstance } from '../axios-instance'

export const createIngress = async (ingressType: number) => {
  try {
    const { data } = await axiosInstance.post('/livestream/create-ingress', {
      ingressType
    })
    return data
  } catch (err) {
    throw err
  }
}

export const createViewerToken = async (hostIdentity: string) => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>(
      '/livestream/create-viewer-token',
      {
        hostIdentity
      }
    )
    return data
  } catch (err) {
    throw err
  }
}

export const createViewerTokenV2 = async () => {
  try {
    const { data } = await axiosInstance.post<IResponse<string>>('/livestream/create-viewer-token')
    return data
  } catch (err) {
    throw err
  }
}
