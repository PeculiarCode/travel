<template>
    <div id="app">
        <!-- name为Detail组件不缓存 -->
        <keep-alive exclude="Detail">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
//keep-alive将组建缓存
export default {
    name: 'App'
};
</script>

<style></style>
