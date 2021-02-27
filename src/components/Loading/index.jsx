import React, { Component } from "react";
import { Spin, Space } from "antd";

export default class Loading extends Component {
  render() {
    return (
      <div>
        <Space size="middle">
          <Spin size="large" tip="Loading" />
        </Space>
      </div>
    );
  }
}
