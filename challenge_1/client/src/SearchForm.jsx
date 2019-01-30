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
    console.log(event.target);
    this.setState({
      // query: this.event.value
      [event.target.id]: event.target.value,
    });
  }

  render() {
    return (
      <div className="search-bar">
        <label htmlFor="query"></label>
        <input type="text" id="query" onChange={this.handleInputChange}/>
        <button onClick={()=>{}}>Search!</button>
      </div>
    )
  }
}

export default SearchForm;