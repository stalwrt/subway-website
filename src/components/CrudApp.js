import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDB = [
	{
		id: 1,
		nombre: 'Leonardo Azael',
		apellido: 'Hernández Flores',
		curp: 'HEFL001106HCSRLNA7',
		fechaNac: '06/11/00',
		edad: '22',
		telefono: '9631620492',
		email: 'leohdzflores286@gmail.com',
	},
	{
		id: 2,
		nombre: 'Miguel Alfonso',
		apellido: 'Lopez Perez',
		curp: 'LPMA002311HCSRLNA7',
		fechaNac: '11/12/00',
		edad: '21',
		telefono: '9631112233',
		email: 'miguel126@gmail.com',
	},
	{
		id: 3,
		nombre: 'Maria Angela',
		apellido: 'Hernández Meza',
		curp: 'HMMA001106HCSRLNA7',
		fechaNac: '06/11/03',
		edad: '19',
		telefono: '9631648971',
		email: 'marimeza@gmail.com',
	},
	{
		id: 4,
		nombre: 'Marisol',
		apellido: 'Monterubio Alvarez',
		curp: 'MAM000817HCSRLNA7',
		fechaNac: '11/01/02',
		edad: '20',
		telefono: '9637845655',
		email: 'marimari111@gmail.com',
	},
	{
		id: 5,
		nombre: 'Gerardo Antonio',
		apellido: 'Hernández Morales',
		curp: 'HMGA000811HCSRLNA7',
		fechaNac: '11/08/00',
		edad: '22',
		telefono: '9632334108',
		email: 'antonimorales@gmail.com',
	},
];

const CrudApp = () => {
	const [db, setDb] = useState(initialDB);
	const [dataToEdit, setDataToEdit] = useState(null);

	const createData = (data) => {
		data.id = Date.now();
		setDb([...db, data]);
	};

	const updateData = (data) => {
		let newData = db.map((el) => (el.id === data.id ? data : el));
		setDb(newData);
	};

	const deleteData = (id) => {
		let isDelete = window.confirm(`¿Estas seguro de eliminar el registro con el id '${id}'?`);

		if (isDelete) {
			let newData = db.filter((el) => el.id !== id);
			setDb(newData);
		} else {
			return;
		}
	};

	return (
		<div>
			<h2>Datos Personales</h2>
			{/* <article className="grid-1-2"> */}
			<CrudForm
				createData={createData}
				updateData={updateData}
				dataToEdit={dataToEdit}
				setDataToEdit={setDataToEdit}
			/>
			<CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
			{/* </article> */}
		</div>
	);
};

export default CrudApp;
