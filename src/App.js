import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class App extends Component {

  render() {
    return (

        <div className="App">
          <div>
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
              <div className="container">
                <div className="navbar-header page-scroll">
                  <Link className="navbar-brand page-scroll" to='/'>
                      <img src="/images/logo.png" height="30" />
                  </Link>
                </div>

                <div className="collapse navbar-collapse navbar-ex1-collapse">
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to='/new-series'>Series</Link>
                    </li>
                    <li>
                      <Link to='/about'>Sobre</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {this.props.children}
          </div>
        </div>
    );
  }
}

export default App;
