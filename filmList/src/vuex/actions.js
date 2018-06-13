import axios from 'axios'

const http = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com'
})

export const getAllFilms = async (context, payload) => {
  try {
    ({data: context.state.films} = await http.get('/films'))
  } catch (e) {
    console.log(e)
  } finally {
    setTimeout(() => context.state.loading = false, 1000)
  }
}

export const getFilmById = ({ commit }, id) => {
  commit('setLoader', true)
  http.get('/films/'+ id)
  .then(({data}) => {
    commit('saveFilmById', data)
    setTimeout(() => commit('setLoader', false), 1000)
  })
  .catch((err) => {
    console.log(err);
  })
}
