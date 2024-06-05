<template>
  <Select v-model:value="ingressType" placeholder="Ingress type">
    <SelectOption :value="RTMP">RTMP</SelectOption>
    <SelectOption :value="WHIP">WHIP</SelectOption>
  </Select>

  <Button @click="onSubmit">Generate</Button>

  <h1>{{ ingressType }}</h1>
  <StreamPlayer />
</template>

<script setup lang="ts">
import { IngressInput } from 'livekit-server-sdk'
import { ref, watchEffect } from 'vue'
import { Select, SelectOption, Button } from 'ant-design-vue'
import { createIngress } from '@/service/livestream/post'
import StreamPlayer from '@/components/UI/StreamPlayer.vue'

const RTMP = String(IngressInput.RTMP_INPUT)
const WHIP = String(IngressInput.WHIP_INPUT)

type IngressType = typeof RTMP | typeof WHIP

const ingressType = ref<IngressType>(RTMP)

const onSubmit = async () => {
  await createIngress(parseInt(ingressType.value))
}
</script>
