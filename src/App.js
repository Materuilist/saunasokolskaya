import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import AuthenticationForm from "../src/components/Layout/AuthenticationForm/AuthenticationForm";
import Modal from "../src/components/UI/Modal/Modal";
import BackDrop from "../src/components/UI/BackDrop/BackDrop";

import cssClasses from "./App.module.css";

import feedbackReducer from "./store/reducers/feedback";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  feedbackReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

function App() {
  const [showAuthForm, changeShowAuthForm] = useState(false);

  function toggleShowAuth() {
    changeShowAuthForm(!showAuthForm);
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div style={{position:'relative'}}>
          <Modal show={showAuthForm}>
            <AuthenticationForm authenticatedHandler={toggleShowAuth} />
          </Modal>
          <BackDrop show={showAuthForm} dismiss={toggleShowAuth} />
          <Header />
          <Layout toggleShowAuth={toggleShowAuth} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
