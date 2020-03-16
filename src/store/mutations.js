export default {
    changeCitySync(state, city) {
        //完成对state的修改
        state.city = city;
        try {
            localStorage.city = city;
        } catch (e) {
            alert('您当前版本浏览器不支持localstorage');
        }
    }
};
