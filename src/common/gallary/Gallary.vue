<template>
    <div class="gallery-container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item, index) in imgs" :key="index">
                    <img class="gallary-img" :src="item" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props: {
        imgs: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                },
                paginationType: 'fraction',
                observeParents: true,
                observer: true
            }
        };
    },
    methods: {
        handleGallaryClick() {
            this.$emit('close');
        }
    }
};
</script>

<style lang="stylus">
.gallery-container
    .swiper-pagination-bullet-active
        background #fff
</style>
<style lang="stylus" scoped>
.gallery-container >>> .swiper-container
  overflow: inherit
.gallery-container
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: #000
  .wrapper
    height: 0
    width: 100%
    padding-bottom: 100%
    .gallary-img
      width: 100%
    .swiper-pagination
        bottom: -1rem
</style>
