import React from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { BiPlus } from "react-icons/bi";
import * as Yup from "yup";
import { ErrorMessage, Form, FormikProvider, useFormik } from "formik";
import { postRequest } from "../../Utils/Api";
import { toast } from "react-toastify";

const holidaySchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
});

const AddHoliday = ({setHolidays,holidays}) => {
  const { state } = useAuth();

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: holidaySchema,
    initialValues: {
      name: "",
      date: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const response = await postRequest("/holiday", values);
      if(response.status ===201){
        setHolidays([...holidays,response.data])
        resetForm()
      }else{
        toast.error(response.data.error)
      }
      console.log(response)
    },
  });
  return (
    <div>
      {state.auth.role.includes("admin") && (
        <div className="mt-4 flex justify-end">
          <label
            htmlFor="add-holiday-modal"
            className="btn btn-primary text-white text-base font-bold rounded-full"
          >
            <BiPlus className="mr-2 text-lg" /> Add holiday
          </label>
        </div>
      )}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="add-holiday-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="add-holiday-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-semibold text-center text-xl">Add Holiday</h3>
          <p className="py-4">
            <FormikProvider value={formik}>
              <Form onSubmit={formik.handleSubmit}>
                <div>
                  <label className="label">
                    <span className="text-base text-darkgray">
                      Holiday Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full"
                    placeholder="Name of festival"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  <small className="text-[red] ml-1 mt-1 font-semibold">
                    <ErrorMessage name={"name"} />
                  </small>
                </div>
                <div className="mt-4">
                  <label className="label">
                    <span className="text-base text-darkgray">
                      Holiday Date
                    </span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered w-full"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.date}
                  />
                  <small className="text-[red] ml-1 mt-1 font-semibold">
                    <ErrorMessage name={"date"} />
                  </small>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-full px-14 mt-4 text-white hover:bg-btn-hover"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </FormikProvider>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddHoliday;
