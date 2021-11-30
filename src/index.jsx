// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import citiesReducer from './reducers/city_list_reducer';
import selectCity from './reducers/select_city_reducer';

// State and reducers
const reducers = combineReducers({
  cities: citiesReducer,  
  selectedCity: selectCity
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
