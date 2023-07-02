import React from 'react';

class LifecycleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "blue" })
    }, 1000);
  }

  componentDidUpdate() {
    // This method is called after the component updates
    document.getElementById("myDiv").innerHTML =
    `The updated favorite color is ${this.state.favoriteColor}`;
  }

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <div id="myDiv"></div>
      </div>
    );
  }
}

export default LifecycleExample;
