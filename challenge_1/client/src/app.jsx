import React from 'react';
import SearchForm from './SearchForm.jsx';
import ResultsTable from './ResultsTable.jsx';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {

    }

    //handlers
    this.searchHandler = this.searchHandler.bind(this);
    this.getHistoricData = this.getHistoricData.bind(this);

  }

  searchHandler() {
    this.setState({

    });
  }

  getHistoricData() {
    // call api here
    console.log('hello');
    this.setState({

    });
  }

  render() {
    return (
      <div>
        <SearchForm searchHandler={this.searchHandler}/>
        General Kenobi
        <ResultsTable />
      </div>
    )
  }
}

export default App;