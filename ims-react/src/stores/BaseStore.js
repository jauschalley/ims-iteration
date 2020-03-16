import {observable, action, decorate} from "mobx";

class BaseStore {
  message = null;

  setMessage = (message) => {
    this.message = message
  }
}

decorate(BaseStore, {
  message: observable,
});

export default BaseStore;