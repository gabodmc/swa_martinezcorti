import * as Yup from "yup";

const CreateSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "El nombre no puede tener menos de 2 caracteres")
    .max(60, "Demasiado largo")
    .required("Debes ingresar un nombre"),
    lastname: Yup.string()
    .min(2, "El apellido no puede tener menos de 2 caracteres")
    .max(60, "Demasiado largo")
    .required("Debes ingresar un apellido"),
  phone: Yup.string()
    .min(8, "El numero no puede tener menos de 8 caracteres")
    .max(60, "Demasiado largo")
    .required("Debes ingresar un número de teléfono"),
  email: Yup.string()
    .email("Debe ser un mail válido")
    .max(255)
    .required("Debes ingresar un email"),
});

export { CreateSchema };
