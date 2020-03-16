import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    getters: {
        doubleCity(state, city) {
            console.log(state.city, city);
            return state.city + '' + state.city;
        }
    }
    // state: {
    //     // city: localStorage.cty || '望江',不考虑兼容写法
    //     city: defaultCity //兼容写法
    // },
    // actions: {
    //     //ctx表示上下文,state是触发action传递过来的参数
    //     changeCity(ctx, state) {
    //         console.log(ctx, state);
    //         ctx.commit('changeCitySync', state);
    //     }
    // },
    // mutations: {
    //     // mutation第一个参数存储的是公用数据,
    //     // 第二个参数是传递过来的(action或直接commit过来的)
    //     changeCitySync(state, city) {
    //         //完成对state的修改
    //         state.city = city;
    //         try {
    //             localStorage.city = city;
    //         } catch (e) {
    //             alert('您当前版本浏览器不支持localstorage');
    //         }
    //     }
    // }
});
