import {observable, action, decorate} from "mobx";
import RequestService from '../services/RequestService';
import config from '../config';

class ItemSearchStore {
  searchResults = null;

  searchItems = (formBody) => {
    RequestService.post(`${config.backendUrl}/publications`, formBody, (response) => {
      this.searchResults = response.data.items;
    });
  }
}

decorate(ItemSearchStore, {
  searchResults: observable,
  searchItems: action
});

export default ItemSearchStore;