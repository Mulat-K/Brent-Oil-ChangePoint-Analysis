import React from "react";
import PriceChart from "./components/PriceChart";
import EventTable from "./components/EventTable";
import ChangePointCard from "./components/ChangePointCard";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Brent Oil Price Analysis Dashboard</h1>
      <p>
        Bayesian Change Point Analysis of Brent crude oil prices and major global
        events.
      </p>

      <ChangePointCard />
      <PriceChart />
      <EventTable />
    </div>
  );
}

export default App;
