import React from "react";
import SearchBar from './SearchBar';

class App extends React.Component  {
  state = ({term : ''})


render() {
    return (
      <SearchBar query={this.onFormSubmit} />

    )
  }

};

export default App;
