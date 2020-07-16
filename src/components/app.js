import React from "react";
import unsplash from "../api/unsplash"; // <- convention to put 3rd party libraries above components
import SearchBar from "./SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSearchSubmit = async (term) => {
    // arrow function used here to bind 'this' to App class.
    // this function property is passed as a props to a component in order
    // to send data from children back to parent. "term" represents the data
    // being passed in when called from the child and represents the data
    // being communicated from child to parent.
    console.log(term);
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    // return async data
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images;
      </div>
    );
  }
}

export default App;
