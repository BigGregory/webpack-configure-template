import React, { Component } from 'react';
import $ from 'jquery';


class App extends Component {
  componentDidMount() {
    $('<h1 />')
      .text('Hello from Jquery')
      .css({
        textAlign: 'center'
      })
      .appendTo($('header'));
  }
  render() {
    return (
      <React.Fragment>
        <header></header>

        <hr />

        <div className="box">
          <h2 className="box-title">Box Title</h2>
          <p className="box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem debitis tempora error maiores
          dolorem! Fugit ab quo officiis cum incidunt.</p>
        </div>
      </React.Fragment>
    );
  }
}

export default App;