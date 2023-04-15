import React from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { BiPlus } from "react-icons/bi";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik";
import { postRequest } from "../../Utils/Api";
import { toast } from "react-toastify";

const holidaySchema = Yup.object().shape({
  leaveType: Yup.string().required("Required"),
  from: Yup.string().required("Required"),
  to: Yup.string().required("Required"),
  reason:Yup.string().required("Required")
});

const AddLeave = () => {
  const { state } = useAuth();

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: holidaySchema,
    initialValues: {
      leaveType: "",
      from: "",
      to: "",
      reason: "",
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values)
      // const response = await postRequest("/holiday", values);
      // if (response.status === 201) {
      //   setHolidays([...holidays, response.data]);
      //   resetForm();
      // } else {
      //   toast.error(response.data.error);
      // }
      // console.log(response);
    },
  });
  return (
    <div>
      <div className="mt-4 flex justify-end">
        <label
          htmlFor="add-holiday-modal"
          className="btn btn-primary text-white text-base font-bold rounded-full"
        >
          <BiPlus className="mr-2 text-lg" /> Add Leave
        </label>
      </div>

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
          <h3 className="font-semibold text-center text-xl">Add Leave</h3>
          <p className="py-4">
            <FormikProvider value={formik}>
              <Form onSubmit={formik.handleSubmit}>
                <div>
                  <label className="label">
                    <span className="text-base text-darkgray">Leave Type</span>
                  </label>
                  <select name="leaveType" id="" className="select select-bordered w-full" onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.leaveType}>
                    <option value="casual">Casual</option>
                    <option selected value="medical">Medical</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="label">
                    <span className="text-base text-darkgray">
                      From
                    </span>
                  </label>
                  <input
                    type="date"
                    name="from"
                    className="input input-bordered w-full"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.from}
                  />
                  <small className="text-[red] ml-1 mt-1 font-semibold">
                    <ErrorMessage name={"from"} />
                  </small>
                </div>
                <div className="mt-4">
                  <label className="label">
                    <span className="text-base text-darkgray">
                      To
                    </span>
                  </label>
                  <input
                    type="date"
                    name="to"
                    className="input input-bordered w-full"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.to}
                  />
                  <small className="text-[red] ml-1 mt-1 font-semibold">
                    <ErrorMessage name={"to"} />
                  </small>
                </div>
                <div className="mt-4">
                  <label className="label">
                    <span className="text-base text-darkgray">
                      Leave Reason
                    </span>
                  </label>
                  <Field name="reason" as="textarea" className="textarea w-full textarea-bordered" onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.reason}/>

                  <small className="text-[red] ml-1 mt-1 font-semibold">
                    <ErrorMessage name={"reason"} />
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

export default AddLeave;
