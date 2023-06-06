<script lang="ts">
// @ts-ignore
import { Autoplay, Pagination, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import PagedSwiper from '@/components/swiper/PagedSwiper.vue';
import NSwiper from '@/components/swiper/NSwiper.vue';
import AImage from '@/components/image/AImage.vue';
import axios from 'axios';
import moment from 'moment';
import { useNavStore } from '@/stores/nav';
import { mapStores } from 'pinia';

export default {
  components: {
    Swiper,
    SwiperSlide,
    PagedSwiper,
    NSwiper,
    AImage,
  },
  computed: {
    ...mapStores(useNavStore),
  },
  data() {
    return {
      Autoplay,
      Pagination,
      Controller,
      moment,
      months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      kjyl: [] as any[],
      zzzy: [] as any[],
      zcyl: [] as any[],
      cgzs: [] as any[],
    };
  },
  methods: {
    async getkjyl() {
      const res = await axios('/ngapi/article/listBySubjectKey1/kjyl/1/12');
      this.kjyl = res.data.data.rows || [];
    },
    async getzzzy() {
      const res = await axios('/ngapi/article/listBySubjectKey1/zzzy/1/6');
      this.zzzy = res.data.data.rows || [];
    },
    async getzcyl() {
      const res = await axios('/ngapi/article/listBySubjectKey1/zcyl/1/12');
      this.zcyl = res.data.data.rows || [];
    },
    async getcgzs() {
      const res = await axios('/ngapi/article/listBySubjectKey1/cgzs/1/6');
      this.cgzs = res.data.data.rows || [];
    },
  },
  mounted() {
    this.getkjyl();
    this.getzzzy();
    this.getzcyl();
    this.getcgzs();
  },
};
</script>

<template>
  <main>
    <Swiper
      :modules="[Autoplay, Pagination]"
      :autoplay="{ delay: 3000 }"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide>
        <img src="./assets/slider.jpg" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/slider.jpg" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="./assets/slider.jpg" alt="">
      </SwiperSlide>
    </Swiper>
    <div class="section-1">
      <div>
        <PagedSwiper :data="[1, 2, 3]">
          <template #default="{ data }">
            <SwiperSlide v-for="(v, k) in data" :key="k">
              <AImage :aspect="0.65" src="./assets/tomato.jpg" />
            </SwiperSlide>
          </template>
          <template #text="{current}">{{ current }}</template>
        </PagedSwiper>
      </div>
      <div>
        <div class="card-tit">
          <div class="tit">成果展示</div>
          <div class="more">
            <RouterLink :to="`/list/${navsStore.getNavByKey('cgzs')?.id}`">查看更多></RouterLink>
          </div>
        </div>
        <div class="card-list">
          <div class="item" v-for="(v, k) in cgzs" :key="k">
            <RouterLink :to="`/detail/${v.id}`">{{ v.title }}</RouterLink>
          </div>
        </div>
      </div>
      <div>
        <div class="overview">
          <div class="tag">平台总览</div>
          <img src="./assets/farm.jpg" alt="">
          <p>
            关于征集国家社会科学基金教育学2023年度重大、重点课题选题的通知关于征集国家社会科学基金教育学2023年度重大、重点课题选题的通知关于征集国家社会科学
            <a href="" class="more-info">【更多】</a>
          </p>
        </div>
      </div>
    </div>
    <div class="section-2">
      <h2 class="sub-tit">实时监测</h2>
      <NSwiper class="monitor">
        <template #default="{instance}">
          <Swiper
            :slides-per-view="6"
            @swiper="instance($event)"
          >
            <SwiperSlide>
              <div class="monitor-item">
                <div class="monitor-card">
                  <div class="icon">
                    <img src="./assets/icon-1.png" alt="">
                  </div>
                  <div class="text">
                    <div>雨量</div>
                    <div>
                      <span>3.1</span>
                      <span>mm</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="monitor-item">
                <div class="monitor-card">
                  <div class="icon">
                    <img src="./assets/icon-2.png" alt="">
                  </div>
                  <div class="text">
                    <div>雨量</div>
                    <div>
                      <span>3.1</span>
                      <span>mm</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="monitor-item">
                <div class="monitor-card">
                  <div class="icon">
                    <img src="./assets/icon-3.png" alt="">
                  </div>
                  <div class="text">
                    <div>雨量</div>
                    <div>
                      <span>3.1</span>
                      <span>mm</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="monitor-item">
                <div class="monitor-card">
                  <div class="icon">
                    <img src="./assets/icon-4.png" alt="">
                  </div>
                  <div class="text">
                    <div>雨量</div>
                    <div>
                      <span>3.1</span>
                      <span>mm</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="monitor-item">
                <div class="monitor-card">
                  <div class="icon">
                    <img src="./assets/icon-5.png" alt="">
                  </div>
                  <div class="text">
                    <div>雨量</div>
                    <div>
                      <span>3.1</span>
                      <span>mm</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="monitor-item">
                <div class="monitor-card">
                  <div class="icon">
                    <img src="./assets/icon-6.png" alt="">
                  </div>
                  <div class="text">
                    <div>雨量</div>
                    <div>
                      <span>3.1</span>
                      <span>mm</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="monitor-item">
                <div class="monitor-card">
                  <div class="icon">
                    <img src="./assets/icon-1.png" alt="">
                  </div>
                  <div class="text">
                    <div>雨量</div>
                    <div>
                      <span>3.1</span>
                      <span>mm</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </template>
        <template #prev>
          <img src="./assets/left.png" alt="">
        </template>
        <template #next>
          <img src="./assets/right.png" alt="">
        </template>
      </NSwiper>
    </div>
    <div class="section-3">
      <h2 class="sub-tit">科技引领</h2>
      <div class="wrapper">
        <a-row align="middle" :gutter="[15, 15]">
          <a-col v-for="(v, k) in kjyl" :key="k" :span="8">
            <RouterLink :to="`/detail/${v.id}`" class="calendar-card shadow">
              <div class="date">
                <div class="year">{{ moment(v.publishTime).format('YY') }}</div>
                <div class="month">{{ months[moment(v.publishTime).month()] }}</div>
              </div>
              <div class="content">{{ v.articleAbstract }}</div>
            </RouterLink>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="section-4">
      <div class="content">
        <h2 class="sub-tit">种质资源</h2>
        <div class="sliders">
          <NSwiper>
            <template #default="{instance}">
              <Swiper
                :slides-per-view="3"
                @swiper="instance($event)"
              >
                <SwiperSlide v-for="(v, k) in zzzy" :key="k">
                  <div class="item">
                    <RouterLink :to="`/detail/${v.id}`" class="item-wrapper">
                      <AImage :src="v.imgPath" />
                      <div class="desc">
                        <div>{{ v.articleAbstract }}</div>
                      </div>
                      <div class="time">{{ moment(v.publishTime).format('YYYY-MM-DD') }}</div>
                    </RouterLink>
                  </div>
                </SwiperSlide>
              </Swiper>
            </template>
            <template #prev>
              <img src="./assets/left.png" alt="">
            </template>
            <template #next>
              <img src="./assets/right.png" alt="">
            </template>
          </NSwiper>
        </div>
      </div>
    </div>
    <div class="section-5">
      <h2 class="sub-tit">政策引领</h2>
      <div class="wrapper">
        <a-row align="middle" :gutter="[15, 15]">
          <a-col v-for="(v, k) in zcyl" :key="k" :span="8">
            <RouterLink :to="`/detail/${v.id}`" class="calendar-card">
              <div class="date">
                <div class="year">{{ moment(v.publishTime).format('YY') }}</div>
                <div class="month">{{ months[moment(v.publishTime).month()] }}</div>
              </div>
              <div class="content">{{ v.articleAbstract }}</div>
            </RouterLink>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="section-6">
      <h2 class="sub-tit">友情链接</h2>
      <div class="friends">
        <a-row align="middle" :gutter="[15, 15]">
          <a-col :span="4">
            <a href="">国家自然科学基金委员会</a>
          </a-col>
          <a-col :span="4">
            <a href="">国家自然科学基金委员会</a>
          </a-col>
          <a-col :span="4">
            <a href="">国家自然科学基金委员会</a>
          </a-col>
        </a-row>
      </div> 
    </div>
  </main>
</template>
<style scoped lang="scss">
  .section-1{
    display: flex;
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
    background: #fff;
    & > div{
      width: 33.3%;
      flex: 0 0 33.3%;
      padding: 10px;
    }
    .card-tit{
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      padding: 0 0 15px 0;
      border-bottom: 1px solid #DEDEDE;
    }
    .tit{
      color: #166B3B;
      font-size: 20px;
      font-weight: bold;
    }
    .more{
      font-size: 12px;
      color: #AAAAAA;
    }
  }
  .card-list{
    .item{
      position: relative;
      padding: 4px 10px;
      &:before{
        position: absolute;
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        content: '';
        display: block;
        height: 3px;
        width: 3px;
        border-radius: 50%;
        background: #166B3B;
      }
      a{
        display: block;
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        &:hover{
          color: var(--primary-color);
        }
      }
    }
  }
  .overview{
    background: rgb(246,246,246);
    position: relative;
    .tag{
      background: #166B3B;
      color: #fff;
      position: absolute;
      top: 0;
      right: 0;
      padding: 8px;
      border-radius: 3px;
    }
    img{
      width: 100%;
    }
    p{
      margin: 0;
      padding: 15px;
      font-size: 14px;
    }
    .more-info{
      color: #166B3B;
    }
  }
  .section-2{
    background-image: url(./assets/section-2.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 40px 0;
    .sub-tit{
      font-size: 24px;
      color: #fff;
      text-align: center;
      padding: 0 0 15px 0;
    }
  }
  .monitor{
    width: 90%;
    margin: 0 auto;
  }
  .monitor-item{
    padding: 0 15px;
  }
  .monitor-card{
    background: rgba(255,255,255,.2);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 8px;
    .icon{
      img{
        width: 38px;
      }
    }
    .text{
      color: #fff;
      padding: 0 0 0 10px;
      & > div:first-child{
        font-size: 18px;
      }
      & > div:nth-child(2){
        & > span{
          &:first-child{
            font-size: 16px;
          }
          &:nth-child(2){
            font-size: 14px;
          }
        }
      }
    }
  }
  .section-3{
    background: rgb(246,246,246);
    padding: 40px 0;
    .sub-tit{
      font-size: 24px;
      color: #000;
      text-align: center;
      padding: 0 0 15px 0;
    }
    .wrapper{
      padding: 0 10%;
    }
  }
  .calendar-card{
    padding: 15px;
    display: flex;
    align-items: center;
    transition: all ease .3s;
    &.shadow{
      border-radius: 8px;
      border: 1px solid #ebeef5;
      background-color: #fff;
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }
    .date{
      background: #53A675;
      padding: 8px 15px;
      color: #fff;
      border-radius: 5px;
      .year{
        font-size: 28px;
        line-height: 28px;
        font-weight: bold;
      }
      .month{
        font-size: 14px;
      }
    }
    .content{
      padding: 0 0 0 10px;
      line-height: 20px;
      font-size: 14px;
      height: 60px;
      overflow: hidden;
      color: #585858;
    }
  }
  .section-4{
    background-image: url(./assets/section-4.jpg);
    background-size: 100% auto;
    height: 0;
    padding: 15% 0;
    position: relative;
    .content{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 30px 0;
    }
    .sub-tit{
      font-size: 24px;
      color: #fff;
      text-align: center;
      padding: 0 0 15px 0;
    }
    .sliders{
      padding: 0 15%;
      .item{
        padding: 0 15px;
        .item-wrapper{
          display: block;
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          transition: all ease .3s;
          &:hover{
            opacity: .9;
          }
        }
        .desc{
          padding: 10px 10px 0 10px;
          & > div{
            font-size: 14px;
            line-height: 20px;
            height: 60px;
            overflow: hidden;
          }
        }
        .time{
          color: #888888;
          font-size: 12px;
          padding: 5px 10px 10px 10px;
        }
      }
    }
  }
  .section-5{
    background: #fff;
    padding: 40px 0;
    .sub-tit{
      font-size: 24px;
      color: #000;
      text-align: center;
      padding: 0 0 15px 0;
    }
    .wrapper{
      padding: 0 10%;
    }
  }
  .section-6{
    background-image: url(./assets/section-2.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 40px 0;
    .sub-tit{
      font-size: 24px;
      color: #fff;
      text-align: center;
      padding: 0 0 15px 0;
    }
    .friends{
      padding: 0 10%;
      a{
        display: block;
        background: #fff;
        padding: 15px;
        border-radius: 8px;
        text-align: center;
      }
    }
  }
</style>
