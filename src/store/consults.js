/* ============
 * Actions for the common module
 * ============
 *
 * The actions that are available on the
 * user module.
 */
import axios from 'axios'

export default {
  getDestinations ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('destinos/')
        .then(res => {
          if (res) {
            resolve(res)
          } else {
            reject(res)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  getPlans ({ commit }, codeSell) {
    return new Promise((resolve, reject) => {
      axios.get('planes/' + codeSell)
        .then(res => {
          if (res) {
            resolve(res)
          } else {
            reject(res)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  getClients ({ commit }, numberDocument) {
    return new Promise((resolve, reject) => {
      axios.get('clientes/' + numberDocument)
        .then(res => {
          if (res) {
            resolve(res)
          } else {
            reject(res)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  saveSession ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('sesiones/save', item)
        .then(res => {
          if (res) {
            commit('setCodeRemarketing', res.data.codigoRemarketing)
            resolve(res)
          } else {
            reject(res)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
