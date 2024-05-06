<template>
  <h1 class="text-3xl text-green-500">Home page</h1>
  <div class="w-full min-h-screen flex justify-center items-center">
    <h1 class="text-green-600 font-bold text-3xl" @click="onChange">Change value</h1>
    <Test :title="a.title" :describe="a.describe" />
  </div>
  <RouterLink to="/learn" class="font-bold text-green-800">Learn page</RouterLink>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const a = reactive({
  title: 'Huyen',
  describe: 'HUyen'
})

const onChange = () => {
  a.title = 'Bao'
  a.describe = 'Bao'
  console.log('change', a)
}
</script>
