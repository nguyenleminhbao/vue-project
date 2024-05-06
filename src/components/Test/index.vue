<template>
  <h1 class="text-3xl text-green-500">Test page</h1>
  <div class="w-[300px] flex justify-between items-center">
    <button class="bg-green-400 w-10" @click="decrement">-</button>
    <span>{{ count }} </span>
    <button class="bg-green-400 w-10" @click="increment">+</button>
  </div>

  <ul v-if="isFinished" class="flex flex-col ml-5" v-for="(post, index) in posts?.slice(0, count)">
    <li :key="index" class="flex flex-col">
      <span>{{ post.title }}</span>
      <span>{{ post.body }}</span>
      <span>--------------------------------------</span>
    </li>
  </ul>
  <span v-if="!isFinished">Loading</span>
  <button @click="$router.push('/')">Home</button>
</template>

<script setup lang="ts">
import { getPost } from '@/service/get'
import { ref, defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router'

defineProps({
  title: String,
  describe: String
})

const route = useRoute()
const router = useRouter()

const count = ref(0)
const increment = () => count.value++
const decrement = () => count.value--
const { data: posts, isFinished } = getPost()

console.log(route.name)
</script>
