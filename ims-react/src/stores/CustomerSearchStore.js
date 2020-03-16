import {observable, action, decorate} from "mobx";
import RequestService from '../services/RequestService';
import config from '../config';

class CustomerSearchStore {
  searchResults = null;

  searchCustomers = (formBody) => {
    RequestService.post(`${config.backendUrl}/customers`, formBody, (response) => {
      this.searchResults = response.data.customers;
    });
  }
}

decorate(CustomerSearchStore, {
  searchResults: observable,
  searchCustomers: action
});

export default CustomerSearchStore;