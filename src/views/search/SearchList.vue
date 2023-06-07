<script setup lang="ts">
import { message } from 'ant-design-vue';
import axios from 'axios';
import moment from 'moment';
import { computed, onMounted, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const keywords = computed(() => String(route.query.keywords || ''));

const data = reactive({
  loading: false,
  page: 1,
  size: 10,
  total: 0,
  list: [] as Record<string, any>[],
});

const getList = async () => {
  data.loading = true;
  try {
    const res = await axios.post('/ngapi/article/searchArticle', {
      subjectIdent: '',
      titleOrContent: keywords.value,
      orderType: 0,
      page: data.page,
      pageSize: data.size,
    });
    data.total = res.data.data.records;
    data.list = (res.data.data.rows || []).map((v: any) => {
      return {
        ...v,
        title: v.title?.replace(new RegExp(keywords.value, 'g'), (match: string) => {
          return `<span class="red">${match}</span>`;
        }),
        articleAbstract: v.articleAbstract?.replace(new RegExp(keywords.value, 'g'), (match: string) => {
          return `<span class="red">${match}</span>`;
        }),
      };
    });
  } catch (e: any) {
    e?.message && message.error(e.message);
  }
  data.loading = false;
};

const onChange = async (page: number, size: number) => {
  data.page = page;
  data.size = size;
  await getList();
};

watch(keywords, () => {
  data.page = 1;
  data.size = 10;
  getList();
}, {
  flush: 'post',
});
onMounted(() => {
  getList();
});

</script>
<template>
  <div class="search-list">
    <img class="bg" src="../detail/assets/bg.jpg">
    <a-spin :spinning="data.loading">
      <div class="con">
        <a-empty v-if="!data.loading && !data.list.length" :style="{ padding: '30px 0' }" />
        <div class="list">
          <div class="item" v-for="(v, k) in data.list" :key="k">
            <div class="tit">
              <a :href="v.resourceContext" v-if="v.resourceType === '02'" target="_blank" v-html="v.title" />
              <RouterLink :to="`/detail/${v.id}`" v-else>
                <span v-html="v.title"></span>
              </RouterLink>
            </div>
            <div class="desc" v-html="v.articleAbstract"></div>
            <div class="date">{{ moment(v.publishTime).format('YYYY-MM-DD') }}</div>
          </div>
        </div>
        <div class="page">
          <a-pagination
            v-model:current="data.page"
            v-model:pageSize="data.size"
            show-quick-jumper
            showSizeChanger
            hideOnSinglePage
            :total="data.total"
            @change="onChange"
          />
        </div>
      </div>
    </a-spin>
  </div>
</template>
<style scoped lang="scss">
.search-list{
  .bg{
    width: 100%;
    display: block;
  }
  .page{
    padding: 15px 0 0 0;
  }
  .con{
    padding: 20px 15%;
  }
  .item{
    padding: 10px 0;
    &:not(:first-child){
      border-top: 1px solid #d9d9d9;
    }
    & > *:not(:first-child) {
      margin-top: 3px;
    }
  }
  .tit{
    font-size: 18px;
  }
  .desc{
    font-size: 14px;
    color: #333;
  }
  .date{
    font-size: 12px;
    color: #666;
  }
  :deep(.red){
    color: #ff4d4f;
  }
}
</style>