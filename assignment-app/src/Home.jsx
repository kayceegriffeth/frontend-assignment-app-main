export default function Home() {
  return (
    <div className="container mt-4">
      <div style={{ marginLeft: "-308px", marginRight: "-308px" }}>
  <hr style={{ margin: 0, border: "1px solid #000" }} />
</div>
      <br></br>
      
      <p class="fs-1">User Behavior Dataset</p>

      <p>
        This dataset provides a comprehensive analysis of mobile device usage patterns and user
        behavior classification. It contains 700 samples of user data, including metrics such as
        app usage time, screen-on time, battery drain, and data consumption. Each entry is
        categorized into one of five user behavior classes, ranging from light to extreme usage,
        allowing for insightful analysis and modeling.
      </p>

      <p class="fs-2">Key Features:</p>
      <ul>
        <li><strong>User ID:</strong> Unique identifier for each user.</li>
        <li><strong>Device Model:</strong> Model of the users smartphone.</li>
        <li><strong>Operating System:</strong> iOS or Android.</li>
        <li><strong>App Usage Time:</strong> Daily time spent on apps (minutes).</li>
        <li><strong>Screen On Time:</strong> Average hours per day the screen is active.</li>
        <li><strong>Battery Drain:</strong> Daily battery consumption (mAh).</li>
        <li><strong>Number of Apps Installed:</strong> Total apps on the device.</li>
        <li><strong>Data Usage:</strong> Daily mobile data consumption (MB).</li>
        <li><strong>Age:</strong> Age of the user.</li>
        <li><strong>Gender:</strong> Male or Female.</li>
        <li><strong>User Behavior Class:</strong> Classification of usage patterns (1–5).</li>
      </ul>
      <br></br>
      <a class="btn btn-link" href="https://www.kaggle.com/datasets/valakhorasani/mobile-device-usage-and-user-behavior-dataset?resource=download" 
  target="_blank" rel="noopener noreferrer">Sourced from this Kaggle Dataset</a>
    </div>
  );
}