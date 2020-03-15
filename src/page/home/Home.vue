<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList='weekendList'></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcons from './components/Icons';
import HomeRecommend from './components/Recommend';
import HomeWeekend from './components/Weekend';
export default {
    data() {
        return {
            iconList: [],
            swiperList: [],
            recommendList: [],
            weekendList:[],
        };
    },

    created() {
        this.getHomeData();
    },
    mounted() {},
    methods: {
        getHomeData() {
            this.axios.get('/index.json').then(res => {
                console.log(res);
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
                this.weekendList=weekendList
            });
        }
    },
    computed: {},
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
