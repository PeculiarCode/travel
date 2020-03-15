<template>
    <div class="header">
        <div class="header-left"><img :src="imgLeft" /></div>
        <div class="header-input">输入城市/景点</div>
        <router-link to="/city">
            <div class="header-right">
                <span>城市</span>
                <img :src="imgRight" />
            </div>
        </router-link>
    </div>
</template>

<script>
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
    computed: {},
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
