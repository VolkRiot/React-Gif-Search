import request from 'superagent';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=64031ee213914402ad2a1d49b11c3b79';

export const REQUEST_GIFS = "REQUEST_GIFS";

export function requestGifs(term = null) {
  const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`);

  return {
    type: REQUEST_GIFS,
    payload: data,
  }
}
