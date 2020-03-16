<template>
    <ul class="alphabet-list">
        <li
            class="item"
            v-for="item of handleAlphabet"
            :key="item"
            :ref="item"
            @click="handleLetterClick"
            @touchstart="handleTouchStart"
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
            touchStatus: false
        };
    },
    props: {
        cities: Object
    },
    // watch: {
    //     cities() {
    //         console.log(this.cities, 'watch');
    //     }
    // },
    updated() {
        // let res = Object.keys(this.cities);
        // console.log(res);
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
                const startY = this.$refs['A'][0].offsetTop;
                const touchY = e.touches[0].clientY - 79;
                const index = Math.floor((touchY - startY) / 20); //20表示字母的高度
                if (index >= 0 && index < this.handleAlphabet.length) {
                    this.$emit('change', this.handleAlphabet[index]);
                }
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
