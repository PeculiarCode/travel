/* eslint-disable no-debugger */
<template>
    <div class="icon-wrapper">
        <swiper>
            <swiper-slide v-for="page in pages" :key="page.id">
                <div class="container" v-for="item in page" :key="item.id">
                    <img :src="item.imgUrl" alt="" />
                    <p>{{ item.desc }}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgIcon: require('@/assets/img/icon.png')
        };
    },
    props: {
        iconList: {
            type: Array
        }
    },
    created() {},
    mounted() {},
    methods: {},
    computed: {
        pages() {
            // eslint-disable-next-line no-debugger
            // debugger;
            const pages = []; //slide的页数
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 8); //取值为0或1
                if (!pages[page]) {
                    pages[page] = [];
                }
                pages[page].push(item);
            });
            // console.log(pages);
            return pages;
        }
    },
    components: {}
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
.icon-wrapper>>>.swiper-slide
    display flex
    flex-wrap wrap
    margin-top .2rem
    .container
        width 25%
        text-align center
        img
            width: 1.5rem
            height: 1.5rem
        p
            color red
            padding .12rem 0
            ellipsis()
            color: $darkTextColor
</style>
