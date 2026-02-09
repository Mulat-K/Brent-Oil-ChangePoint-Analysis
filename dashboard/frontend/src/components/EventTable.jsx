import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/events";

function EventTable() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => setEvents(res.data));
  }, []);

  return (
    <>
      <h2>Major Oil Market Events</h2>
      <table width="100%" border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Event</th>
            <th>Description</th>
            <th>Expected Impact</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e, idx) => (
            <tr key={idx}>
              <td>{e.date}</td>
              <td>{e.event_type}</td>
              <td>{e.event_name}</td>
              <td>{e.description}</td>
              <td>{e.expected_impact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default EventTable;
