let defaultCity = '望江';
//兼容不同浏览器
try {
    if (localStorage.city) {
        defaultCity = localStorage.city;
    }
} catch (e) {
    alert('您当前版本浏览器不支持localstorage');
}
export default {
    city: defaultCity
};
