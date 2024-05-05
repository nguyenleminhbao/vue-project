<template>
  <div class="w-full min-h-screen flex justify-center items-center">
    <h1 class="text-green-600 font-bold text-3xl" @click="onChange">Change value</h1>
    <Test :title="a.title" :describe="a.describe" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Test from './components/Test.vue'

export default defineComponent({
  name: 'App',
  props: {},
  components: {
    Test
  },
  setup() {
    const a = reactive({
      title: 'Huyen',
      describe: 'HUyen'
    })

    const onChange = () => {
      a.title = 'Bao'
      a.describe = 'Bao'
      console.log('change', a)
    }

    return { a, onChange }
  }
})
</script>
