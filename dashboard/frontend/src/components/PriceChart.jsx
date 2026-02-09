import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const API_URL = "http://127.0.0.1:5000/api/prices";

function PriceChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => setData(res.data));
  }, []);

  return (
    <>
      <h2>Historical Brent Oil Prices</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey="Date" hide />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Price"
            strokeWidth={1.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default PriceChart;
