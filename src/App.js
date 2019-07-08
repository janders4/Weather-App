import React from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Weather from "./components/Weather";
import "./style.css";

class App extends React.Component {
  state = {
    city: "Leeds"
  };
  render() {
    return (
      <div className="page">
        <header>
          <Header />
        </header>
        <main>
          <SearchBox updateCity={this.updateCity} />
          <Weather city={this.state.city} />
        </main>
      </div>
    );
  }
  updateCity = city => {
    this.setState({ city });
  };
}

export default App;
