import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import _ from 'underscore';
import Chart from './Chart.jsx';
import axios from 'axios';

class CachingChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: '',
      data: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    // https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-11-06&end=2019-01-20

    // axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${this.state.start}&end=${this.state.end}`)
    axios.get(`/start/${this.state.start}/end/${this.state.end}`)
      .then((data) => {
        console.log(data);
        let mappedData = _.map(data.data.bpi, (value, key) => {
          return [key, value];
        });
        this.setState({
          data: mappedData,
        });

      })
      .catch((err) => {
        throw err;
      });
  }



  render() {

    return (
      <div>
        hello
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="startDate">
            Start Date:
            <input type="text" id="start" onChange={this.handleChange}/>
          </label>
          <label htmlFor="endDate">
            End Date:
            <input type="text" id="end" onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Chart bitcoinData={this.state.data}/>
      </div>
    )
  }
}

export default CachingChart;