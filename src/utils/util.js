import axios from 'axios'

export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params }).then(res => {
      if (res.status === 200) {
        resolve(res)
      } else {
        reject(res)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      if (res.status === 200) {
        resolve(res)
      } else {
        reject(res)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

// 节流
export function throttle (fn, delay = 500) {
  let flag = true
  return () => {
    if (flag === false) {
      return false
    }
    flag = false
    setTimeout(function () {
      fn()
      flag = true
    }, 500)
  }
}
