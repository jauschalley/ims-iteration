import {observable, action, decorate} from "mobx";
import RequestService from '../services/RequestService';
import config from '../config';

class InquirySearchStore {
  searchResults = null;

  searchInquiries = (formData) => {
    RequestService.post(`${config.backendUrl}/inquiries`, formData, (response) => {
      this.searchResults = response.data.inquiries;
    });
  }
}

decorate(InquirySearchStore, {
  searchResults: observable,
  searchInquiries: action
});

export default InquirySearchStore;