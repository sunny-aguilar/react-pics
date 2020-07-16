import React from "react";
import axios from "axios"; // <- convention to put 3rd party libraries above components
import SearchBar from "./SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  async onSearchSubmit(term) {
    // this function property is passed as a props to a component in order
    // to send data from children back to parent. "term" represents the data
    // being passed in when called from the child and represents the data
    // being communicated from child to parent.
    console.log(term);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID 3URMeY4GVY4fzD7bRp7GSTO9qyACuFzNosZC6N-MvWo",
      },
    });

    // return async data
    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
