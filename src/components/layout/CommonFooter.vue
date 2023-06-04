<template>
  <footer>
    <div class="top">
      <img src="./logo.png" alt="logo">
      <h1>育种平台数据分析展示系统</h1>
      <div class="address">
        <p>地址 : 河南省开封市河南大学金明校区</p>
        <p>邮箱 : lvqi@henu.edu.cn</p>
        <p>电话 : 86-0371-22656010</p>
      </div>
    </div>
    <div class="copyright">Copyright © 2021 河南大学农学院 版权所有</div>
  </footer>
</template>
<style scoped lang="scss">
footer{
  .top{
    background: #3C3C3C;
    padding: 30px 10%;
    display: flex;
    align-items: center;
    color: #fff;
    h1{
      flex: 1;
      padding: 0 20px;
      font-size: 24px;
      font-weight: normal;
    }
    .address{
      font-size: 14px;
      p{
        margin: 0;
        &:not(:first-child){
          padding: 8px 0 0 0;
        }
      }
    }
  }
  .copyright{
    background: #000000;
    color: #fff;
    text-align: center;
    font-size: 14px;
    padding: 5px 0;
  }
}
</style>