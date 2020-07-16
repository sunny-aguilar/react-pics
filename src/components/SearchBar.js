import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    // 'this' keyword requires that we use an arrow function otherwise this is
    // undefined. Arrow function allows it to point to instance of SearchBar
    // instance
    console.log(this.state.term);
    // send child data back to parent
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
        <div role="listitem" className="item">
          <div className="ui blue horizontal label">
            <i className="power cord icon"></i>API Powered by: Unsplash
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
