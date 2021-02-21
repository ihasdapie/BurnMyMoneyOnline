import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

function get_Portfolio(key_id, secret_key, url) {
    // returns portfolio and shares
    var P_stockes = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
    var P_shares = [12, 19, 3, 5, 2, 3];
    var colors = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
    var colors_hover = ["LightRed", "LightBlue", "LightYellow", "LightGreen", "LightPurple", "LightOrange"];
    
    var state = {
        labels: P_stockes,
        datasets: [
            {
            label: P_stockes,
            backgroundColor: colors,
            hoverBackgroundColor: colors_hover,
            data: P_shares
            }
        ]
        };
    return state
}



export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.key_id = 1;
        this.secret_key = 2;
        this.url = 3;
        this.state = get_Portfolio(this.key_id, this.secret_key, this.url);

        
      }
    
    
    render() {
    return (
      <div>

        <Doughnut
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
/*
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
    
    var data = {
        datasets: [{
            data: P_shares
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: P_stockes
    };

    var options = {
        backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1 
    };

    const ctx = document.getElementById("doughnut");
    var DChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });
    return (
        <div className="Profile">
        <h2>Profile</h2>
        <DChart/>
        <canvas id="pie" width="400" height="400" />
        </div>
    );
}

export default Profile;
*/
/*
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
*/