import PropTypes from "prop-types";

function calculateAverage(values) {
  if (!values.length) return 0;
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
}

function calculateMedian(values) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

export default function MetricsDisplay({ results }) {
  const metrics = [
    { name: "App Usage Time", key: "App Usage Time (min/day)", unit: "Minutes" },
    { name: "Screen On Time", key: "Screen On Time (hours/day)", unit: "Hours" },
    { name: "Number of Apps Installed", key: "Number of Apps Installed", unit: "Apps" },
    { name: "Age", key: "Age", unit: "Years" },
  ];

  return (
    <div className="row mt-4">
      {metrics.map((metric) => {
        const values = results.map((item) => Number(item[metric.key]) || 0);
        const avg = calculateAverage(values);
        const median = calculateMedian(values);

        return (
          <div className="col-md-3 mb-3" key={metric.key}>
            <div className="card shadow-sm p-3 h-100">
              <h5 className="card-title">{metric.name}</h5>
              <p className="card-text mb-1">
                <strong>Average:</strong> {avg.toLocaleString("en-US")} {metric.unit}
              </p>
              <p className="card-text">
                <strong>Median:</strong> {median.toLocaleString("en-US")} {metric.unit}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

MetricsDisplay.propTypes = {
  results: PropTypes.array.isRequired,
};