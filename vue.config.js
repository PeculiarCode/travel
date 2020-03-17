const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    devServer: {
        proxy: {
            '/home': {
                target: 'http://localhost:8082', //代理接口
                changeOrigin: true,
                pathRewrite: {
                    '^/home': 'index.json' //代理的路径
                }
            },
            '/city': {
                target: 'http://localhost:8082',
                changeOrigin: true,
                pathRewrite: {
                    '^/city': 'city.json'
                }
            },
            '/detail': {
                target: 'http://localhost:8082',
                changeOrigin: true,
                pathRewrite: {
                    '^/detail': 'detail.json'
                }
            }
        }
    },

    chainWebpack(config) {
        config.resolve.alias
            .set('components', resolve('src/components'))
            .set('@', resolve('src'))
            .set('common', resolve('src/common'))
            .set('styles', resolve('src/assets/styles'));
    }
};
