<script lang="ts">
// @ts-ignore
import { Autoplay, Pagination, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Swiper as SwiperInstance } from 'swiper/types';
import PagedSwiper from '@/components/swiper/PagedSwiper.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    PagedSwiper,
  },
  data() {
    return {
      Autoplay,
      Pagination,
      Controller,
      monitor: null as (null | SwiperInstance),
    };
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
        <img src="./slider.jpg" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="./slider.jpg" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="./slider.jpg" alt="">
      </SwiperSlide>
    </Swiper>
    <div class="section-1">
      <div>
        <PagedSwiper :data="[1, 2, 3]">
          <template #default="{ data }">
            <SwiperSlide v-for="(v, k) in data" :key="k">
              <img src="./tomato.jpg" alt="">
            </SwiperSlide>
          </template>
          <template #text="{current}">{{ current }}</template>
        </PagedSwiper>
      </div>
      <div>
        <div class="card-tit">
          <div class="tit">成果展示</div>
          <div class="more">查看更多></div>
        </div>
        <div class="card-list">
          <div class="item">
            <a href="">21312sadasd21312sadasd21312sadasd21312sadasd21312sadasd21312sadasd21312sadasd21312sadasd</a>
          </div>
          <div class="item">
            <a href="">21312sadasd21312sadasd21312sadasd21312sadasd21312sadasd21312sadasd21312sadasd21312sadasd</a>
          </div>
          <div class="item">
            <a href="">21312sadasd21312sadasd21312sadasd21312sadasd21312sadasd21312sadasd21312sadasd21312sadasd</a>
          </div>
        </div>
      </div>
      <div>
        <div class="overview">
          <div class="tag">平台总览</div>
          <img src="./farm.jpg" alt="">
          <p>
            关于征集国家社会科学基金教育学2023年度重大、重点课题选题的通知关于征集国家社会科学基金教育学2023年度重大、重点课题选题的通知关于征集国家社会科学
            <a href="" class="more-info">【更多】</a>
          </p>
        </div>
      </div>
    </div>
    <div class="section-2">
      <h2>实时监测</h2>
      <div class="monitor">
        <Swiper
          :modules="[Controller]"
          :slides-per-view="6"
          @swiper="monitor = $event;"
        >
          <SwiperSlide>
            <div class="monitor-item">
              <div class="monitor-card">
                <div class="icon">
                  <img src="./icon-1.png" alt="">
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
                  <img src="./icon-2.png" alt="">
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
                  <img src="./icon-3.png" alt="">
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
                  <img src="./icon-4.png" alt="">
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
                  <img src="./icon-5.png" alt="">
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
                  <img src="./icon-6.png" alt="">
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
                  <img src="./icon-1.png" alt="">
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
        <div class="left" @click="monitor?.slidePrev()">
          <img src="./left.png" alt="">
        </div>
        <div class="right" @click="monitor?.slideNext()">
          <img src="./right.png" alt="">
        </div>
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
      padding: 5px 10px;
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
        display: inline-block;
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
    background-image: url(./section-2.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 40px 0;
    h2{
      font-size: 24px;
      color: #fff;
      text-align: center;
      padding: 0 0 15px 0;
    }
  }
  .monitor{
    width: 90%;
    margin: 0 auto;
    position: relative;
    .left,.right{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      &:hover{
        cursor: pointer;
        opacity: .7;
      }
    }
    .left{
      right: 100%;
    }
    .right{
      left: 100%;
    }
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
</style>
