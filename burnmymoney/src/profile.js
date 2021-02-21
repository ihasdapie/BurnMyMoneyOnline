import React, { useEffect } from "react";
import Chart from "chartjs";


function get_Portfolio(key_id, secret_key, url) {
    // returns portfolio and shares
    var P_stockes = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
    var P_shares = [12, 19, 3, 5, 2, 3];
    var colors = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
    return P_stockes, P_shares, colors;
}

const Profile = () => {
    var key_id = 1;
    var secret_key = 2
    var url = 3
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
    <div className="Profile">
      <h2>Profile</h2>
      <canvas id="pie" width="400" height="400" />
    </div>
  );
}

export default Profile;