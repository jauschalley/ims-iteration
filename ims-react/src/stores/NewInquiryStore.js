import {observable, decorate} from "mobx";

class NewInquiryStore {
    createInquiryResult = null;
}

decorate(NewInquiryStore, {
  createInquiryResult: observable
});

export default NewInquiryStore;