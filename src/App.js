import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/person/Person'
class App extends Component {
  state = {
    persons : ['Naruto Uzumaki','monkey D. luffy','GOn friesses']
  }
  render() {
    return (
      <div className="App">
        <Person name='naruto Uzumaki'><h4>Anime -Naruto</h4></Person>
        <Person name='monkey D. luffy'><h4>Anime -One Piece</h4></Person>
        <Person name='Gon friesses'><h4>Anime -Hunter X Hunter</h4></Person>
      </div>
    );
  }
}

export default App;
