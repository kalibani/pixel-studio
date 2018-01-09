export const saveFilms = (state, payload) => {
  state.films = payload
}

export const saveFilmById = (state, payload) => {
  state.film = payload
}
