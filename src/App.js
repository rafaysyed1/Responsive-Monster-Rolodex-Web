import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './Components/CardList/CardList';
import SearchInput from './Components/SearchInput/SearchInput.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchInput: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          monsters: users
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onSearchInputChange = (event) => {
    console.log(event.target.value);
    let searchInput = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchInput }
    }
    )
  }

  render() {
    const { monsters, searchInput } = this.state;
    const { onSearchInputChange } = this;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchInput)
    );
    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchInput 
        className = 'search-input'
        onChangeHandler = {onSearchInputChange} 
        placeHolderText = 'Search Monsters...' />

        <CardList monsters={filteredMonsters}  />
      </div>
    );
  }
}

export default App;


