import axios from 'axios'
import store from '../view/store'
import qs from 'qs'

var instance = axios.create({
  baseURL: 'http://211.67.177.56:8080',
  timeout: 10000,
});

const xhr = {
  get(url, data, config = {}){
    config.headers = {
      'token' : store.state.token
    }
    return new Promise((resolve, reject) => {
      instance.get(url, {params:data, ...config}).then(res =>{
          resolve(res.data)
        })
    })
  },

  fetch(url, data, config = {}, methods){
    config.headers = {
      'token' : store.state.token
    }
    return new Promise((resolve, reject) => {
      const formData = qs.stringify(data)
      instance[methods](url, formData, config).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },

  post(url, data, config){
    return this.fetch(url, data, config, 'post')
  }

}



export const $axios = xhr
