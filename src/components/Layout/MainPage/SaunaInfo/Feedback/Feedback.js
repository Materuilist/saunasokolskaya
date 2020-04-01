import React from "react";
import { connect } from "react-redux";

import Comment from "./Comment/Comment";

import {
  getFeedback
} from "../../../../../store/actions/actionCreators";

import cssClasses from "./Feedback.module.css";

class Feedback extends React.Component {
  componentDidMount() {
    this.props.getFeedback(1, 2);
  }

  leaveFeedbackClicked() {
    if (!this.props.isAuth) {
      this.props.showAuthentication();
    } else {
      this.props.routeChangedHandler("leavefeedback");
    }
  }

  render() {
    return (
      <div className={cssClasses.Feedback}>
        <div
          className={cssClasses.LeaveFeedback}
          onClick={this.leaveFeedbackClicked.bind(this)}
        >
          Оставить свой отзыв
        </div>
        <div className={cssClasses.FeedbackBlock}>
          <ul>
            {this.props.feedback.map(({ rate, comment, user }) => (
              <li key={rate + comment}>
                <Comment rate={rate} comment={comment} user={user} />
              </li>
            ))}
          </ul>
        </div>
        {this.props.page === 1 && !this.props.nextPageExists ? null : (
          <div className={cssClasses.Pages}>
            {this.props.page !== 1 ? (
              <React.Fragment>
                <span
                  className={cssClasses.Arrow}
                  onClick={() => this.props.getFeedback(this.props.page - 1)}
                >
                  &#11164;
                </span>
                <span
                  className={cssClasses.PageNumber}
                  onClick={() => this.props.getFeedback(1)}
                >
                  1
                </span>
              </React.Fragment>
            ) : null}
            <span className={cssClasses.CurrentPage}>{this.props.page}</span>
            {this.props.nextPageExists ? (
              <React.Fragment>
                <span
                  className={cssClasses.PageNumber}
                  onClick={() => this.props.getFeedback(this.props.page + 1)}
                >
                  {this.props.page + 1}
                </span>
                <span
                  className={cssClasses.Arrow}
                  onClick={() => this.props.getFeedback(this.props.page + 1)}
                >
                  &#11166;
                </span>
              </React.Fragment>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  //первая либо вторая сауна
  feedback: state[ownProps.sauna].feedback.comments,
  page: state[ownProps.sauna].feedback.page,
  nextPageExists: state[ownProps.sauna].feedback.nextPageExists,
  backend: state.backend,
  isAuth: state.isAuth
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getFeedback: (page, items) =>
    dispatch(getFeedback(ownProps.sauna, page, items))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
