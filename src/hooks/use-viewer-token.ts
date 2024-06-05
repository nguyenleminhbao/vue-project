import { createViewerToken, createViewerTokenV2 } from '@/service/livestream/post'
import { message } from 'ant-design-vue'
import { jwtDecode, type JwtPayload } from 'jwt-decode'
import { onMounted, ref, watch, watchEffect } from 'vue'

export const useViewerToken = (hostIdentity: string) => {
  const token = ref<string>('')
  const name = ref<string>('')
  const identity = ref<string>('')

  const updatedHostIdentity = ref<string>(hostIdentity)

  watch(updatedHostIdentity, () => {
    const createToken = async () => {
      try {
        const viewerToken = await createViewerToken(hostIdentity)
        token.value = viewerToken.message

        const decodedToken = jwtDecode(viewerToken.message) as JwtPayload & {
          name?: string
        }
        const nameDecoded = decodedToken?.name
        const identityDecoded = decodedToken?.jti

        if (identityDecoded) {
          identity.value = identityDecoded
        }

        if (nameDecoded) {
          name.value = nameDecoded
        }
      } catch (err) {
        message.error('Something went wrong')
      }
    }

    createToken()
  })

  return {
    token: token.value,
    name: name.value,
    identity: identity.value
  }
}

export const useViewerTokenV2 = async () => {
  const token = ref<string>('')
  const name = ref<string>('')
  const identity = ref<string>('')
  const viewerToken = await createViewerTokenV2()
  token.value = viewerToken.message

  const decodedToken = jwtDecode(viewerToken.message) as JwtPayload & {
    name?: string
  }
  const nameDecoded = decodedToken?.name
  const identityDecoded = decodedToken?.jti

  if (identityDecoded) {
    identity.value = identityDecoded
  }

  if (nameDecoded) {
    name.value = nameDecoded
  }
  return {
    token: token.value,
    name: name.value,
    identity: identity.value
  }
}
