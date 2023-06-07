<script setup lang="ts">
import { useRoute } from 'vue-router';
import SubjectNavs from '@/components/subjects/SubjectNavs.vue';
import { reactive, computed, watchEffect, watch, onMounted } from 'vue';
import axios from 'axios';
import { message } from 'ant-design-vue';
import PlainList from './PlainList.vue';
import TimeList from './TimeList.vue';
import { useNavStore } from '@/stores/nav';
import BreadCrumb from '@/components/breadcrumb/BreadCrumb.vue';

const navStore = useNavStore();

const route = useRoute();
const key = computed(() => route.query.key);
const id = computed(() => Number(route.params.id));

const currentNav = computed(() => navStore.getCurrent(id.value));
const breads = computed(() => navStore.getParents(id.value));
const displayType = computed(() => {
  if (currentNav.value) {
    if (['kyry'].includes(currentNav.value.subjectNameKey)) {
      return 'plain';
    } else if (['zzzy'].some(v => breads.value.some(i => i.subjectNameKey === v))) {
      return 'image';
    }
  }
  return 'time';
});
const data = reactive({
  loading: false,
  list: [] as Record<string, any>[],
  total: 0,
  page: 1,
  size: 10,
});
const getListById = async () => {
  data.loading = true;
  try {
    const res = await axios.get(`/ngapi/article/${id.value}/${data.page}/${data.size}`);
    data.list = res.data.rows;
    data.total = res.data.records;
  } catch (e: any) {
    e?.message && message.error(e.message);
  }
  data.loading = false;
};

const getList = () => {
  
  if (key.value) {
    //
  } else {
    getListById();
  }
};

const onChange = (page: number, pageSize: number) => {
  data.page = page;
  data.size = pageSize;
  getList();
};

watch([id, key], () => {
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
  <div class="news-list">
    <img class="bg" src="../detail/assets/bg.jpg">
    <div class="content">
      <SubjectNavs :id="id" class="sub-navs">
        <template #default="{nav}">
          <RouterLink :to="`/list/${nav.id}`" replace>{{ nav.subjectName }}</RouterLink>
        </template>
      </SubjectNavs>
      <div class="list-wrapper">
        <BreadCrumb :id="id" />
        <a-spin :spinning="data.loading">
          <div class="list-con">
            <a-empty v-if="!data.loading && !data.list.length" :style="{ padding: '30px 0' }" />
            <PlainList v-if="displayType === 'plain'" :data="data.list" />
            <TimeList v-else :data="data.list" />
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
    </div>
  </div>
</template>
<style scoped lang="scss">
.news-list{
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
.list-wrapper{
  padding: 20px 0 0 20px;
  min-height: 350px;
  flex: 1;
}
.list-con{
  padding: 10px 0 0 0;
}
.page{
  padding: 0 0 15px 0;
}
</style>