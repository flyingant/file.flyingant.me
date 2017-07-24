import agent from 'superagent'
import { BASE_URL } from './constants';

module.exports = {

  upload: (data) => {
    return new Promise((resolve, reject) => {
      agent
        .post(BASE_URL + 'file')
        .send(data.payload.formData)
        .end((err, res) => {
          if (err || res.statusCode !== 200) return reject(res || err)
          resolve(res.body)
        })
    })
  },

  filter: (data) => {
    return new Promise((resolve, reject) => {
      agent
        .post(BASE_URL + 'file/filter')
        .send({
          queryString: data.payload.queryString,
          offset: data.payload.offset,
          max: data.payload.max
        })
        .end((err, res) => {
          if (err || res.statusCode !== 200) return reject(res || err)
          resolve(res.body)
        })
    })
  },

    createQRCode: (data) => {
        return new Promise((resolve, reject) => {
            agent
                .get(BASE_URL + 'qrcode/json' + '?withBase64=true&content=' + data.payload.link)
                .end((err, res) => {
                    if (err || res.statusCode !== 200) return reject(res || err)
                    resolve(res.body)
                })
        })
    }

}