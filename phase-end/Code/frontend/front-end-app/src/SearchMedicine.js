import React, { useState } from "react";

function SearchMedicine({ onSearch }) {
    const [searchVal, setSearchVal] = useState("");

    const handleSearch = () => {
        console.log("onSearch(",searchVal,")");
        onSearch(searchVal);
    };

    return (
        <div>
            <input type="text" placeholder="Search by name or seller" value={searchVal} onChange={(e) => setSearchVal(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchMedicine;
