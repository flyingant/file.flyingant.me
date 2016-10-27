import agent from 'superagent'
import { BASE_URL } from './constants';

module.exports = {

  upload: (data) => {
    return new Promise((resolve, reject) => {
      agent
        .post(BASE_URL + 'api/file')
        .send(data.payload.formData)
        .end((err, res) => {
          if (err || res.statusCode !== 200) return reject(res || err)
          resolve(res.body)
        })
    })
  },

  filter: (data) => {

  }

}