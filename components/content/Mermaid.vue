<script setup lang="ts">
import mermaid from "mermaid"

let show = ref(false);

onMounted(async () => {
  show.value = true
  mermaid.initialize({ startOnLoad: true })
  await nextTick()
  mermaid.init();
})

</script>

<template>
  <div class="mermaid" v-if="show">
    <slot></slot>
  </div>
</template>
