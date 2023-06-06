<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavHeader from '@/components/layout/NavHeader.vue';
import CommonFooter from '@/components/layout/CommonFooter.vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';

import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

</script>

<template>
  <a-config-provider :locale="zhCN">
    <NavHeader />
    <RouterView />
    <CommonFooter />
  </a-config-provider>
</template>
<style scoped>

</style>
