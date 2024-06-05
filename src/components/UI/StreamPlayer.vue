<template>
  <div id="livestream"></div>
  <Button @click="live">Live</Button>
  <Button @click="stop">Stop</Button>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from 'vue'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { Button } from 'ant-design-vue'
import { useRoute } from 'vue-router'

function randomID(len: number) {
  let result = ''
  if (result) return result
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i
  len = len || 5
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return result
}

const route = useRoute()

watchEffect(() => {
  console.log(route.query.roomID)
})
const roomIdExist = route.query.roomID as string

const roomID = roomIdExist ?? randomID(5)
let role_str = 'Host'
const role =
  role_str === 'Host'
    ? ZegoUIKitPrebuilt.Host
    : role_str === 'Cohost'
      ? ZegoUIKitPrebuilt.Cohost
      : ZegoUIKitPrebuilt.Audience

let sharedLinks = []
if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
  sharedLinks.push({
    name: 'Join as co-host',
    url:
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname +
      '?roomID=' +
      roomID +
      '&role=Cohost'
  })
}
sharedLinks.push({
  name: 'Join as audience',
  url:
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    '?roomID=' +
    roomID +
    '&role=Audience'
})

const appID = 602375774
const serverSecret = '8e3c9d049fbb9e54c92647c160c68750'
const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
  appID,
  serverSecret,
  roomID,
  Date.now().toString(),
  'Minh Bao'
)

const zp = ref<ZegoUIKitPrebuilt>()

const live = () => {
  const zp = ZegoUIKitPrebuilt.create(kitToken)
  // start the call
  zp.joinRoom({
    container: document.getElementById('livestream'),
    scenario: {
      mode: ZegoUIKitPrebuilt.LiveStreaming,
      config: {
        role
      }
    },
    sharedLinks
  })
}

const stop = () => {
  zp.value?.destroy()
}
</script>
