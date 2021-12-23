import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import hello from './hello';

const reducer = combineReducers({
  myGreeting: hello,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);
export default store;
