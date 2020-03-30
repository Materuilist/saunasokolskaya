import React from "react";
import Stars from "./Stars/Stars";
import PhotoPopUp from "./PhotoPopUp/PhotoPopUp";

export default class extends React.Component {
  state = {
    rate: 3.5,
    rateIsFixed: false,
    showPhotoPopUp: "none"
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

  showPhoto(sauna) {
    this.setState(() => ({ showPhotoPopUp: sauna }));
  }

  render() {
    return (
      <div className="form-container">
        <form>
          <Stars
            rateIsFixed={this.state.rateIsFixed}
            rateChangedHandler={this.rateChangedHandler.bind(this)}
            fixedChanged={this.fixedChanged.bind(this)}
            rate={this.state.rate}
          />
          <span className='form-item'
            onMouseOut={this.showPhoto.bind(this, "none")}
            onMouseOver={this.showPhoto.bind(this, "firstSauna")}
          >
            <input type="radio" value="firstSauna" />
            Первая сауна
          </span>
          <span
            onMouseOut={this.showPhoto.bind(this, "none")}
            onMouseOver={this.showPhoto.bind(this, "secondSauna")}
          >
            <input type="radio" value="secondSauna" />
            Вторая сауна
          </span>
          <PhotoPopUp sauna={this.state.showPhotoPopUp} />
          <textarea
            style={{ width: "100%" }}
            name="comment"
            className="form-item"
            placeholder="Текст вашего отзыва..."
          />
          <button type='submit'>OK</button>
        </form>
      </div>
    );
  }
}
