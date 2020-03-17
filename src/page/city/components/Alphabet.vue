<template>
    <ul class="alphabet-list">
        <li
            class="item"
            v-for="item of handleAlphabet"
            :key="item"
            :ref="item"
            @click="handleLetterClick"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
            {{ item }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    data() {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        };
    },
    props: {
        cities: Object
    },
    //初始化的时候cities没有数据,渲染完才有数据
    //将startY转换成去全局变量,缓存起来
    updated() {
        this.startY = this.$refs['A'][0].offsetTop;
    },
    computed: {
        handleAlphabet() {
            return Object.keys(this.cities);
        }
    },
    methods: {
        handleLetterClick(e) {
            this.$emit('change', e.target.innerText);
        },
        handleTouchStart() {
            this.touchStatus = true;
        },
        handleTouchMove(e) {
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                //延迟20ms执行touchmove方法,如果在这期间有相关move操作,清除这个定时器
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY - 79;
                    const index = Math.floor((touchY - this.startY) / 20); //20表示字母的高度
                    if (index >= 0 && index < this.handleAlphabet.length) {
                        this.$emit('change', this.handleAlphabet[index]);
                    }
                }, 20);
            }
        },
        handleTouchEnd() {
            this.touchStatus = false;
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.alphabet-list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 1.58rem
  right: 0
  bottom: 0
  width: .4rem
  .item
    line-height: .4rem
    text-align: center
    color: $bgColor
</style>
