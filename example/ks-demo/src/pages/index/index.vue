<template>
  <view class="index">
    <text>{{ msg }}</text>
    <swiper
      indicator-color="#fff"
      indicator-active-color="#333"
      circular
      :indicator-dots="true"
      :autoplay="true"
      :interval="5000"
      :duration="500"
      easing-function="linear"
    >
      <swiper-item
        v-for="(item, index) in banners"
        :key="index"
      >
        <image :src="item.coverUrl" style="width:100%;height: 400rpx;"/>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.less'

export default {
  setup () {
    const msg = ref('Hello world')
    return {
      msg,
      banners: [
        {coverUrl: "https://img.rr.tv/img/cover/20210518/o_bc42a70a904f44faabed14eb4859a64c.png"},
        {coverUrl: "https://img.rr.tv/img/cover/20210518/o_15f55cdbe8724baf84a50cc1397f9bbf.jpg"},
        {coverUrl: "https://img.rr.tv/img/cover/20210518/o_6ed9112dcbe94b73b3936be1585b3ad0.jpg"},
        {coverUrl: "https://img.rr.tv/img/cover/20210518/o_a3389ae0e4244835b0f4ae661a05a38f.jpg"}
      ]
    }
  }
}
</script>
