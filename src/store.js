import { createStore } from 'redux';
import rootred from './redux/reducers/main'
// import { configureStore } from '@reduxjs/toolkit';

const store = createStore(rootred);

export default store;