import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className="ui form">
          <input type="text"></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;