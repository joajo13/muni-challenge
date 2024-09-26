import { createTramite } from "@/services/tramites/createTramite";
import { useState } from "react";

export const BecaForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    email: "",
    fechaNacimiento: "",
    deporte: "",
    promedio: "",
    institucion: "",
    logros: "",
    archivo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("nombre", formData.nombre);
    formDataToSend.append("dni", formData.dni);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("fechaNacimiento", formData.fechaNacimiento);
    formDataToSend.append("deporte", formData.deporte);
    formDataToSend.append("promedio", formData.promedio);
    formDataToSend.append("institucion", formData.institucion);
    formDataToSend.append("logros", formData.logros);
    formDataToSend.append("archivo", formData.archivo);
     
    createTramite(formDataToSend);
  };

  return (
    <form className="space-y-4 py-4" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="nombre"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Nombre completo
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          placeholder="Ingrese su nombre completo"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="dni"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          DNI
        </label>
        <input
          type="text"
          id="dni"
          name="dni"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          placeholder="Ingrese su DNI"
          value={formData.dni}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          placeholder="correo@ejemplo.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="fechaNacimiento"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Fecha de nacimiento
        </label>
        <input
          type="date"
          id="fechaNacimiento"
          name="fechaNacimiento"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          value={formData.fechaNacimiento}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="deporte"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Deporte
        </label>
        <select
          id="deporte"
          name="deporte"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          value={formData.deporte}
          onChange={handleChange}
        >
          <option value="">Seleccione su deporte</option>
          <option value="futbol">Fútbol</option>
          <option value="baloncesto">Baloncesto</option>
          <option value="atletismo">Atletismo</option>
          <option value="natacion">Natación</option>
          <option value="tenis">Tenis</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="promedio"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Promedio académico
        </label>
        <input
          type="number"
          id="promedio"
          name="promedio"
          step="0.01"
          min="0"
          max="10"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          placeholder="Ej: 8.5"
          value={formData.promedio}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="institucion"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Institución educativa actual
        </label>
        <input
          type="text"
          id="institucion"
          name="institucion"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          placeholder="Nombre de su escuela o universidad"
          value={formData.institucion}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="logros"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Logros deportivos destacados
        </label>
        <textarea
          id="logros"
          name="logros"
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none resize-none"
          placeholder="Describa sus principales logros deportivos"
          value={formData.logros}
          onChange={handleChange}
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="archivo"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Archivo multimedia (video de desempeño o documento de respaldo)
        </label>
        <input
          type="file"
          id="archivo"
          name="archivo"
          accept="video/*,application/pdf"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-cyan-600 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-800 focus:outline-none"
      >
        Enviar solicitud
      </button>
    </form>
  );
};
