import request from '@/utils/request'
import qs from 'qs'

export function doLogin (username, password) {
  let data = {
    username,
    password,
    'headers': {
      'Cookie': 'AUTHSESSION=7C618E066B2C7B2702E012583789DD94'
    }
  }
  data = qs.stringify(data)
  return request({
    url: '/api/quanxian',
    method: 'get',
    data
  })

}
