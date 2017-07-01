export const REQUEST_GIFS = "REQUEST_GIFS";

export function requestGifs(term = null) {
  console.log(term);
  return {
    type: REQUEST_GIFS,
    term
  }
}
