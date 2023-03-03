import React from 'react';

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
	let { nombre, apellido, curp, fechaNac, edad, telefono, email, id } = el;

	return (
		<tr>
			<th>{nombre}</th>
			<th>{apellido}</th>
			<th>{curp}</th>
			<th>{fechaNac}</th>
			<th>{edad}</th>
			<th>{telefono}</th>
			<th>{email}</th>
			<th>
				<button onClick={() => setDataToEdit(el)}>Editar</button>
				<button onClick={() => deleteData(id)}>Eliminar</button>
			</th>
		</tr>
	);
};

export default CrudTableRow;
