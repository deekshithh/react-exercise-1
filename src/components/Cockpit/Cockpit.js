import React, {useEffect, useRef, useContext} from 'react';

import classes from './Cockpit.css'

import Aux from '../../hoc/Aux'
import AuthContext from '../../contexts/auth-context'


const Cockpit = (props) => {

	const buttonElemRef = useRef(null);
	const authContext = useContext(AuthContext);

	useEffect(()=>{
		console.log('Use effect is executing!');
	}, [props.personsLength])


	useEffect(()=>{
		buttonElemRef.current.click();
		console.log('Use effect is executing when the element mounted');
		return () => {
			// this is used as compontDidUnmount, when the hook is removed.
			console.log('Cleanup in useEffect')
		}
	}, [])

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
		    <button onClick={ ()=> props.togglePersons() } className={buttonClasses.join(' ')} ref={buttonElemRef} >Toggle Persons</button>
		    <button onClick={ ()=> authContext.login() } >Log In/ Out</button>
			</div>
		</Aux>
	);
}

export default React.memo(Cockpit);