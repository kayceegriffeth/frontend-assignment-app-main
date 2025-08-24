import { useEffect, useState } from "react";
import SearchMenu from "./SearchMenu";

export default function SearchResults() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
  fetch("/user-behavior-data.json")
    .then((res) => res.json())
    .then((json) => {
      console.log("Loaded JSON:", json);
      setData(json);
      setFiltered(json);
    })
    .catch(err => console.error("Error loading JSON:", err));
}, []);

  const handleSearch = ({ filterType, keyword }) => {
    if (!filterType || !keyword) {
      setFiltered(data);
      return;
    }

    const lowerKeyword = keyword.toLowerCase();

    const filteredData = data.filter((user) => {
      if (filterType === "gender") {
        return user["Gender"].toLowerCase().includes(lowerKeyword);
      }
      if (filterType === "operatingSystem") {
        return user["Operating System"].toLowerCase().includes(lowerKeyword);
      }
      if (filterType === "model") {
        return user["Device Model"].toLowerCase().includes(lowerKeyword);
      }
      if (filterType === "behaviorClass") {
        return user["User Behavior Class"].toString() === keyword;
      }
      return true;
    });

    setFiltered(filteredData);
  };

  return (
    <div className="container mt-3">
      <SearchMenu onSearch={handleSearch} />

      <h2 className="mt-4">User Behavior Data</h2>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Device Model</th>
            <th>OS</th>
            <th>App Usage</th>
            <th>Screen Time</th>
            <th>Battery Drain</th>
            <th>Apps Installed</th>
            <th>Data Usage</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Behavior Class</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((user) => (
            <tr key={user["User ID"]}>
              <td>{user["User ID"]}</td>
              <td>{user["Device Model"]}</td>
              <td>{user["Operating System"]}</td>
              <td>{user["App Usage Time (min/day)"]}</td>
              <td>{user["Screen On Time (hours/day)"]}</td>
              <td>{user["Battery Drain (mAh/day)"]}</td>
              <td>{user["Number of Apps Installed"]}</td>
              <td>{user["Data Usage (MB/day)"]}</td>
              <td>{user["Age"]}</td>
              <td>{user["Gender"]}</td>
              <td>{user["User Behavior Class"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}