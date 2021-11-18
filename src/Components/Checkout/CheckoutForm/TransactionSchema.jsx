import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
    .matches(phoneRegExp, "El número no es válido. Solo números y guiones")
    .max(15, "Demasiado largo")
    .required("Debes ingresar un número de teléfono"),
  email: Yup.string()
    .email("Debe ser un mail válido")
    .max(255)
    .required("Debes ingresar un email"),
});

export { CreateSchema };
