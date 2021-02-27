import React, { Component } from "react";
import Search from "./components/Search";
import ListCount from "./components/List/ListCount";
import ListAll from "./components/List/ListAll";
import { PageHeader } from "antd";
import "./App.less";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <PageHeader
          className="site-page-header title"
          title="Welcome"
          subTitle="Please select Direction and Timestamp or Search all data directly"
        />
        <Search />
        <ListCount />
        <ListAll />
      </div>
    );
  }
}
