<template>
    <div class="city-header">
        <router-link to="/">
            <img src="@/assets/img/arrow-left.png" class="header-back" />
        </router-link>
        <div class="title">城市选择</div>
    </div>
</template>

<script>
export default {
    name: 'CityHeader'
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.city-header
    height: $headerHeight
    color: #fff
    background: $bgColor
    font-size: .32rem
    display flex
    align-items center
    position relative
    .title
        margin 0 auto
    .header-back
        position absolute
        left 0
        top 0.1rem
</style>
