<template>
    <div class="com-wrapper">
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCity="hotCity"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header';
import CitySearch from './components/Search';
import CityList from './components/List';
import CityAlphabet from './components/Alphabet';

export default {
    data() {
        return {
            hotCity: [],
            cities: {}
        };
    },
    created() {
        this.getCityData();
    },
    mounted() {},
    methods: {
        getCityData() {
            this.axios.get('/city.json').then(res => {
                this.hotCity = res.data.data.hotCities;
                this.cities = res.data.data.cities;
            });
        }
    },
    computed: {},
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    }
};
</script>
<style lang="stylus" scoped></style>
