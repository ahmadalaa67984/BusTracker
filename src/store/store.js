import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Define initial state
const initialBusState = {
  busInfo: {}
};

// Define action types
const SET_BUS_INFO = 'SET_BUS_INFO';

// Define action creators
export const setBusInfo = (busInfo) => ({
  type: SET_BUS_INFO,
  payload: busInfo
});

// Define reducers
const busReducer = (state = initialBusState, action) => {
  switch (action.type) {
    case SET_BUS_INFO:
      return {
        ...state,
        busInfo: action.payload
      };
    default:
      return state;
  }
};

// Combine reducers (if you have multiple reducers)
const rootReducer = combineReducers({
  bus: busReducer
});

// Create store
const store = createStore(rootReducer);

export default store;
