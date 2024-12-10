import React, { useState } from "react";
import { useTable } from "../store/context/TableContext";

const Controls = () => {
    const { dispatch } = useTable();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        dispatch({ type: "SET_SEARCH_QUERY", payload: query });
        dispatch({ type: "FILTER_ROWS" });
    };

    const handleClear = () => {
        setSearchQuery("");
        dispatch({ type: "CLEAR_FILTER" });
    };

    return (
        <section className="controls">
            <div className="search-bar">
                <div className="icon-container search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>

            <div className="icon-container action-icons">
                <span
                    className="refresh-icon"
                    onClick={handleClear}
                    role="button"
                    title="Clear Filters"
                >
                    <i className="fa-solid fa-rotate-right"></i>
                </span>
            </div>
        </section>
    );
};

export default Controls;
