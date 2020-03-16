<template>
    <div class="header">
        <div class="header-left"><img :src="imgLeft" /></div>
        <div class="header-input">输入城市/景点</div>
        <router-link to="/city">
            <div class="header-right">
                <span>{{ this.city }}</span>
                <img :src="imgRight" />
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
    data() {
        return {
            imgLeft: require('@/assets/img/arrow-left.png'),
            imgRight: require('@/assets/img/arrow-down.png')
        };
    },
    created() {},
    mounted() {},
    methods: {},
    computed: {
        //state数据获取用计算属性,mapGetters进行公用数据的重新计算
        ...mapState(['city']),
        ...mapGetters(['doubleCity'])
        //变量别名
        // ...mapState({
        //     handleName:'city'
        // })
    },
    components: {}
};
</script>
<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
.header
    display:flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    align-items center
    .header-left
        width: .64rem
    .header-input
        flex: 1
        height: .64rem
        line-height: .64rem
        margin-left: .2rem
        padding-left: .2rem
        background: #fff
        border-radius: .1rem
        color: #ccc
    .header-right
        min-width: 1.04rem
        padding-left : .2rem
        color: #fff
        img
            height .5rem
            width .5rem
            margin-left -.08rem
</style>
