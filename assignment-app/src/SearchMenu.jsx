import { useState } from "react";
import PropTypes from "prop-types";

export default function SearchMenu({ onSearch }) {
  const [filterType, setFilterType] = useState("");
  const [keyword, setKeyword] = useState("");

  const filterOptions = [
    { label: "gender", value: "gender" },
    { label: "operatingSystem", value: "operatingSystem" },
    { label: "model", value: "model" },
    { label: "behaviorClass", value: "behaviorClass" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ filterType, keyword });
  };

  return (
    
    <div className="container mt-3">
      <div style={{ marginLeft: "-320px", marginRight: "-320px" }}>
    <hr style={{ margin: 0, border: "1px solid #000" }} />
    </div>
    <br></br>
      <form className="d-flex flex-column align-items-start" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">Search data point to filter search by</label>
          <select
            className="form-select"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">all</option>
            {filterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div><br></br>

        <div className="mb-2">
          
          <input
            type="text"
            className="form-control"
            placeholder="Search by keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            style={{ width: "308px" }}
          />
        </div>

        <button type="submit" className="btn btn-white border" style={{ width: "308px" }}>
          Search
        </button>
      </form>
    </div>
  );
}

SearchMenu.propTypes = {
  onSearch: PropTypes.func.isRequired,
};