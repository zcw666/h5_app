import Vue from 'vue'
import axios from 'axios';
import baseUrl from './BASE_URL';
import router from '@/router';
import vuex from '@/vuex';
import {
    Toast
} from 'vant';
Vue.use(Toast);

import Qs from 'qs';
axios.defaults.baseURL = baseUrl()

// 创建 axios 实例
let service = axios.create({
    // headers: {'Content-Type': 'application/json'},
    timeout: 60000
})

// 添加请求拦截器
service.interceptors.request.use(
    (config) => {
        if (config.method === 'post' || config.method === 'put') {
            // post、put 提交时，将对象转换为string, 变成CORS的简单请求
            config.data = JSON.stringify(config.data)
        }
        // 请求发送前进行处理
        return config
    },
    (error) => {
        // 请求错误处理
        return Promise.reject(error)
    }
)

// 添加响应拦截器
service.interceptors.response.use(response => {
    // debugger
    // ******************
    const responseCode = response.status
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (responseCode === 200) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(response)
    }
}, error => {
    let info = {}
    if (!error.response) {
        info = {
            code: 5000,
            msg: 'Network Error'
        }
    } else {
        // 此处整理错误信息格式
        info = {
            code: error.response.status,
            data: error.response.data,
            msg: error.response.statusText
        }
    }
    // 服务器返回不是 2 开头的情况，会进入这个回调
    // 可以根据后端返回的状态码进行不同的操作(这里的code状态定义要与跟后端同学确定)
    switch (info.code) {
        // 401：未登录
        case 401:
            // 跳转登录页
            router.replace({
                path: '/login',
                // query: {
                //     redirect: router.currentRoute.fullPath
                // }
            })
            break
            // 403: token过期
        case 403:
            // 弹出错误信息
            Toast(info.msg);
            // 清除token
            vuex.commit('clearToken', '')
            // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
            setTimeout(() => {
                router.replace({
                    path: '/login',
                    query: {
                        redirect: router.currentRoute.fullPath
                    }
                })
            }, 1000)
            break
            // 404请求不存在
        case 404:
            Toast(info.msg)
            break
            // 其他错误，直接抛出错误提示
        default:
            Toast(info.msg);
    }
})

export default service