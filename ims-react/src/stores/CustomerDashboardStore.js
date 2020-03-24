import {observable, decorate, action} from "mobx";
import RequestService from '../services/RequestService';
import config from '../config';

class CustomerDashboardStore {
  dashboardStatistics = null;
  openInquiries = null;
  loading = true;

  fetchDashboardStatistics = () => {
    RequestService.get(`${config.backendUrl}/inquiry/closedcounts`, (response) => {
      this.dashboardStatistics = response.data.closedCounts;

      RequestService.post(`${config.backendUrl}/inquiries`, {}, (response) => {
        this.openInquiries = response.data.inquiries;
        this.loading = false;
      });
    });
  }
}

decorate(CustomerDashboardStore, {
  dashboardStatistics: observable,
  openInquiries: observable,
  loading: observable,
  fetchDashboardStatistics: action
});

export default CustomerDashboardStore;