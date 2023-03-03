import React, { useEffect, useState } from 'react';

const initailForm = {
	nombre: '',
	apellido: '',
	curp: '',
	fechaNac: '',
	edad: '',
	telefono: '',
	email: '',
	id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
	const [form, setForm] = useState(initailForm);

	useEffect(() => {
		if (dataToEdit) {
			setForm(dataToEdit);
		} else {
			setForm(initailForm);
		}
	}, [dataToEdit]);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			!form.nombre ||
			!form.apellido ||
			!form.curp ||
			!form.fechaNac ||
			!form.edad ||
			!form.telefono ||
			!form.email
		) {
			alert('Datos incompletos');
			return;
		}

		if (form.id === null) {
			createData(form);
		} else {
			updateData(form);
		}

		handleReset();
	};

	const handleReset = (e) => {
		setForm(initailForm);
		setDataToEdit(null);
	};

	return (
		<div>
			<h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="nombre"
					placeholder="Nombre"
					onChange={handleChange}
					value={form.nombre}
				/>
				<input
					type="text"
					name="apellido"
					placeholder="Apellido"
					onChange={handleChange}
					value={form.apellido}
				/>
				<input
					type="text"
					name="curp"
					placeholder="Curp"
					onChange={handleChange}
					value={form.curp}
				/>
				<input
					type="text"
					name="fechaNac"
					placeholder="Fecha de Nacimiento"
					onChange={handleChange}
					value={form.fechaNac}
				/>
				<input
					type="text"
					name="edad"
					placeholder="Edad"
					onChange={handleChange}
					value={form.edad}
				/>
				<input
					type="text"
					name="telefono"
					placeholder="Telefono"
					onChange={handleChange}
					value={form.telefono}
				/>
				<input
					type="text"
					name="email"
					placeholder="E-mail"
					onChange={handleChange}
					value={form.email}
				/>
				<input type="submit" value="Enviar" />
				<input type="reset" value="Limpiar" onClick={handleReset} />
			</form>
		</div>
	);
};

export default CrudForm;
