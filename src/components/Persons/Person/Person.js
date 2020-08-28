import React, {Component} from 'react';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {

	// getDerivedStateFromProps(props, state){
	// 	console.log('[Persons.js] getDerivedStateFromProps');
	// 	return state;
	// }

	// componentWillReceiveProps(props){
	// 	console.log('[Persons.js] componentWillReceiveProps', props);
	// }

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Persons.js] shouldComponentUpdate');
    return true
	}

	componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

	getSnapshotBeforeUpdate(nextProps, nextState){
		console.log('[Persons.js] getSnapshotBeforeUpdate');
    return true;
	}

	render() {
		return (
    	<Aux>
	      <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
	      <p>{this.props.children}</p>
	      <input type="text" onChange={this.props.changed} value={this.props.name} />
	    </Aux>
	  )
	}
}

export default WithClass(Person, classes.Person);