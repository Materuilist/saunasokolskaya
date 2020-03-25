import React from "react";
import { Switch, Route } from "react-router-dom";
import Feedback from "../Feedback/Feedback";
import PhotoSlider from "../PhotoSlider/PhotoSlider";
import BackDrop from "../../../../../hoc/BackDrop/BackDrop";

import cssClasses from './SaunaContent.module.css';

function SaunaContent({ sauna, photos }) {
  return (
    <div className={cssClasses.SaunaContent}>
      <Switch>
        <Route exact path={`/home/feedback/${sauna}`}>
          <Feedback sauna={sauna} />
        </Route>
        <Route path="/home">
          <PhotoSlider sauna={sauna} photos={photos} />
        </Route>
      </Switch>
    </div>
  );
}

const SaunaContentWithBackDrop = BackDrop(SaunaContent);

export default SaunaContentWithBackDrop;
