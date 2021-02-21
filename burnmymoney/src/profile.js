import React, { useEffect } from "react";
import Chart from "chartjs";

const Profile = () => {
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "Red",
              "Blue",
              "Yellow",
              "Green",
              "Purple",
              "Orange"
            ],
            borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            borderWidth: 1
          }
        ]
      }
    });
  });
  return (
    <div className="Profile">
      <canvas id="myChart" width="400" height="400" />
      <h2>Hello World</h2>
    </div>
  );
}

export default Profile;