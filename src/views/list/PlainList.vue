<script setup lang="ts">
import moment from 'moment';

export interface Props {
  data: Record<string, any>[];
}
const props = defineProps<Props>();
</script>
<template>
<div class="list">
  <div class="item" v-for="(v, k) in props.data" :key="k">
    <RouterLink :to="`/detail/${v.id}`">{{ v.title }}</RouterLink>
  </div>
</div>
</template>
<style scoped lang="scss">
.list{
  padding: 20px 0;
}
.item{
  &:not(:last-child){
    margin: 0 0 15px 0;
    padding: 0 0 15px 0;
    border-bottom: 1px solid #d9d9d9;
  }
  a{
    display: block;
    position: relative;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 0 0 0 15px;
    &:before{
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #1E7745;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>