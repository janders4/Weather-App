import React, { Component } from "react";
// import PropTypes from "prop-types";

class SearchBox extends Component {
  render() {
    return (
      <form>
        <label htmlFor="citySearch">City</label>
        <input type="text" id="citySearch" />
        <button type="submit">Search</button>
      </form>
    );
  }
}

//search_box.propTypes = {};

export default SearchBox;
