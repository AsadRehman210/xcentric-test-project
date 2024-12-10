import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios"; 
import tableReducer from "../reducer/tableReducer";
import { toast } from "react-toastify";

const initialState = {
  rows: [],
  filteredRows: [],
  searchQuery: ""
};

const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tableReducer, initialState);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://60eedea7eb4c0a0017bf4685.mockapi.io/api/test/address_list"
      );
      dispatch({ type: "SET_ROWS", payload: response.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSave = async (newUser) => {
    try {
      const response = await axios.post(
        "https://60eedea7eb4c0a0017bf4685.mockapi.io/api/test/address_list",
        newUser,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      dispatch({ type: "ADD_ROW", payload: response.data });

      fetchData();
    } catch (error) {
      alert("Failed to save user: " + error.message); 
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://60eedea7eb4c0a0017bf4685.mockapi.io/api/test/address_list/${id}`
      );

      dispatch({ type: "DELETE_ROW", payload: id });
      toast.success("User deleted successfully!");
    } catch (error) {
      alert("Failed to delete user: " + error.message); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TableContext.Provider value={{ state, dispatch, fetchData, handleDelete, handleSave }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => useContext(TableContext);
