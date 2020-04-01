import React from "react";
import Stars from "./Stars/Stars";
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';

export default class extends React.Component {
  state = {
    rate: 3.5,
    rateIsFixed: false,
    errorMessage: null
  };

  rateChangedHandler(rate) {
    this.setState(() => ({ rate }));
  }

  fixedChanged() {
    this.setState(prevState => ({
      rateIsFixed: !prevState.rateIsFixed,
      rate: prevState.rateIsFixed ? 0 : prevState.rate
    }));
  }

  async formSubmitHandler(event) {
    event.preventDefault();
    if (this.state.rate === 0) {
      this.setState(() => ({
        errorMessage: "Рейтинг не может быть меньше 0.5!"
      }));
      return;
    }
    const form = event.target;
    const res = await fetch(form.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization':'Bearer:'+localStorage.getItem('jwt')
      },
      body: JSON.stringify({ rate: this.state.rate, comment: form.comment.value })
    });
    if(res.status!==201){
      const response = await res.json();
      const {message}=response;
      this.setState(() => ({
        errorMessage: message || response.error.message || "Что-то пошло не так..."
      }));
      return;
    }
    this.props.routeChangedHandler('feedback', true);
  }

  render() {
    return (
      <div className="form-container">
        {this.state.errorMessage ? (
          <ErrorMessage errorMessage={this.state.errorMessage} />
        ) : null}
        <form
          onSubmit={this.formSubmitHandler.bind(this)}
          action={`http://localhost:8080/feedback/${this.props.sauna}`}
          method="POST"
        >
          <Stars
            rateIsFixed={this.state.rateIsFixed}
            rateChangedHandler={this.rateChangedHandler.bind(this)}
            fixedChanged={this.fixedChanged.bind(this)}
            rate={this.state.rate}
          />
          <textarea
            required
            minLength={5}
            maxLength={100}
            style={{ width: "100%" }}
            name="comment"
            className="form-item"
            placeholder="Текст вашего отзыва..."
          />
          <button type="submit" className="form-item">
            OK
          </button>
        </form>
      </div>
    );
  }
}
