import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/searchbox/searchbox.component'
class App extends Component{

  constructor() {
    super();
  
    this.state = {
      monsters:[],
      searchField:''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render(){
    if (this.state.monsters === []) {
      return null;
    }

    const { monsters, searchField } = this.state ;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return(
      <div className="App">

       {/* <input type='search' 
       placeholder='search monsters' 
       onChange={e => {
         this.setState({ searchField: e.target.value}, () =>{console.log(this.state)})
          }
        }/> */}
        
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters' 
          handleChange={this.handleChange}
        />

       <CardList monsters = {filteredMonsters} /> 
    </div>
    );
  }
}

export default App;
