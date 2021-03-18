import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
  }
  //initial phase

  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  shouldComponentUpdate(newProps, prevProps) {
    console.log("shouldComponentUpdate");
    return true;
  }
  componentWillUpdate(newProps, prevProps) {
    console.log("componentWillUpdate");
  }
  componentDidUpdate(newProps, prevProps) {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    const { name } = this.props;
    console.log("this is render method");
    return <div>{name}</div>;
  }
}

export default LifeCycle;
