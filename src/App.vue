<template>
  <component :is="layout">
    <div class="flex justify-between items-center">
      <RouterLink to="/" class="font-bold text-green-800">Home page</RouterLink>
      <RouterLink to="/learn" class="font-bold text-green-800">Learn page</RouterLink>
      <RouterLink to="/test" class="font-bold text-green-800">Test page</RouterLink>
    </div>
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { PUBLIC_LAYOUT } from './constants'

const route = useRoute()

const layout = computed(() => {
  return route.meta.layout || PUBLIC_LAYOUT
})
</script>
