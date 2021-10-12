import React from "react";
import './SearchBar.css'

class SearchBar extends React.Component {
  state = { term: "" };
  // you can also put this arrow function (below this line) within the form tag inline like this: onSubmit={event => this.onFormSubmit(event)}
  onFormSubmit = (event) => {
      event.preventDefault();
    
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div id="SearchBar" className="ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label>Search Instrumentals</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </div>
      </form>
    </div>
    );
  }
}

export default SearchBar;
