<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons :iconList='iconList'></home-icons>
    </div>
</template>

<script>
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcons from './components/Icons';
export default {
    data() {
        return {
            iconList: []
        };
    },

    created() {
        this.getHomeData();
    },
    mounted() {},
    methods: {
        getHomeData() {
            this.axios.get('/index.json').then(res => {
                const {
                    data: {
                        data: { iconList }
                    }
                } = res;
                this.iconList = iconList;
            });
        }
    },
    computed: {},
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }
};
</script>
<style lang="stylus" scoped></style>
