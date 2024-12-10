import React from "react";
import { useTable } from "../store/context/TableContext";

const Table = () => {
    const { state, handleDelete } = useTable();
    return (
        <section className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Created On</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {state.filteredRows.map((row, index) => (
                        <tr key={row.id || index}>
                            <td>{new Date(row.created_on).toLocaleString()}</td>
                            <td>{row.name}</td>
                            <td>{row.address}</td>
                            <td>
                                <button className="delete-btn" onClick={() => handleDelete(row.id)}>
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Table;
