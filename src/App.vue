<template>
    <div id="app">
        <keep-alive>
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
