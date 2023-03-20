<script setup lang="ts">
let show = ref(false);

if (process.client) {
  const mermaid = await import("mermaid").then((m) => m.default || m);


  onMounted(async () => {
    show.value = true
    mermaid.initialize({ startOnLoad: true })
    await nextTick()
    mermaid.init();
  })
}
</script>

<template>
  <div class="mermaid" v-if="show">
    <slot></slot>
  </div>
</template>
