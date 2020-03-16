<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcons from './components/Icons';
import HomeRecommend from './components/Recommend';
import HomeWeekend from './components/Weekend';
import { mapState } from 'vuex';
export default {
    data() {
        return {
            iconList: [],
            swiperList: [],
            recommendList: [],
            weekendList: [],
            lastCity: ''
        };
    },
    computed: {
        ...mapState(['city'])
    },
    created() {
        this.getHomeData();
    },
    mounted() {
        //生成全局变量存储当前城市
        this.lastCity = this.city;
    },
    //路由keep-alive缓存数据,每次进入activated激活
    activated() {
        if (this.lastCity !== this.city) {
            //keep-alive缓存机制已经点击过再次点击不发请求
            //每次点击传递不同返回不同结果,改变lastCity状态
            this.lastCity = this.city;
            this.getHomeData();
        }
    },
    methods: {
        getHomeData() {
            this.axios.get(`/index.json?city=${this.city}`).then(res => {
                const {
                    data: {
                        data: { iconList }
                    }
                } = res;
                const {
                    data: {
                        data: { swiperList }
                    }
                } = res;
                const {
                    data: {
                        data: { recommendList }
                    }
                } = res;
                const {
                    data: {
                        data: { weekendList }
                    }
                } = res;

                this.iconList = iconList;
                this.swiperList = swiperList;
                this.recommendList = recommendList;
                this.weekendList = weekendList;
            });
        }
    },
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    }
};
</script>
<style lang="stylus" scoped></style>
