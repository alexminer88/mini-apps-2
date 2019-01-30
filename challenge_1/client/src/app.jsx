import React from 'react';
import SearchForm from './SearchForm.jsx';
import ResultsTable from './ResultsTable.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      data: [],
      dataHeaders: {},
      totalCount: 0,
      pageRange: 5,
      marginPages: 5,
    }

    // Handlers
    this.searchHandler = this.searchHandler.bind(this);
    this.getHistoricData = this.getHistoricData.bind(this);
  }

  searchHandler() {
    this.setState({

    });
  }

  getHistoricData(query) {
    axios.get(`/events?q=${query}&_page=1&_limit=10`)
      .then((data) => {
        this.setState({
          data: data.data,
          dataHeaders: data.headers,
          totalCount: Number(data.headers['x-total-count']),
        });
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
    this.setState({

    });
  }

  render() {
    return (
      <div>
        <SearchForm searchHandler={this.searchHandler} getHistoricData={this.getHistoricData}/>
        General Kenobi
        <ResultsTable
          historicData={this.state.data}
          pageCount={this.state.totalCount / 10}
          pageRangeDisplayed={this.state.pageRange}
          marginPagesDisplayed={this.state.marginPages}
        />
      </div>
    )
  }
}

export default App;