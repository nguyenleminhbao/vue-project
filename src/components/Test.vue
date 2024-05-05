<template>
  <div class="w-[300px] flex justify-between items-center">
    <button class="bg-green-400 w-10" @click="decrement">-</button>
    <span>{{ count }} </span>
    <button class="bg-green-400 w-10" @click="increment">+</button>
  </div>

  <ul v-if="isFinished" class="flex flex-col ml-5" v-for="(post, index) in posts">
    <li :key="index" class="flex flex-col">
      <span>{{ post?.title }}</span>
      <span>{{ post?.body }}</span>
      <span>--------------------------------------</span>
    </li>
  </ul>
  <span v-if="!isFinished">Loading</span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { getPost } from './service/get'

// Register the component
export default defineComponent({
  name: 'Test',
  props: {
    title: String,
    describe: String
  },

  setup(props, context) {
    const count = ref(0)
    const increment = () => count.value++
    const decrement = () => count.value--
    const { data: posts, isFinished } = getPost()

    return { count, increment, decrement, posts, isFinished }
  }
})
</script>
