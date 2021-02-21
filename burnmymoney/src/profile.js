import React, { useEffect } from "react";
import Chart from "chart.js";
import "./styles.css";


function get_Portfolio(key_id, secret_key, url) {
    // returns portfolio and shares
    var P_stockes = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
    var P_shares = [12, 19, 3, 5, 2, 3];
    var colors = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
    return P_stockes, P_shares, colors;
}

export default function profile() {
    var P_stockes, P_shares, colors = get_Portfolio(key_id, secret_key, url);
    
    useEffect(() => {
    const ctx = document.getElementById("pie");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: P_stockes,
        datasets: [
          {
            label: "Portfolio",
            data: P_shares,
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1
          }
        ]
      }
    });
  });
  return (
    <div className="profile">
      <canvas id="pie" width="400" height="400" />
    </div>
  );
}