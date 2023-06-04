<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavHeader from '@/components/layout/NavHeader.vue';
import CommonFooter from '@/components/layout/CommonFooter.vue';
</script>

<template>
  <NavHeader />
  <RouterView />
  <CommonFooter />
</template>

<style scoped>

</style>
