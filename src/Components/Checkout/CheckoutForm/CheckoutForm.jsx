import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik } from "formik";
import { CreateSchema } from "./TransactionSchema";
import { CartContext } from "../../../Context/CartContext";
import { getFirestore } from "@firebase/firestore";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Swal from "sweetalert2";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const { cart, checkOutTotal, clearCheckOut } = useContext(CartContext);
  const history = useHistory();

  return (
    <>
      <Formik
        initialValues={{ name: "", lastname: "", phone: "", email: "" }}
        validationSchema={CreateSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const order = {
              buyer: {
                name: values.name,
                lastname: values.lastname,
                phone: values.phone,
                email: values.email,
              },
              items: cart,
              total: checkOutTotal(),
              date: Timestamp.fromDate(new Date()),
            };
            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, order).then(({ id }) =>
              Swal.fire({
                title: values.name + ", te agradecemos por tu compra",
                text: "Tu numero de ticket es: " + id,
                icon: "success",
                confirmButtonColor: "green",
                confirmButtonText: "Finalizar compra",
              }).then((result) => {
                if (result.isConfirmed) {
                  clearCheckOut();
                  history.push("/");
                }
              })
            );
            setSubmitting(false);
          }, 2500);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className="checkout-form">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleSubmit}>
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <br />
                    <h3
                      className="block text-lg font-medium text-gray-700"
                      style={{ textAlign: "center" }}
                    >
                      Realizar orden
                    </h3>
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        {/* Name */}
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Nombre
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                          />
                          <p className="text-red-500">
                            {errors.name && touched.name && errors.name}
                          </p>
                        </div>
                        {/* Apellido */}
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Apellido
                          </label>
                          <input
                            type="text"
                            name="lastname"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastname}
                          />
                          <p className="text-red-500">
                            {errors.lastname &&
                              touched.lastname &&
                              errors.lastname}
                          </p>
                        </div>

                        {/* Phone */}
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Nro de teléfono
                          </label>
                          <input
                            type="text"
                            name="phone"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                          />
                          <p className="text-red-500">
                            {errors.phone && touched.phone && errors.phone}
                          </p>
                        </div>

                        {/* Email */}
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Correo electrónico
                          </label>
                          <input
                            type="text"
                            name="email"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          <p className="text-red-500">
                            {errors.email && touched.email && errors.email}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <div className="div-buttons">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          {isSubmitting ? "Enviando" : "Enviar"}
                        </button>
                        <Link to="/cart">
                          <button
                            type="button"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            Volver
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default CheckoutForm;
