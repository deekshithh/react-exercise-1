import React, {Component} from 'react';

import PropTypes from 'prop-types'
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass';
import AuthContext from '../../../contexts/auth-context'

class Person extends Component {

	static contextType = AuthContext;

	// getDerivedStateFromProps(props, state){
	// 	console.log('[Persons.js] getDerivedStateFromProps');
	// 	return state;
	// }

	// componentWillReceiveProps(props){
	// 	console.log('[Persons.js] componentWillReceiveProps', props);
	// }

	constructor(props){
		super(props);
		this.lastInputElementRef = React.createRef();
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Persons.js] shouldComponentUpdate');
    return true
	}

	componentDidMount() {
    console.log('[App.js] componentDidMount');
    this.lastInputElementRef.current.focus();
  }

	getSnapshotBeforeUpdate(nextProps, nextState){
		console.log('[Persons.js] getSnapshotBeforeUpdate');
    return true;
	}

	render() {
		return (
    	<Aux>
    	  <p>{this.context.authenticated ? "Logged In" : "Not Logged In"}</p>
	      <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
	      <p>{this.props.children}</p>
	      <input type="text" onChange={this.props.changed} value={this.props.name} ref={this.lastInputElementRef} />
	    </Aux>
	  )
	}
}

Person.propTypes = {
	click: PropTypes.func,
	age: PropTypes.number,
	name: PropTypes.string
}

export default WithClass(Person, classes.Person);