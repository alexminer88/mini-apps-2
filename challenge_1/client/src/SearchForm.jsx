import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      query: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });

  }

  render() {
    return (
      <div className="search-bar">
        <label htmlFor="query"></label>
        <input type="text" id="query" onChange={this.handleInputChange}/>
        <button onClick={()=>{this.props.getHistoricData(this.state.query, 1)}}>Search!</button>
      </div>
    )
  }
}

export default SearchForm;