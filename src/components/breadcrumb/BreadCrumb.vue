<script setup lang="ts">
import { useNavStore } from '@/stores/nav';
import { computed } from 'vue';

export interface Props {
  id: number;
}
const props = defineProps<Props>();
const navStore = useNavStore();

const breads = computed(() => navStore.getParents(props.id));
</script>
<template>
  <div class="breadcrumb">
    <span>当前：</span>
    <RouterLink to="/">首页</RouterLink>
    <template v-for="(v, k) in breads" :key="k">
      <span class="separator">></span>
      <RouterLink :to="`/list/${v.id}`">{{ v.subjectName }}</RouterLink>
    </template>
  </div>
</template>
<style scoped lang="scss">
.breadcrumb{
  background: #E4E4E4;
  padding: 8px 15px;
  color: #585858;
}
.separator{
  margin: 0 3px;
}
</style>
