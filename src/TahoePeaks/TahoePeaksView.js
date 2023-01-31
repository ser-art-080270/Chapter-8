import React from "react";

export default function TahoePeaks({ list }) {
  return (
    <ul>
      {list.map((peak, i) => (
        <li key={i}>
          {peak.name} - {peak.elevation.toLocaleString()} ft
        </li>
      ))}
    </ul>
  );
}