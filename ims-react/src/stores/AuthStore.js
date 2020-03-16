import {observable, action, decorate} from "mobx";
import axios from 'axios';
import config from '../config';

class AuthStore {
  constructor() {
    this.buildFromSession();
  }

  loggedIn = false;
  
  login = (username, password, successCallback) => {
    let headers = {
      "headers": {
        "credentials": window.btoa(username + ':' + password)
      }
    };
    axios.post(`${config.backendUrl}/login`, null, headers).then((response) => {
      console.log(response.headers);
      this.loggedIn = true;
      this.writeToSession(response.headers.jwt);
      successCallback();
    }).catch((err) => {
      console.log(err);
    });
  }

  logout = (successCallback) => {
    console.log('Logged out!');
    this.loggedIn = false;
    sessionStorage.clear();
    successCallback();
    //need backend logout method
    // RequestService.delete(`${config.backendUrl}/logout`, 
    //   (response) => {
    //     console.log('Logged out!')
    //     this.loggedIn = false;
    //     sessionStorage.clear();
    //     successCallback();
    //   }
    // )
  }

  writeToSession = (token) => {
    let json = JSON.stringify(this);
    sessionStorage.setItem('AuthStore', json);
    token && sessionStorage.setItem('Token', token);
  }

  buildFromSession = () => {
    let json = JSON.parse(sessionStorage.getItem('AuthStore'));
    if(json) {
      this.loggedIn = json.loggedIn;
    }
  }
}

decorate(AuthStore, {
  loggedIn: observable,
  login: action
});

export default AuthStore;