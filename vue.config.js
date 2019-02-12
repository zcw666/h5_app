const path = require('path')
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './', //
    outputDir: 'dist', //build后生成的构建文件夹名
    assetsDir: 'static', //相对于构建目录，存放静态文件的目录
    indexPath: 'index.html', //build后的HTML文件名
    lintOnSave: false, //是否启用ESLint
    productionSourceMap: false, //是否生成map（映射）文件
    // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src'))
        config.resolve.alias.set('@assets', resolve('src/assets'))
        config.resolve.alias.set('@components', resolve('src/components'))
        config.resolve.alias.set('@views', resolve('src/views'))
        config.resolve.alias.set('@vuex', resolve('src/vuex'))
        // ######常用插件的CDN缓存配置######111111
        // var externals = {
        //     vue: 'Vue',
        //     axios: 'axios',
        //     'vue-router': 'VueRouter',
        //     vuex: 'Vuex'
        // }
        // config.externals(externals)
        // const cdn = {
        //     js: [
        //         // vue
        //         '//cdn.staticfile.org/vue/2.5.22/vue.min.js',
        //         // vue-router
        //         '//cdn.staticfile.org/vue-router/3.0.2/vue-router.min.js',
        //         // vuex
        //         '//cdn.staticfile.org/vuex/3.1.0/vuex.min.js',
        //         // axios
        //         '//cdn.staticfile.org/axios/0.19.0-beta.1/axios.min.js',
        //     ]
        // }
        // config.plugin('html')
        //     .tap(args => {
        //         args[0].cdn = cdn
        //         return args
        //     })
        // ######常用插件的CDN缓存配置######

    },
    // css的处理
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5, //代表代码中的1个rem单位
                        propList: ['*']
                    })
                ]
            }
        }
    },
    // 所有 webpack-dev-server 的选项都支持
    devServer: {
        port: 9999, // 端口号
        host: '0.0.0.0',
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        proxy: {
            '/user': {
                target: 'http://192.168.20.251:8080',
                changeOrigin: true,
                secure: false // 如果是https接口，需要配置这个参数
            },
        }, // 代理配置，可配置多个
    },
}