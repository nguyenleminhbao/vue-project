<template></template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  title: String,
  describe: String
})

const route = useRoute()
const router = useRouter()

const count = ref(0)
const increment = () => count.value++
const decrement = () => count.value--

console.log(route.name)
</script>
