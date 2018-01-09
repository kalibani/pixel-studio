import axios from 'axios'

const http = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com'
})

export const getAllFilms = ({ commit }, payload) => {
  http.get('/films', payload)
  .then(({data}) => {
    commit('saveFilms', data)
  }).catch((err) => {
    console.log(err)
  })

}

export const getFilmById = ({ commit }, id) => {
  http.get('/films/'+ id)
  .then(({data}) => {
    commit('saveFilmById', data)
  })
  .catch((err) => {
    console.log(err);
  })
}
