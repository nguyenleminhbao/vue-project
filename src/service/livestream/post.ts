import { axiosInstance } from '../axios-instance'

export const createIngress = async (a: number) => {
  try {
    const { data } = await axiosInstance.post('/livestream/create-ingress', {
      ingressType: a
    })
    return data
  } catch (err) {
    throw err
  }
}
