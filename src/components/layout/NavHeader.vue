<script lang="ts">
import { useNavStore } from '@/stores/nav';
import { mapStores } from 'pinia';
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapStores(useNavStore),
  },
  methods: {
    async getNavs() {
      const res = await axios.get('/ngapi/column/allList?site=hndx');
      this.navsStore.set(res.data.data);
    },
  },
  mounted() {
    this.getNavs();
  },
};
</script>
<template>
  <header class="header">
    <div class="top">
      <span>欢迎访问育种平台数据分析展示系统</span>
    </div>
    <div class="central">
      <img src="./logo.png" alt="logo">
      <h1 class="title">育种平台数据分析展示系统</h1>
      <div class="search-box">
        <input type="text" placeholder="请输入关键字点击搜索">
        <button>搜索</button>
      </div>
    </div>
    <nav>
      <ul class="list">
        <li>
          <RouterLink to="/">网站首页</RouterLink>
        </li>
        <li v-for="(v, k) in navsStore.tops" :key="k">
          <RouterLink to="">{{ v.subjectName }}</RouterLink>
          <ul class="submenus">
            <li v-for="(item, key) in navsStore.getMenusByPid(v.id)" :key="key">
              <RouterLink to="">{{ item.subjectName }}</RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped lang="scss">
  .top{
    background: #2E8B57;
    color: #fff;
    padding: 10px 10%;
    font-size: 12px;
  }
  .central{
    background: #166B3B;
    padding: 20px 10%;
    display: flex;
    align-items: center;
  }
  .title{
    color: #fff;
    font-size: 28px;
    margin: 0 0 0 15px;
    line-height: 65px;
    padding: 0 0 0 20px;
    border-left: 2px solid #fff;
    flex: 1;
  }
  .search-box{
    input{
      outline: none;
      border: none;
      line-height: 30px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      padding: 0 10px;
    }
    button{
      line-height: 30px;
      background: #2E8B57;
      color: #fff;
      outline: none;
      border: none;
      padding: 0 15px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      &:hover{
        cursor: pointer;
        opacity: .9;
      }
      &:active{
        opacity: .8;
      }
    }
  }
  nav{
    padding: 0 10%;
    background: #1E7745;
  }
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
    color: #fff;
    padding: 0;
  }
  .list{
    display: flex;
    & > li{
      position: relative;
      a{
        display: inline-block;
        width: 100%;
        min-width: 120px;
        text-align: center;
        padding: 10px 20px;
        transition: all ease .3s;
        &:hover{
          background: #0F8C46;
        }
      }
      &:hover{
        .submenus{
          display: block;
        }
      }
    }
  }
  .submenus{
    background: #1E7745;
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 10;
  }
</style>