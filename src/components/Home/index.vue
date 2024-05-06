<template>
  <h1 class="text-3xl text-green-500">Home page</h1>
  <button class="text-4xl bg-green-400" @click="updateCount">Click me</button>
  <div class="w-full min-h-screen flex justify-center items-center">
    <h1 class="text-green-600 font-bold text-3xl" @click="onChange">Change value</h1>
    <Test :title="a.title" :describe="a.describe" />
    <span class="text-secondary-red">hello</span>
  </div>

  <RouterLink to="/learn" class="font-bold text-green-800">Learn page</RouterLink>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { defineEmits } from 'vue'

const a = reactive({
  title: 'Huyen',
  describe: 'HUyen'
})
const emit = defineEmits(['update-count'])

const onChange = () => {
  a.title = 'Bao'
  a.describe = 'Bao'
  console.log('change', a)
}

const updateCount = () => {
  console.log('emit update count')
  emit('update-count')
  console.log(emit)
}
</script>
