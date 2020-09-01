import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux';
import WithClass from '../hoc/WithClass';

import AuthContext from '../contexts/auth-context'

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  authenticate = () =>{
    const authenticated = this.state.authenticated;
    this.setState({authenticated: !authenticated})
  }

  render() {
    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons click={this.deletePersonHandler} 
        changed={ this.nameChangedHandler } 
        persons={this.state.persons}
      />
    }
    
    return (
      <Aux>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.authenticate }}>
          <Cockpit personsLength={this.state.persons.length} 
            showPersons={this.state.showPersons} 
            togglePersons={this.togglePersonsHandler} />
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default WithClass(App, classes.App);
