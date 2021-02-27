import React, { Component } from "react";
import PubSub from "pubsub-js";
import Loading from "../../Loading";

export default class ListCount extends Component {
  state = {
    result: {},
    searched: false,
    isLoading: false,
    err: "",
  };
  componentDidMount() {
    this.token = PubSub.subscribe("searchByDirectAndTime", (_, stateObj) => {
      this.setState(stateObj);
    });
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
  render() {
    const { result, searched, isLoading, err } = this.state;
    const { weekdays, weekend, direction, timestamp } = result;
    let weekdaysTotal =
      searched && timestamp === "weekdays" ? weekdays + weekend : 0;
    let weekendTotal =
      searched && timestamp === "weekend" ? weekdays + weekend : 0;
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : err ? (
          <h3 style={{ color: "red" }}>{err} </h3>
        ) : (
          <div>
            <h3 className="text-center mb4 mt4 text-success">Show Filtered Data </h3>
            <table className="table bg-success">
              <thead>
                <tr>
                  <th scope="col">Timestamp</th>
                  <th scope="col">ExitCount</th>
                  <th scope="col">EntryCount</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Weekdays</th>
                  <th>
                    {`${direction}` === "exit" && `${weekdays}`
                      ? `${weekdays}`
                      : 0}
                  </th>
                  <th>
                    {`${direction}` === "entry" && `${weekdays}`
                      ? `${weekdays}`
                      : 0}
                  </th>
                  <th>{weekdaysTotal}</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row">Weekend</th>
                  <th>
                    {`${direction}` === "exit" && `${weekend}`
                      ? `${weekend}`
                      : 0}
                  </th>
                  <th>
                    {`${direction}` === "entry" && `${weekend}`
                      ? `${weekend}`
                      : 0}
                  </th>
                  <th>{weekendTotal}</th>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}
