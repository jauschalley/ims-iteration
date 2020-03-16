import {observable, decorate} from "mobx";

class ReferenceDataStore {
  referenceData = null;

  constructor(referenceData = null) {
    this.referenceData = referenceData || require('../data/lookups.json');
  }
}

decorate(ReferenceDataStore, {
  referenceData: observable,
});

export default ReferenceDataStore;