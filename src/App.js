import React from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Weather from "./components/Weather";
import './style.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <SearchBox />
          <Weather city="Leeds"/>
        </main>
      </div>
    );
  }
}

export default App;
