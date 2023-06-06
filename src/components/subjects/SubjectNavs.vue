<script setup lang="ts">
import { useNavStore } from '@/stores/nav';
import { computed } from 'vue';

export interface Props {
  id: number;
}
const props = defineProps<Props>();
const navStore = useNavStore();

const navTree = computed(() => navStore.getSmartBrothers(props.id));

</script>
<template>
  <div class="subject-navs">
    <div class="subject-title">
      <span>
        <slot v-if="navTree" :nav="navTree"></slot>
      </span>
    </div>
    <div class="subjects" v-if="navTree?.children?.length">
      <div class="subject-item" :class="{ active: v.id === props.id }" v-for="(v, k) in navTree?.children" :key="k">
        <slot :nav="v"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.subject-title{
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  background: #1E7745;
  padding: 15px;
  & > span{
    display: inline-block;
    width: 100%;
    border-left: 5px solid #fff;
    line-height: 24px;
    padding-left: 15px;
  }
}
.subjects{
  background: #EDEDED;
  color: #585858;
  padding: 10px 0 10px 15px;
}
.subject-item{
  position: relative;
  padding: 15px 20px;
  &.active{
    background: #fff;
  }
  &:before{
    content: '';
    display: block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #1E7745;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
  & > :deep(*){
    display: block;
  }
}
</style>