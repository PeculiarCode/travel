<template>
    <div>
        <transition name="fade">
            <slot></slot>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {},
    computed: {},
    components: {}
};
</script>
<style lang="stylus" scoped>
.fade-enter,.fade-leave-to
    opacity 0
.fade-enter-active,.fade-leave-active
    transition opacity .7s
</style>
