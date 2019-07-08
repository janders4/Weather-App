import React from "react";
import Header from "./components/Header";
import Search_box from "./components/Search_box";
import Weather from "./components/Weather";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Search_box />
          <Weather />
        </main>
      </div>
    );
  }
}

export default App;
