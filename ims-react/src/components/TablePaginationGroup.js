import {observer} from "mobx-react";
import React from 'react';

import TablePagination from "@material-ui/core/TablePagination";
import { tablePaginationStore } from '../stores/TablePaginationStore';

const TablePaginationGroup = observer(({tableRef}) => {
    const handleChangePage = (event, newPage) => {
        tablePaginationStore.setPage(newPage);
      };

    const handleChangeRowsPerPage = event => {
        tablePaginationStore.setRowsPerPage(parseInt(event.target.value, 10));
        tablePaginationStore.setPage(0);
    };

    return (
        <TablePagination
        rowsPerPageOptions={[5,10,15,25]}
        component="div"
        count={tableRef.length}
        rowsPerPage={tablePaginationStore.rowsPerPage}
        page={tablePaginationStore.page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        />
  );
});
 
export default TablePaginationGroup;
