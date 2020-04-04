import React, { Component } from 'react';
import Cardlist from './Cardlist';
import Searchbox from './SearchBox';
import Scroll from './Scroll';
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => {
        return Response.json();
      })
      .then(users => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return (
        <h1
          style={{
            fontSize: '200px',
            marginTop: '10rem',
            justifyItems: 'center'
          }}
        >
          .........Loading
        </h1>
      );
    } else {
      return (
        <div style={{ textAlign: 'center' }}>
          <h1>ROBOFRIENDS</h1>
          <Searchbox searchChange={this.onSearchChange} />
          <Scroll>
            <Cardlist robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
