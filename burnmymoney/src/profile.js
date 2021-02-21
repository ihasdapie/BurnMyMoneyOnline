import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

async function getAccount(alpaca) {
    const account = await alpaca.getAccount();
    return account;
    
  }

function get_Portfolio(alpaca) {

    
    
    // returns portfolio and shares
    var P_stockes = ["GME", "NOK", "AMC", "VCNX", "UAMY", "WATT"];
    var P_shares = [12001.45, 19001.33, 3340.6, 9659.2, 2017.7, 3320.2];
    var colors = ["#5F9EA0", "#FFC0CB", "#E0FFFF", "#66CDAA", "#87CEFA", "#FF7F50"];
    var colors_hover = ["#2F4F4F", "#2F4F4F", "#2F4F4F", "#2F4F4F", "#2F4F4F", "#2F4F4F"];
    
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
        //this.key_id = ;
        //this.secret_key = ;
        //const Alpaca = require('@alpacahq/alpaca-trade-api');
        const alpaca = 1;//new Alpaca({
        //    keyId: this.key_id,
        //    secretKey: this.secret_key,
         //   paper: true
        //});
        //var account = getAccount(alpaca);
        //this.alpaca = alpaca;
        //this.account = account;
        //this.url = 3;
        this.state = get_Portfolio(alpaca);
        //this.buying_power = this.account.buying_power;
        //console.log(account)
        //console.log("123")
        //console.log(account.buying_power)
      }
    
    
    render() {
    return (
      <div>
        
        <Doughnut
          data={this.state}
          options={{
            title:{
              display:true,
              fontColor: "White",
              text: 'Your Portfolio',
              fontSize:40
            },
            legend:{
              display:true,
              position:'right',
              labels: {
                // This more specific font property overrides the global property
                fontColor: 'White'
                }
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