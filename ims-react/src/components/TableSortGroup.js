function descendingComparator(value, nextValue, orderBy) {
    if (nextValue[orderBy] < value[orderBy]) {
      return -1;
    }
    if (nextValue[orderBy] > value[orderBy]) {
      return 1;
    }
    return 0;
  
}
function descendingComparatorDateType(value, nextValue, orderBy){
  if (new Date(nextValue[orderBy]).getTime() < new Date(value[orderBy]).getTime()) {
    return -1;
  }
  if (new Date(nextValue[orderBy]).getTime() > new Date(value[orderBy]).getTime()) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  if(orderBy.toLowerCase().includes('date')){
    return order === "desc"
    ? (value, nextValue) => descendingComparatorDateType(value, nextValue, orderBy)
    : (value, nextValue) => -descendingComparatorDateType(value, nextValue, orderBy);
  }
  else{
    return order === "desc"
    ? (value, nextValue) => descendingComparator(value, nextValue, orderBy)
    : (value, nextValue) => -descendingComparator(value, nextValue, orderBy);
  }
}

export const stableSort = (tableRef, order, orderBy) => {
  const comparator = getComparator(order, orderBy);
  const stabilizedThis = tableRef.map((el, index) => [el, index]);
  stabilizedThis.sort((value, nextValue) => {
    const order = comparator(value[0], nextValue[0]);
    if (order !== 0) return order;
    return value[1] - nextValue[1];
  });
  return stabilizedThis.map(el => el[0]);
};
