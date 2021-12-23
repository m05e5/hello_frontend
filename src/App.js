import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import Greetings from './Greeting';
import store from './redux/configurestore';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Greetings />
      </Provider>
    </div>
  );
}

export default App;
