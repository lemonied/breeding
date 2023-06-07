<script lang="ts" setup>
// @ts-ignore
import { Autoplay, Navigation } from 'swiper';
import { Swiper } from 'swiper/vue';
import type { Swiper as SwiperInstance } from 'swiper/types';
import { ref } from 'vue';

export interface Props {
  data: any[];
}

const props = withDefaults(
  defineProps<Props>(),
  {
    data: () => [] as any[],
  },
);

const controller = ref<SwiperInstance>();
const activeIndex = ref(0);

const slideChange = (swiper: SwiperInstance) => {
  activeIndex.value = swiper.realIndex || 0;
};

</script>
<template>
  <Swiper
    :modules="[Autoplay, Navigation]"
    :autoplay="{ delay: 3000 }"
    navigation
    @swiper="controller = $event"
    class="swiper"
    @slide-change="slideChange"
  >
    <slot :data="props.data"></slot>
    <div class="custom-navigation">
      <span class="text">
        <slot name="text" :current="props.data[activeIndex]"></slot>
      </span>
      <ul class="dots">
        <li v-for="(v, k) in data" :key="k" :class="{active: k === activeIndex}" @click="controller?.slideTo(k)"></li>
      </ul>
    </div>
  </Swiper>
</template> 
<style scoped lang="scss">
.swiper{
  position: relative;
  :deep(img){
    width: 100%;
    display: block;
  }
  .custom-navigation{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.3);
    z-index: 10;
    color: #fff;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    .text{
      display: inline-block;
      width: 100%;
      flex: 1;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .dots{
      margin: 0;
      padding: 0;
      li{
        list-style: none;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #fff;
        &:not(:first-child){
          margin-left: 5px;
        }
        &:hover{
          cursor: pointer;
        }
        &.active{
          background: var(--swiper-theme-color);
        }
      }
    }
  }
}
</style>