const tableReducer = (state, action) => {
    switch (action.type) {
      case "SET_ROWS":
        return { ...state, rows: action.payload, filteredRows: action.payload };
      case "ADD_ROW":
        return { ...state, rows: [...state.rows, action.payload], filteredRows: [...state.rows, action.payload] };
      case "SET_SEARCH_QUERY":
        return { ...state, searchQuery: action.payload };
      case "FILTER_ROWS":
        return {
          ...state,
          filteredRows: state.rows.filter(row =>
            Object.values(row).some(value =>
              value.toLowerCase().includes(state.searchQuery.toLowerCase())
            )
          ),
        };
      case "CLEAR_FILTER":
        return { ...state, searchQuery: "", filteredRows: state.rows };
      case "DELETE_ROW":
        return {
          ...state,
          rows: state.rows.filter((row) => row.id !== action.payload),
          filteredRows: state.filteredRows.filter((row) => row.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default tableReducer;
  