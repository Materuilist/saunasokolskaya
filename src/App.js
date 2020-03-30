import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from 'redux-thunk';

import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";

import cssClasses from './App.module.css'

import feedbackReducer from "./store/reducers/feedback";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(feedbackReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Layout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
