import { get, post } from '@/utils/util'

const SERVER_URL = 'http://localhost:3000'

// 获取文章列表
export function getContentList (params) {
  return get(`${SERVER_URL}/article/list`, params)
}

// 获取单篇文章
export function getArticle (params) {
  return get(`${SERVER_URL}/article/content`, params)
}

// 用户登录
export function login (params) {
  return post(`${SERVER_URL}/users/login`, params)
}

// 注册
export function register (params) {
  return post(`${SERVER_URL}/users/register`, params)
}

// 获取分类列表
export function getCategory (params) {
  return get(`${SERVER_URL}/category`, params)
}

// 获取当前类别文章列表
export function getCategoryArticle (params) {
  return get(`${SERVER_URL}/category/article`, params)
}
