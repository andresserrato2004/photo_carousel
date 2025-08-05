// src/App.jsx
import { useEffect, useState, useCallback } from "react";
import Carousel from "./components/Carousel";

// Obtener la URL base de la API desde las variables de entorno
const API_BASE_URL = process.env.REACT_APP_API_URL;

function App() {
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState({}); // { [id]: { image, data, done } }

  // 2. Verifica si el usuario tiene foto y la guarda
  const checkPhoto = useCallback(async (id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/check-photo/${id}`);
      const data = await res.json();

      if (data.success) {
        setPhotos(prev => ({
          ...prev,
          [id]: {
            data: data.user,
            image: data.image || null,
            done: data.hasPhoto
          }
        }));

        // Si no tiene foto, reintentar en 30s
        if (!data.hasPhoto) {
          setTimeout(() => checkPhoto(id), 12000000);
        }
      }
    } catch (error) {
      console.error(`Error checking photo for ${id}:`, error);
    }
  }, []);

  // 1. Obtener resumen de usuarios
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/users/summary`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setUsers(data.users);
          data.users.forEach(user => checkPhoto(user.id));
        }
      })
      .catch(err => console.error("Error fetching summary:", err));
  }, [checkPhoto]);

  // 3. Filtrar usuarios que ya tienen foto
  const usersWithPhotos = Object.values(photos).filter(p => p.done && p.image);

  return (
    <div>
      {usersWithPhotos.length > 0 ? (
        <Carousel graduates={usersWithPhotos} />
      ) : (
        <p style={{ textAlign: "center", marginTop: "3rem" }}>Cargando galería...</p>
      )}
    </div>
  );
}

export default App;
