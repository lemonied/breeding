<script setup lang="ts">
import NavHeader from './NavHeader.vue';
import CommonFooter from './CommonFooter.vue';
</script>
<template>
  <div class="root-layout">
    <NavHeader />
    <RouterView />
    <CommonFooter />
  </div>
</template>
<style scoped lang="scss">
.root-layout{
  min-width: 1200px;
}
</style>
