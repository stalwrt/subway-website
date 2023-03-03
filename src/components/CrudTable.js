import React from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
	return (
		<div>
			<h3>Tabla de Datos</h3>
			<table>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Apellido</th>
						<th>Curp</th>
						<th>Fecha de Nacimiento</th>
						<th>Edad</th>
						<th>Telefono</th>
						<th>E-mail</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{data.length === 0 ? (
						<tr>
							<td colSpan="8">Sin datos</td>
						</tr>
					) : (
						data.map((el) => (
							<CrudTableRow
								key={el.id}
								el={el}
								setDataToEdit={setDataToEdit}
								deleteData={deleteData}
							/>
						))
					)}
				</tbody>
			</table>
		</div>
	);
};

export default CrudTable;
