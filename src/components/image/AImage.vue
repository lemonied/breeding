<script lang="ts" setup>
export interface Props {
  src: string;
  aspect?: number;
}
const props = withDefaults(
  defineProps<Props>(),
  {
    src: '',
    aspect: 0.6,
  },
);
</script>
<template>
  <div class="a-image" :style="{ padding: `${props.aspect / 2 * 100}% 0` }">
    <div>
      <img :src="props.src" alt="image">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.a-image{
  height: 0;
  position: relative;
  & > div{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  img{
    width: 100%;
  }
}
</style>