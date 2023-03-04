import React from 'react';
import CrudApi from './components/CrudApi';
import CrudApp from './components/CrudApp';

function App() {
	return (
		<>
			<h1>Ejercicio con React</h1>
			<hr />
			<CrudApi />
			<hr />
			<CrudApp />
		</>
	);
}

export default App;
