<template>
    <div class="com-wrapper">
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list
            :cities="cities"
            :hotCity="hotCity"
            :letter="letter"
        ></city-list>
        <city-alphabet
            :cities="cities"
            @change="handleLetterChange"
        ></city-alphabet>
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
            cities: {},
            letter: ''
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

                // let rest = Object.values(this.cities);
                // rest.forEach(item => {
                //     console.log(item.forEach(inner=>{
                //         console.log(inner)
                //     }));
                // });
            });
        },
        handleLetterChange(letter) {
            this.letter = letter;
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
