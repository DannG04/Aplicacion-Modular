import React, {useState, useEffect, use} from "react";
import './UserDirectory.css';

const UserDirectory = () => {
    //Estado para almacenar usuarios
    const [users, setUsers] = useState([]);
    //Estado para manejar carga y errores
    const [loading, setLoading] = useState(true);
    //Estado para manejar errores
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('La respuesta de la red no fue correcta');

                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setUsers([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return (
        <div className="user-directory">
            <h2>Directorio de Usuarios</h2>
            {/*Contenido Dinamico Aquí*/}
            {loading && <p>Cargando usuarios...</p>}

            {error && <p className="error">Error: {error}</p>}
            
            {!loading && !error && (
                <ul>
                    {users.map(user => (
                        <li key={user.id} className="user-card">
                            <h3>{user.name}</h3>
                            <p><strong>Correo:</strong> {user.email}</p>
                            <p><strong>Sitio:</strong> {user.website}</p>
                        </li>
                    ))}
                </ul>
            )}

        </div>);
};

export default UserDirectory;