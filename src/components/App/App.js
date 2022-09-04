// import Exampales from '../Exampales/Exampales';
// import StatefullExample from '../StatefullExample/StatefullExample';
import LifecycleExample from '../LifecycleExample/LifecycleExample';
import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    isShow: true
  }

  handleClick() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render() {

    return (
      <div className="App">
        <p>
          <button onClick={this.handleClick.bind(this)}>
            Show/Hide
          </button>
        </p>
        {
          this.state.isShow ? <LifecycleExample/>
            : <h2>Component is hidden</h2>
        }
      </div>
    );
  }
}

export default App;
