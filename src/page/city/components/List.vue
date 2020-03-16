<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">
                            {{ this.city }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div
                        class="button-wrapper"
                        v-for="item in hotCity"
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div
                class="area"
                v-for="(item, key) of cities"
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{ key }}</div>
                <div
                    class="item-list"
                    v-for="innerItem of item"
                    :key="innerItem.id"
                    @click="handleCityClick(innerItem.name)"
                >
                    <div class="item border-bottom">{{ innerItem.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll';
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'CityList',
    props: {
        cities: Object,
        hotCity: Array,
        letter: String
    },
    computed: {
        //公用数据读取用计算属性
        ...mapState(['city'])
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.wrapper);
    },
    methods: {
        handleCityClick(city) {
            // this.$store.commit('changeCitySync', city);
            this.changeCitySync(city);
            this.$router.push('/');
        },
        //处理mutation是一个方法
        ...mapMutations(['changeCitySync'])
    },
    watch: {
        //监听letter变化
        letter() {
            //对象属性可以用.方法和obj[prop]属性访问
            const element = this.$refs[this.letter][0];
            if (this.letter) {
                this.scroll.scrollToElement(element);
            }
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .title
    line-height: .54rem
    background: #eee
    padding-left: .2rem
    color: #666
    font-size: .26rem
  .button-list
    overflow: hidden
    padding: .1rem .6rem .1rem .1rem
    .button-wrapper
      float: left
      width: 33.33%
      .button
        margin: .1rem
        padding: .1rem 0
        text-align: center
        border: .02rem solid #ccc
        border-radius: .06rem
  .item-list
    .item
      line-height: .76rem
      padding-left: .2rem
</style>
