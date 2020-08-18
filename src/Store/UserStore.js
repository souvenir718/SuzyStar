import { observable, computed } from "mobx";
import Users from "../Users";

class UserStore {
  @observable users = Users;
  @observable user = {};

  @computed get getUsers() {
    return this.users;
  }
  @computed get getUser() {
    return this.user;
  }
}
export default new UserStore();
