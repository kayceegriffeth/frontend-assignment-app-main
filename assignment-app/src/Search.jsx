import { useState } from "react";
import PropTypes from "prop-types";
import SearchMenu from "./SearchMenu";
import MetricsDisplay from "./MetricsDisplay";
import ResultsTable from "./ResultsTable";

export default function Search({ searchResults, setSearchResults }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async ({ filterType, keyword }) => {
    setLoading(true);
    setError("");

    let url = "/api/data/search";
    const params = [];

    if (filterType) params.push(`filterType=${encodeURIComponent(filterType)}`);
    if (keyword.trim()) params.push(`keyword=${encodeURIComponent(keyword)}`);

    if (params.length) url += `?${params.join("&")}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch search results.");
      const data = await res.json();
      setSearchResults(data);
    } catch (err) {
      setError(err.message);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <SearchMenu onSearch={handleSearch} />

      {!loading && error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && searchResults.length === 0 && !error && <p>No Records To Display</p>}
      {!loading && searchResults.length > 0 && !error && <p>Displaying {searchResults.length} Records</p>}
      {loading && <p className="fw-bold">Loading...</p>}

      {searchResults.length > 0 && <MetricsDisplay results={searchResults} />}

      <ResultsTable results={searchResults} loading={loading} error={error} />
    </div>
  );
}


Search.propTypes = {
  searchResults: PropTypes.array.isRequired,
  setSearchResults: PropTypes.func.isRequired,
};