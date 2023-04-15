import React from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import * as Yup from "yup";
import { ErrorMessage, Form, FormikProvider, useFormik } from "formik";
import { postRequest } from "../../Utils/Api";
import { toast } from "react-toastify";
import { MdOutlineModeEditOutline } from "react-icons/md";
import useAxiosPrivate from "../../Hooks/Auth/useAxiosPrivate";

const editAttendenceSchema = Yup.object().shape({
  editClockIn: Yup.string().required("Required"),
  editClockOut: Yup.string().required("Required"),
  editReason: Yup.string().required("Required"),
});

const EditAttendance = ({ attendenceId }) => {
  useAxiosPrivate();
  const { state } = useAuth();

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: editAttendenceSchema,
    initialValues: {
      editClockIn: "",
      editClockOut: "",
      editReason: "",
    },
    onSubmit: async (values, { resetForm }) => {
      // const response = await postRequest("/holiday", values);
      // if(response.status ===201){
      //   setHolidays([...holidays,response.data])
      //   resetForm()
      // }else{
      //   toast.error(response.data.error)
      // }
      console.log(values);
      console.log(attendenceId);
    },
  });
  if(!attendenceId){
    return <p>Loading...</p>
  }
  return (
    <div>
      <label
        htmlFor="add-holiday-modal"
        className="btn my-auto btn-sm text-white cursor-pointer text-base font-bold rounded-full"
      >
        <MdOutlineModeEditOutline />
      </label>

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
          <h3 className="font-semibold text-center text-xl">
            Edit Attendance Record
          </h3>
          {attendenceId}
          <p className="py-4">
            <FormikProvider value={formik}>
              <Form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col">
                  <label className="label">
                    <span className="text-base text-darkgray">
                      Clock In Time
                    </span>
                  </label>
                  <input
                    type="time"
                    name="editClockIn"
                    className="input input-bordered w-full"
                    placeholder="Name of festival"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.editClockIn}
                  />
                  <small className="text-[red] ml-1 mt-1 font-semibold">
                    <ErrorMessage name={"editClockIn"} />
                  </small>
                </div>
                <div className="flex flex-col mt-4">
                  <label className="label">
                    <span className="text-base text-darkgray">
                      Clock Out Time
                    </span>
                  </label>
                  <input
                    type="time"
                    name="editClockOut"
                    className="input input-bordered w-full"
                    placeholder="Name of festival"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.editClockOut}
                  />
                  <small className="text-[red] ml-1 mt-1 font-semibold">
                    <ErrorMessage name={"editClockOut"} />
                  </small>
                </div>
                <div className="flex flex-col mt-4">
                  <label className="label">
                    <span className="text-base text-darkgray">Reason</span>
                  </label>
                  <input
                    type="text"
                    name="editReason"
                    className="input input-bordered w-full"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.editReason}
                  />
                  <small className="text-[red] ml-1 mt-1 font-semibold">
                    <ErrorMessage name={"editReason"} />
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

export default EditAttendance;
