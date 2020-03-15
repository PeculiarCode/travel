<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        };
    },
    props: {
        swiperList: Array,
        default: []
    },
    computed: {
        showSwiper() {
            return this.swiperList.length;
        }
    },
    components: {}
};
</script>
<style lang="stylus">
.wrapper
   .swiper-img
        width: 100%
</style>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 31.25%
        background: #eee
</style>
