import React from "react";
import _ from "lodash";

import cssClasses from "./BackDrop.module.css";

export default function(WrappedComponent) {
  return function(props) {
    let passedProps = _.cloneDeep(props);
    delete passedProps.dismissBackDrop;
    delete passedProps.showBackDrop;
    const result = props.showBackDrop ? (
      <div className={cssClasses.BackDrop} onClick={props.dismissBackDrop}>
        <WrappedComponent {...passedProps} />
      </div>
    ) : (
      <WrappedComponent {...passedProps} />
    );
    return result;
  };
}