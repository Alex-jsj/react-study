import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, '222']
    })
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" />
          <button onClick={this.handleBtnClick.bind(this)}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
