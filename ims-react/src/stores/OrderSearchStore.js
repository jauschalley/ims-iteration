import {observable, action, decorate} from "mobx";
import RequestService from '../services/RequestService';
import config from '../config';

class OrderSearchStore {
  searchResults = null;

  searchOrders = (formData) => {
    RequestService.post(`${config.backendUrl}/orders`, formData, (response) => {
      this.searchResults = response.data.orders;
    });
  }
}

decorate(OrderSearchStore, {
  searchResults: observable,
  searchOrders: action
});

export default OrderSearchStore;