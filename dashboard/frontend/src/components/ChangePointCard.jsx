import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/change-point";

function ChangePointCard() {
  const [cp, setCp] = useState(null);

  useEffect(() => {
    axios.get(API_URL).then((res) => setCp(res.data));
  }, []);

  if (!cp) return <p>Loading change point...</p>;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginBottom: "20px",
        borderRadius: "6px",
      }}
    >
      <h2>Detected Change Point</h2>
      <p><strong>Date:</strong> {cp.change_date}</p>
      <p>{cp.description}</p>
      <p>
        <strong>Mean Return Before:</strong> {cp.mu_before}
      </p>
      <p>
        <strong>Mean Return After:</strong> {cp.mu_after}
      </p>
      <p>
        <strong>Posterior Confidence:</strong> {cp.confidence * 100}%
      </p>
    </div>
  );
}

export default ChangePointCard;
