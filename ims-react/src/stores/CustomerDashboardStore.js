import {observable, decorate} from "mobx";

class CustomerDashboardStore {
  dashboardStatistics = null;
  openInquiries = null;

  constructor(dashboardStatistics = null, openInquiries = null) {
    this.dashboardStatistics = dashboardStatistics || require('../stubs/closed-inquiries.json');
    this.openInquiries = openInquiries || require('../stubs/open-inquiries.json');
  }
}

decorate(CustomerDashboardStore, {
  dashboardStatistics: observable,
  openInquiries: observable
});

export default CustomerDashboardStore;