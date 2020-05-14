import request from '@/utils/request'
import qs from 'qs'

export function doLogin (token) {
  let data = {
    'access_token' :token
  }
  data = qs.stringify(data)
  return request({
    url: '/api/supplier/yuanSha?pageIndex=1&pageSize=20',
    method: 'get',
    data
  })
}

export function testGet() {
  return ({
    url: '/api/quanxian',
    method: 'get',
    params: {
    }
  })
}

export function testPost(){
  const data={}  
  return request({
      method: 'post',
      url:'api',
      datatype:'json',
      data
 })
}