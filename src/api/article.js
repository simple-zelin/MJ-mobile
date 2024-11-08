// 存放和面经相关的请求
import request from '@/utils/request'

// 分页获取面经列表的请求
export function articleListAPI (x) {
  return request({
    url: '/h5/interview/query',
    params: x
  })
}

// 获取单个面经详情
export function detailAPI (id) {
  return request({
    url: '/h5/interview/show',
    params: {
      id: id
    }
  })
}

// 点赞、收藏、取消点赞、取消收藏
export function collectAndLikeAPI (data) {
  return request.post('/h5/interview/opt', data)
}

// 获取收藏的题目；获取点赞的题目
export function collectLikeListAPI (params) {
  return request({
    url: '/h5/interview/opt/list',
    params: params
  })
}
