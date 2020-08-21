import React from 'react';

import classes from './Cockpit.css'

const Cockpit = (props) => {
	let buttonClasses = [classes.Button];
	if ( props.showPersons ) {
    buttonClasses.push(classes.Red);
  }
  else {
    buttonClasses.push(classes.Green);
  }

	let assignedClasses = [];
  if(props.persons && props.persons.length <= 2){
    assignedClasses.push(classes.red)
  }
  if(props.persons && props.persons.length <= 1){
    assignedClasses.push(classes.bold)
  }

	return(
		<div className={classes.Cockpit} >
			<h1>Hi, I'm a React App</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
	    <button onClick={ ()=> props.togglePersons() } className={buttonClasses.join(' ')} >Toggle Persons</button>
	    {props.children}
		</div>
	);
}

export default Cockpit;