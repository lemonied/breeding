<script setup lang="ts">
import AImage from '@/components/image/AImage.vue';
import moment from 'moment';

export interface Props {
  data: Record<string, any>[];
}
const props = defineProps<Props>();
</script>
<template>
<div class="list">
  <div class="item" v-for="(v, k) in props.data" :key="k" :class="{ 'with-image': v.imgPath }">
    <div class="image" v-if="v.imgPath">
      <AImage :src="v.imgPath" />
    </div>
    <div class="con">
      <RouterLink :to="`/detail/${v.id}`">{{ v.title }}</RouterLink>
      <div class="date">{{ moment(v.publishTime).format('YYYY-MM-DD') }}</div>
    </div>
  </div>
</div>
</template>
<style scoped lang="scss">
.list{
  padding: 10px 0;
}
.item{
  display: flex;
  .image{
    width: 150px;
    border-radius: 5px;
    overflow: hidden;
  }
  &:not(:last-child){
    margin: 0 0 10px 0;
    padding: 0 0 10px 0;
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
    font-size: 16px;
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
  &.with-image{
    a:before{
      display: none;
    }
    .con{
      padding: 8px 0 0 0;
    }
  }
  .date{
    font-size: 12px;
    padding: 0 0 0 15px;
  }
}
</style>