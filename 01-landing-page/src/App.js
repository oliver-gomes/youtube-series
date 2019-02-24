import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <header>
            <img src="./images/logo.png" width="100" alt="logo" />
            <div>
              <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>BLOG</li>
              </ul>
            </div>
          </header>
        </section>

        <section id="main">
          <div className="main-text">
            <span>kindself.</span> <br /> where we reinvent <br />
            the meaning of selfcare
          </div>

          <img src="./images/leaf.png" width="520" alt="leaf-main-image" />
        </section>
      </div>
    );
  }
}

export default App;
