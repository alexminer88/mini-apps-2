import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import _ from 'underscore';

class CachedChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 2019,
      month: '',
      days: {
        January: 31,
        February: 29,
        March: 31,
        May: 30,
        June: 31,
        July: 30,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    let days = {
      January: 31,
      February: 29,
      March: 31,
      May: 30,
      June: 31,
      July: 30,
      August: 31,
      September: 30,
      October: 31,
      November: 30,
      December: 31,
    };
    return (
      <div>
        hello
        <form onSubmit={this.handleSubmit}>
          <select name="year" id="year"> 
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
          </select>
          <select name="month" id="month">
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select name="day" id="day">
          {}
          </select>
        </form>
      </div>
    )
  }
}

export default CachedChart;