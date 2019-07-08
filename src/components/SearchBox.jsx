import React, { Component } from "react";
// import PropTypes from "prop-types";

class SearchBox extends Component {
  state = {
    city: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="citySearch">City</label>
        <input
          type="text"
          id="citySearch"
          value={this.state.city}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Search</button>
      </form>
    );
  }
  handleChange = event => {
    const text = event.target.value;
    this.setState({
      city: text
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateCity(this.state.city);
    this.setState({ city: "" });
  };
}

//search_box.propTypes = {};

export default SearchBox;
