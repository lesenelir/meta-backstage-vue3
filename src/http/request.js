// axios 请求
import instance from './header'

const request = class {
  constructor (url, arg) {
    this.url = url
    this.arg = arg
  }

  // post 请求
  modepost () {
    return new Promise((resolve, reject) => {
      instance.post((this.url), this.arg).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  // get 请求
  modeget () {
    return new Promise((resolve, reject) => {
      instance.get((this.url)).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default request
