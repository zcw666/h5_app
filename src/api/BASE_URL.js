const BaseUrl = function () {
    // let baseUrl = ''
    // let hostName = window.location.hostname//不带端口号的服务器名称
    // let protocol = window.location.protocol//协议
    // baseUrl = protocol + '//' + hostName + '/business-app'

    const href = window.location.href
    let baseUrl = ''

    if (href.indexOf('h5.dailuobo.com') > 0) {
        baseUrl = 'https://api.dailuobo.com'// 线上生产
    } else if (href.indexOf('h5.caicaivip.com') > 0) {
        baseUrl = 'http://api.caicaivip.com'// 线上测试
    } else if (href.indexOf('192.168.1.21') > 0) {
        baseUrl = 'http://api.caicaivip.com'// 线上开发
    } else {
        baseUrl = 'http://api.caicaivip.com'// 本地开发
    }
    // switch (process.env.NODE_ENV) {
    //     case 'dev':
    //         baseUrl = '' // 测试环境url
    //         break
    //     case 'pre':
    //         baseUrl = '' // 预上线环境url
    //         break
    //     case 'production':
    //         baseUrl = '' // 生产环境url
    //         break
    // }
    return baseUrl
}

export default BaseUrl