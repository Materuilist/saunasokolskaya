import React from "react";
import { connect } from "react-redux";

import ErrorMessage from "../../../UI/ErrorMessage/ErrorMessage";

import cssClasses from "./AddUserForm.module.css";

class AddUserForm extends React.Component {
  state = {
    errorMessage: null,
    phoneInputValue: "8(9"
  };

  async validateForm(event) {
    event.preventDefault();
    const validatedPhone = [...this.state.phoneInputValue].reduce(
      (prevValue, currValue) =>
        Number.isInteger(Number(currValue)) ? prevValue + currValue : prevValue,
      ""
    );
    if (validatedPhone.length !== 11) {
      this.setState(() => ({ errorMessage: "Неверно введен номер телефона!" }));
    }
    const res = await fetch(this.props.backend + "/admin/add-user", {
      method: "POST",
      body: JSON.stringify({
        phone: validatedPhone
      }),
      headers: {
        "Content-Type": "application/json",
        'Authorization':'Bearer:'+localStorage.getItem('ajwt')
      }
    });
    if (res.status === 201) {
      const {message} = await res.json();
      this.setState(()=>({phoneInputValue:'8(9', errorMessage:null}))
      alert(message);
    } else {
      const { message } = await res.json();
      this.setState(prevState => ({
        errorMessage: message || "Неверно введен номер телефона!"
      }));
    }
  }

  phoneInputHandler(event) {
    const value = event.target.value;
    //добавилось
    const surplus = value[value.length - 1];
    if (Number.isInteger(Number(surplus))) {
      //8(9XX)-XXX-XX-XX
      this.setState(({ phoneInputValue }) => {
        let newPhoneInputValue = phoneInputValue + surplus;
        const currentLength = newPhoneInputValue.length;
        switch (currentLength) {
          case 5:
            return { phoneInputValue: newPhoneInputValue + ")-" };
          case 10:
          case 13:
            return { phoneInputValue: newPhoneInputValue + "-" };
          case 17:
            return;
          default:
            return { phoneInputValue: newPhoneInputValue };
        }
      });
    }
  }

  phoneClearHandler(event) {
    const key = event.key;
    if (Number.isInteger(Number(key))) {
      return;
    } else {
      event.preventDefault();
      if (key === "Backspace") {
        this.setState(({ phoneInputValue }) => {
          const currentLength = phoneInputValue.length;
          //8(9XX)-XXX-XX-XX
          switch (currentLength) {
            case 3:
              return;
            case 7:
              return {
                phoneInputValue: phoneInputValue.slice(0, currentLength - 3)
              };
            case 11:
            case 14:
              return {
                phoneInputValue: phoneInputValue.slice(0, currentLength - 2)
              };
            default:
              return {
                phoneInputValue: phoneInputValue.slice(0, currentLength - 1)
              };
          }
        });
      }
      return;
    }
  }

  render() {
    return (
      <div className={"form-container " + cssClasses.AddUserForm}>
        {this.state.errorMessage ? (
          <ErrorMessage errorMessage={this.state.errorMessage} />
        ) : null}
        <form
          onSubmit={this.validateForm.bind(this)}
          action="/admin/add-user"
          method="POST"
        >
          <input
            onKeyDown={this.phoneClearHandler.bind(this)}
            onInput={this.phoneInputHandler.bind(this)}
            value={this.state.phoneInputValue}
            className={"form-item"}
            //8(9XX)-XXX-XX-XX
            pattern="/^8\(9\d{2}\)\-\d{3}\-\d{2}\-\d{2}$/"
            type="tel"
            name="phone"
            required
          />
          <button className={"form-item"} type="submit">
            ОК
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state=>({
    backend:state.backend
})

export default connect(mapStateToProps)(AddUserForm);