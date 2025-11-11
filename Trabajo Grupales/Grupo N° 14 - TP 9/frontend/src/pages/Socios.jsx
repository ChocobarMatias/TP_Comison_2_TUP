
import React, { useEffect, useState } from "react";
import clubService from "../services/clubService";
import "../styles/LoginPage.css";
import "../styles/DashboardPage.css";
import "../styles/HomePage.css";

function Socios() {
	const [socios, setSocios] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [searchId, setSearchId] = useState("");
	const [socioById, setSocioById] = useState(null);
	const [form, setForm] = useState({ nombre: "", dni: "", telefono: "", email: "", password: "" });
	const [formLoading, setFormLoading] = useState(false);
	const [formError, setFormError] = useState("");
	const [formSuccess, setFormSuccess] = useState("");
	const [editId, setEditId] = useState(null);

	useEffect(() => {
		fetchSocios();
	}, []);

	const fetchSocios = async () => {
		setLoading(true);
		try {
			const data = await clubService.getSocios();
			setSocios(data);
			setError("");
		} catch (err) {
			setError("Error al obtener socios");
		} finally {
			setLoading(false);
		}
	};

	const handleSearch = async (e) => {
		e.preventDefault();
		if (!searchId) return;
		setLoading(true);
		setSocioById(null);
		try {
			const data = await clubService.getSocioById(searchId);
			setSocioById(data);
			setError("");
		} catch (err) {
			setError("Socio no encontrado");
		} finally {
			setLoading(false);
		}
	};

	const handleFormChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		setFormLoading(true);
		setFormError("");
		setFormSuccess("");
		try {
			if (editId) {
				// Actualizar socio
				await clubService.updateSocio(editId, form);
				setFormSuccess("Socio actualizado correctamente");
			} else {
				// Crear socio
				await clubService.createSocio(form);
				setFormSuccess("Socio creado correctamente");
			}
			setForm({ nombre: "", dni: "", telefono: "", email: "", password: "" });
			setEditId(null);
			fetchSocios();
		} catch (err) {
			setFormError("Error al guardar socio");
		} finally {
			setFormLoading(false);
		}
	};

	const handleEdit = (socio) => {
		setForm({
			nombre: socio.nombre || "",
			dni: socio.dni || "",
			telefono: socio.telefono || "",
			email: socio.email || "",
			password: ""
		});
		setEditId(socio.id);
		setFormError("");
		setFormSuccess("");
	};

	const handleDelete = async (id) => {
		if (!window.confirm("¿Seguro que desea eliminar este socio?")) return;
		setLoading(true);
		try {
			await clubService.deleteSocio(id);
			fetchSocios();
		} catch (err) {
			setError("Error al eliminar socio");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="dashboard-container">
			<div className="dashboard-header">
				<h1>👥 Gestión de Socios</h1>
			</div>
			<div className="dashboard-content">
				<div className="welcome-card">
					<h2>{editId ? "Editar socio" : "Crear nuevo socio"}</h2>
					<form className="login-form" onSubmit={handleFormSubmit} style={{maxWidth: 400, margin: "0 auto"}}>
						<div className="form-group">
							<label htmlFor="nombre">Nombre</label>
							<input type="text" name="nombre" id="nombre" value={form.nombre} onChange={handleFormChange} required />
						</div>
						<div className="form-group">
							<label htmlFor="dni">DNI</label>
							<input type="text" name="dni" id="dni" value={form.dni} onChange={handleFormChange} required />
						</div>
						<div className="form-group">
							<label htmlFor="telefono">Teléfono</label>
							<input type="text" name="telefono" id="telefono" value={form.telefono} onChange={handleFormChange} required />
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input type="email" name="email" id="email" value={form.email} onChange={handleFormChange} required />
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input type="password" name="password" id="password" value={form.password} onChange={handleFormChange} required={!editId} />
						</div>
						<button className="login-button" type="submit" disabled={formLoading}>
							{editId ? "Actualizar" : "Crear"}
						</button>
					</form>
					{formError && <div className="error-message">{formError}</div>}
					{formSuccess && <div className="info-card" style={{marginTop: 10, color: 'green'}}>{formSuccess}</div>}
				</div>
				<div className="welcome-card" style={{marginTop: 30}}>
					<h2>Buscar socio por ID</h2>
					<form className="login-form" onSubmit={handleSearch} style={{maxWidth: 400, margin: "0 auto"}}>
						<div className="form-group">
							<label htmlFor="searchId">ID de Socio</label>
							<input
								type="text"
								id="searchId"
								value={searchId}
								onChange={e => setSearchId(e.target.value)}
								placeholder="Ingrese el ID"
							/>
						</div>
						<button className="login-button" type="submit" disabled={loading || !searchId}>
							Buscar
						</button>
					</form>
					{error && <div className="error-message">{error}</div>}
					{socioById && (
						<div className="info-card" style={{marginTop: 20}}>
							<h3>Socio encontrado</h3>
							<ul>
								<li><strong>ID:</strong> {socioById.id}</li>
								<li><strong>Nombre:</strong> {socioById.nombre}</li>
								<li><strong>Email:</strong> {socioById.email}</li>
								<li><strong>DNI:</strong> {socioById.dni}</li>
								<li><strong>Teléfono:</strong> {socioById.telefono}</li>
								{/* Agrega más campos si existen */}
							</ul>
						</div>
					)}
				</div>
				<div className="modules-section">
					<h2>Todos los socios</h2>
					{loading ? (
						<p>Cargando socios...</p>
					) : (
						<div style={{overflowX: "auto"}}>
							<table style={{width: "100%", borderCollapse: "collapse"}}>
								<thead>
									<tr style={{background: "#667eea", color: "white"}}>
										<th style={{padding: "10px"}}>ID</th>
										<th style={{padding: "10px"}}>Nombre</th>
										<th style={{padding: "10px"}}>Email</th>
										<th style={{padding: "10px"}}>DNI</th>
										<th style={{padding: "10px"}}>Teléfono</th>
										<th style={{padding: "10px"}}>Acciones</th>
									</tr>
								</thead>
								<tbody>
									{socios.map(socio => (
										<tr key={socio.id} style={{background: "white"}}>
											<td style={{padding: "10px", borderBottom: "1px solid #eee"}}>{socio.id}</td>
											<td style={{padding: "10px", borderBottom: "1px solid #eee"}}>{socio.nombre}</td>
											<td style={{padding: "10px", borderBottom: "1px solid #eee"}}>{socio.email}</td>
											<td style={{padding: "10px", borderBottom: "1px solid #eee"}}>{socio.dni}</td>
											<td style={{padding: "10px", borderBottom: "1px solid #eee"}}>{socio.telefono}</td>
											<td style={{padding: "10px", borderBottom: "1px solid #eee"}}>
												<button className="login-button" style={{marginRight: 8, padding: '6px 12px', fontSize: 14}} onClick={() => handleEdit(socio)}>
													Editar
												</button>
												<button className="logout-button" style={{padding: '6px 12px', fontSize: 14}} onClick={() => handleDelete(socio.id)}>
													Eliminar
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Socios;
