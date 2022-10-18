const {createStore, combineReducers} = require('redux')

const initialState = {
  numberOfLaptops: 100,
}

const initialMobile = {
  numberOfMobiles: 1000,
}

const buyLaptops = () => ({
  type: 'BUY_LAPTOP',
})

const buyMobile = () => ({
  type: 'BUY_MOBILE',
})

const laptopReducer = (state = initialState, action) => {
  if (action.type === 'BUY_LAPTOP') {
    return {numberOfLaptops: state.numberOfLaptops - 1}
  }
  return state
}

const mobileReducer = (state = initialMobile, action) => {
  if (action.type === 'BUY_MOBILE') {
    return {numberOfLaptops: state.numberOfMobiles - 1}
  }
  return state
}

const rootReducer = combineReducers({laptopReducer, mobileReducer})

const store = createStore(rootReducer)
console.log(store)
store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch(buyLaptops())
store.dispatch(buyMobile())
