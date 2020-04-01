import React from "react";
import { connect } from "react-redux";
import AdminAuthForm from "./AdminAuthForm/AdminAuthForm";
import AddUserForm from "./AddUserForm/AddUserForm";

class AdminPanel extends React.Component {
  render() {
    return this.props.isAdmin? <AddUserForm /> : <AdminAuthForm />;
  }
}

const mapStateToProps = state => ({
  isAdmin: state.isAdmin
});

export default connect(mapStateToProps)(AdminPanel);
