<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import moment from 'moment';

const route = useRoute();

const detail = ref<Record<string, any>>();
onMounted(async () => {
  const res = await axios(`/ngapi/article/${route.params.id}`);
  detail.value = res.data.data;
});

</script>
<template>
  <div class="news-detail">
    <article>
      <h1>{{ detail?.title }}</h1>
      <p class="date">发布时间：{{ moment(detail?.publishTime).format('YYYY-MM-DD') }}</p>
      <div v-html="detail?.content"></div>
    </article>
  </div>
</template>
<style scoped lang="scss">
article{
  padding: 20px 0;
  h1{
    color: #585858;
    font-size: 24px;
    margin: 0;
    text-align: center;
  }
  .date{
    color: #999999;
    font-size: 12px;
    text-align: center;
  }
}
</style>