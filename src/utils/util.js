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
      console.log(err)
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
