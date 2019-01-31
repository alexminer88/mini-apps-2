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
      query: '',
      totalCount: 0,
      pageRange: 5,
      marginPagesDisplayed: 3,
      totalPages: 0,

      editable: false,

    }

    // Handlers
    this.getHistoricData = this.getHistoricData.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.editButton = this.editButton.bind(this);
  }

  getHistoricData(query, page) {
    axios.get(`/events?q=${query}&_page=${page}&_limit=10`)
      .then((data) => {

        this.setState({
          query: query,
          data: data.data,
          dataHeaders: data.headers,
          totalCount: Number(data.headers['x-total-count']),
          totalPages: (Number(data.headers['x-total-count']) / 10),
        });
      })
      .catch((err) => {
        throw err;
      });
    this.setState({

    });
  }

  handlePageClick(page) {

    console.log(page.selected + 1);
    this.getHistoricData(this.state.query, page.selected + 1)
  }
  
  editButton(desc) {
    // console.log('You underestimate my power', desc);
  }

  render() {
    return (
      <>
        <h1>Search Historic Database!</h1>  
        <SearchForm searchHandler={this.searchHandler} getHistoricData={this.getHistoricData}/>
        <ResultsTable
          historicData={this.state.data}
          pageCount={this.state.totalCount / 10}
          pageRangeDisplayed={this.state.pageRange}
          marginPagesDisplayed={this.state.marginPagesDisplayed}
          handlePageClick={this.handlePageClick}
          editButton={this.editButton}
        />
      </>
    )
  }
}

export default App;