<template>
  <h1 class="text-3xl text-green-500">Learn page</h1>
  <span class="text-5xl">{{ count }}</span>
  <home-view @update-count="listenEmit" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HomeView from '@/views/HomeView.vue'

const count = ref(0)
const listenEmit = () => {
  count.value += 1
}
</script>
