import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  onInputChange() {}

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
