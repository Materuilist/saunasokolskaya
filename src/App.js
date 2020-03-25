import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';

import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";

import feedbackReducer from "./store/reducers/feedback";

const store = createStore(feedbackReducer, applyMiddleware(thunkMiddleware));

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
