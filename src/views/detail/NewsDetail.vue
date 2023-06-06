<script setup lang="ts">
import axios from 'axios';
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import moment from 'moment';
import SubjectNavs from '@/components/subjects/SubjectNavs.vue';
import BreadCrumb from '@/components/breadcrumb/BreadCrumb.vue';
import { message } from 'ant-design-vue';

const route = useRoute();
const id = computed(() => Number(route.params.id));
const detail = reactive({
  loading: false,
  data: null as (Record<string, any> | null),
});

const getDetail = async () => {
  detail.loading = true;
  try {
    const res = await axios(`/ngapi/article/${id.value}`);
    detail.data = res.data.data;
  } catch (e: any) {
    e?.message && message.error(e.message);
  }
  detail.loading = false;
};

watch(id, () => {
  getDetail();
});
onMounted(async () => {
  getDetail();
});

</script>
<template>
  <div class="news-detail">
    <img class="bg" src="./assets/bg.jpg">
    <div class="content">
      <SubjectNavs v-if="detail.data" :id="detail.data.articleSubject" class="sub-navs">
        <template #default="{nav}">
          <RouterLink :to="`/list/${nav.id}`">{{ nav.subjectName }}</RouterLink>
        </template>
      </SubjectNavs>
      <div class="con">
        <BreadCrumb v-if="detail.data" :id="detail.data.articleSubject" />
        <article>
          <h1>{{ detail.data?.title }}</h1>
          <p class="date">发布时间：{{ moment(detail.data?.publishTime).format('YYYY-MM-DD') }}</p>
          <div v-html="detail.data?.content"></div>
        </article>
      </div>
    </div>
    
  </div>
</template>
<style scoped lang="scss">
.news-detail{
  .bg{
    width: 100%;
    display: block;
  }
}
.sub-navs{
  margin-top: -40px;
  width: 250px;
  flex: 0 0 250px;
}
.content{
  display: flex;
  padding: 0 10%;
}
.con{
  flex: 1;
  padding: 20px 0 20px 20px;
}
article{
  padding: 10px 0 0 0;
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
    padding: 0 0 10px 0;
    margin: 0 0 10px 0;
    border-bottom: 1px solid #d9d9d9;
  }
}
</style>