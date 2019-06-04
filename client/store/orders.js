import axios from 'axios'

const initialState = {}
let config = {
  mode: 'no-cors',
  headers: {
    Authorization: 'Basic bnE1cm8wZHEtcDdvcS0zeTNkOnV3aW4tc3Jld3plZzFhOG11',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  },
  withCredentials: true,
  credentials: 'same-origin'
}
export const getOrders = () => async dispatch => {
  try {
    const {data} = axios.get('https://api.printful.com/orders', config)
    console.log('hello', data)
  } catch (err) {
    console.error(err)
  }
}
export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_NAME:
      return {
        ...state
      }

    default:
      return state
  }
}
