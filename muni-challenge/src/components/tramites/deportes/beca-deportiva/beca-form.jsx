import { ErrorSpan } from "@/components/error-span";
import { create } from "@/services/tramites/create";
import { useState } from "react";
import { BecaFormField } from "@/components/tramites/deportes/beca-deportiva/beca-from-field";
import { tramiteSchema } from "@/schemas/tramite";
import { toast } from "sonner";
import { useLocation } from "wouter";

export const BecaForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    email: "",
    fechaNacimiento: "",
    deporte: "",
    promedio: 0,
    institucion: "",
    logros: "",
    archivo: null,
  });
  const [, setLocation] = useLocation();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tramiteValidation = tramiteSchema.safeParse(formData);

    if (!tramiteValidation.success) {
      const errors = tramiteValidation.error.format();
      setErrors(errors);
      return;
    }

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

    const loadingToast = toast.loading("Enviando solicitud...");
    const res = await create(formDataToSend);

    if (res.error) {
      toast.dismiss(loadingToast);
      toast.error(res.error);
      return;
    }
    
    toast.dismiss(loadingToast);
    toast.success("La solicitud de la beca fue creada correctamente.");
    setLocation("/tramites");
  };

  return (
    <form className="space-y-4 py-4" onSubmit={handleSubmit}>
      <BecaFormField
        label="Nombre completo"
        id="nombre"
        value={formData.nombre}
        onChange={handleChange}
        error={errors?.nombre?._errors[0]}
        placeholder="Ingrese su nombre completo"
        required
      />

      <BecaFormField
        label="DNI"
        id="dni"
        value={formData.dni}
        onChange={handleChange}
        error={errors?.dni?._errors[0]}
        placeholder="Ingrese su DNI"
        required
      />
      <BecaFormField
        label="Correo electrónico"
        id="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors?.email?._errors[0]}
        placeholder="correo@ejemplo.com"
        required
      />
      <BecaFormField
        label="Fecha de nacimiento"
        id="fechaNacimiento"
        type="date"
        value={formData.fechaNacimiento}
        onChange={handleChange}
        error={errors?.fechaNacimiento?._errors[0]}
        required
      />

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
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          value={formData.deporte}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione su deporte</option>
          <option value="futbol">Fútbol</option>
          <option value="baloncesto">Baloncesto</option>
          <option value="atletismo">Atletismo</option>
          <option value="natacion">Natación</option>
          <option value="tenis">Tenis</option>
        </select>
        <ErrorSpan error={errors?.deporte?._errors[0]} />
      </div>

      <BecaFormField
        label="Promedio académico"
        id="promedio"
        type="number"
        step="0.1"
        value={formData.promedio}
        onChange={handleChange}
        error={errors?.promedio?._errors[0]}
        placeholder="Ej: 8.5"
        required
      />
      <BecaFormField
        label="Institución educativa actual"
        id="institucion"
        value={formData.institucion}
        onChange={handleChange}
        error={errors?.institucion?._errors[0]}
        placeholder="Nombre de su escuela o universidad"
        required
      />
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
        <ErrorSpan error={errors?.logros?._errors[0]} />
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
          accept=".jpg,.jpeg,.mp4,.png"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          onChange={handleChange}
        />
        <ErrorSpan error={errors?.archivo?._errors[0]} />
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
