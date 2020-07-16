import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  renter() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar />
      </div>
    );
  }
}

export default App;
