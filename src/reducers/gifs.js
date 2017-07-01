import { REQUEST_GIFS } from '../actions/index';

const initialState = {
  data: []
};

export default function gifts(state = initialState, action) {
  switch(action.type) {
    case REQUEST_GIFS:
      return {
        ...state,
        data: action.payload.body.data
      };
    default:
      return state;
  }
}
