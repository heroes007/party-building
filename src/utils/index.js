import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://211.67.177.56:8080',
  timeout: 10000,
});

const xhr = {
  get(url, data, config){
    return new Promise((resolve, reject) => {
      instance.get(url, {params:data}, config).then(res =>{
          resolve(res.data)
        })
    })
  }
}

export const $axios = xhr
