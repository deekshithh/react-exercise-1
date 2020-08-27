import React, {useEffect} from 'react';

import classes from './Cockpit.css'

import Aux from '../../hoc/Aux'

const Cockpit = (props) => {

	useEffect(()=>{
		console.log('Use effect is executing!');
	}, [props.personsLength])

	let buttonClasses = [classes.Button];
	if ( props.showPersons ) {
    buttonClasses.push(classes.Red);
  }
  else {
    buttonClasses.push(classes.Green);
  }

	let assignedClasses = [];
  if(props.personsLength <= 2){
    assignedClasses.push(classes.red)
  }
  if(props.personsLength <= 1){
    assignedClasses.push(classes.bold)
  }

	return(
		<Aux>
			<div>Test</div>
			<div className={classes.Cockpit} >
				<h1>Hi, I'm a React App</h1>
				<p className={assignedClasses.join(' ')}>This is really working!</p>
		    <button onClick={ ()=> props.togglePersons() } className={buttonClasses.join(' ')} >Toggle Persons</button>
			</div>
		</Aux>
	);
}

export default React.memo(Cockpit);