/** @format */

import { Component } from "react";
import "./search-box.style.css";

class SearchBox extends Component {
  render() {
    return <input type="search" onChange={this.props.onChangeHandler} className={`search-box ${this.props.className}`} placeholder={this.props.placeholder} />;
  }
}

export default SearchBox;
