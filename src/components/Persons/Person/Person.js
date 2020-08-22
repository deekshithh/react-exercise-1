import React, {Component} from 'react';

import classes from './Person.css';

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
    return true;
	}

	getSnapshotBeforeUpdate(nextProps, nextState){
		console.log('[Persons.js] getSnapshotBeforeUpdate');
    return true;
	}

	render(
		return (
    	<div className={classes.Person}>
	      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
	      <p>{props.children}</p>
	      <input type="text" onChange={props.changed} value={props.name} />
	    </div>
	  )
	);
}

export default Person;