import { observable, action, decorate } from "mobx";
class TablePaginationStore {
  page = 0;
  rowsPerPage = 10;

  setPage = newPage => (this.page = newPage);
  setRowsPerPage = newRows => (this.rowsPerPage = newRows);
}

decorate(TablePaginationStore, {
  page: observable,
  rowsPerPage: observable,
  setPage: action,
  setRowsPerPage: action
});

export const tablePaginationStore = new TablePaginationStore(); 