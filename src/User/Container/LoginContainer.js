import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Login from "../View/Login";

@inject("UserStore", "MainStore")
@observer
class LoginContainer extends Component {
  //입력창에 값 받아옴
  setLgnProp = (key, value) => {
    this.props.UserStore.setLgnProp(key, value);
  };

  //로그인 이벤트 발생 ->login이 정상 작동하면 메인 화면으로 이동
  lgnBtn = () => {
    if (this.props.UserStore.login()) {
      this.props.MainStore.setMainView("Home");
      // console.log(this.props.UserStore.getUser);
    }
  };
  onCancel = () => {
    this.props.MainStore.setMainView("Home");
  };

  onSignUp = () => {
    this.props.MainStore.setMainView("SignUp");
  };
  render() {
    //user스토어에 있는 user state값 가져오기
    const { user } = this.props.UserStore;

    return (
      <Login
        onCancel={this.onCancel}
        onSignUp={this.onSignUp}
        user={user}
        lgnBtn={this.lgnBtn}
        setLgnProp={this.setLgnProp}
      />
    );
  }
}

export default LoginContainer;
