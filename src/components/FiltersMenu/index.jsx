import React from "react";
import SortBySelector from "./components/SortBySelector";
import AuthorFilter from "./components/AuthorFilter";

const FiltersMenu = () => {
    return (
        <div className="filter-menu">
            <SortBySelector />
            <AuthorFilter />
        </div>
    );
};

export default FiltersMenu;
