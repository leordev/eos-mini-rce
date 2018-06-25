import React, { Component } from 'react';
import logo from './logo.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">EOS Mini RCE</h1>
        </header>

        <div className="container">
          <p className="has-margin-top">
            <span>Current Block: 1920</span>
            <a className="button is-success" href="#">
              <span className="icon">
              </span>
              <span>
                Refresh
              </span>
            </a>
          </p>

          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Timestamp</th>
                <th>Actions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123</td>
                <td>06/25/2018 19:54:59.000</td>
                <td>9</td>
                <td>
                  <a class="button">
                    <span class="icon is-small">
                      <i class="fas fa-search"></i>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>06/25/2018 19:54:59.000</td>
                <td>9</td>
                <td>
                  <a class="button">
                    <span class="icon is-small">
                      <i class="fas fa-search"></i>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>06/25/2018 19:54:59.000</td>
                <td>9</td>
                <td>
                  <a class="button">
                    <span class="icon is-small">
                      <i class="fas fa-search"></i>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>06/25/2018 19:54:59.000</td>
                <td>9</td>
                <td>
                  <a class="button">
                    <span class="icon is-small">
                      <i class="fas fa-search"></i>
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>


        </div>

      </div>
    );
  }
}

export default App;
