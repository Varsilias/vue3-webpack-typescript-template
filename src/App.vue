<template>
  <div>
      <h1>Uses of Durex</h1>
      <ul>
        <li>Cumming</li>
        <li>protect</li>
        <li>{{ count }}</li>
      </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // type inference enabled
  props: {
    name: String,
    msg: { type: String, required: true }
  },
  data() {
    return {
      count: 1
    }
  },
  mounted() {
    this.name // type: string | undefined
    this.msg // type: string
    this.count // type: number
  },

  created() {
    alert ('dogggyyyyy styleeee')
  }
})

</script>

<style scoped>
 h1 {
   color: purple;
 }
</style>

