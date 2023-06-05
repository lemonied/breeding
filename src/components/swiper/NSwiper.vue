<script setup lang="ts">
// @ts-ignore
import type { Swiper as SwiperInstance } from 'swiper/types';
import { ref } from 'vue';
const swiper = ref<SwiperInstance>();
const getInstance = (instance: SwiperInstance) => {
  swiper.value = instance;
};
</script>
<template>
  <div class="n-swiper">
    <slot :instance="getInstance"></slot>
    <div class="left" @click="swiper?.slidePrev()">
      <slot name="prev"></slot>
    </div>
    <div class="right" @click="swiper?.slideNext()">
      <slot name="next"></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
.n-swiper{
  position: relative;
}
.left,.right{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  &:hover{
    cursor: pointer;
    opacity: .7;
  }
}
.left{
  right: 100%;
}
.right{
  left: 100%;
}
</style>
