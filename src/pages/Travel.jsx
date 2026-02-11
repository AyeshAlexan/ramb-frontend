import React from "react";
import "../styles/Travel.css";

export default function ComingSoon({ title = "This Page" }) {
  return (
    <div className="csWrap">
      <div className="csCard">
        <div className="csIcon">🚧</div>
        <h1>{title}</h1>
        <h2>Still in Progress</h2>

        <p>
          This section is currently being prepared. Content and features will
          be added soon. Please check back later for updates.
        </p>

        <button
          className="csBtn"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
