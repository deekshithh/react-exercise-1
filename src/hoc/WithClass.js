import React from 'react';

const WithClass = (WrappedComponent, className) => {
	return props => (
		<div className={className}>
			<WrappedComponent></WrappedComponent>
		</div>
	)
} 

export default WithClass;