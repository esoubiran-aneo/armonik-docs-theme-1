<script setup lang="ts">
let show = ref(false);

const { $mermaid } = useNuxtApp()

onMounted(async () => {
  show.value = true
  // @ts-ignore
  $mermaid().initialize({ startOnLoad: true })
  await nextTick()
  // @ts-ignore
  $mermaid().init();
})

</script>

<template>
  <div class="mermaid" v-if="show">
    <slot></slot>
  </div>
</template>
