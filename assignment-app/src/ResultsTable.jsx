import PropTypes from "prop-types";

export default function ResultsTable({ results, loading, error }) {
  if (loading) return <p className="mt-3 fw-bold">Loading Records...</p>;
  if (!loading && results.length === 0 && !error) return null;

  return (
    <div className="mt-4 table-responsive">
      {error && <p className="text-danger fw-bold">{error}</p>}

      {results.length > 0 && (
        <table className="table table-bordered table0striped">
          <thead className="table-dark">
            <tr>
              {Object.keys(results[0]).map((key) => (
                <th key={key} className="text-start">{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.map((row, idx) => (
              <tr key={idx}>
                {Object.keys(row).map((key) => (
                  <td key={key} className="text-start">{row[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

ResultsTable.propTypes = {
  results: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
