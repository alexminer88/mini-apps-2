import _ from 'underscore';
import React, { Component } from 'react';
import Chart from './Chart.jsx';
import CachingChart from './CachingChart.jsx'

const axios = require('axios');



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historicData: [],
      isLive: false,

    };

    this.toggleLive = this.toggleLive.bind(this);
  }

  toggleLive() {
    this.setState({
      isLive: !this.state.isLive,
    });
  }

  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then((data) => {
        let mappedData = _.map(data.data.bpi, (value, key) => {
          return [key, value];
        });
        this.setState({
          historicData: mappedData,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    return (
      <div>
        <h1>Bitcoin Historic Data</h1>
        {this.state.isLive ? (
          <>
            <Chart
              bitcoinData={this.state.historicData}
            />
            <button onClick={this.toggleLive}>Cached Mode</button>
          </>
        ) : (
          <>
            <CachingChart />
            <button onClick={this.toggleLive}>Live Mode</button>
          </>
        )
        }
      </div>
    );
  }
}

export default App;
