import React from "react";

const ChangePassword = () => {
  return (
    <>
      <div className="form-control w-full mb-[25px]">
        <label className="label">
          <span className="text-base text-darkgray">Old Password</span>
        </label>
        <input
          type="password"
          placeholder="Enter your Old password"
          name="currentPassword"
          className="input input-bordered w-full"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.email}
        />
        <small className="text-[red] ml-1 mt-1 font-semibold">
          {/* <ErrorMessage name={"email"} /> */}
        </small>
      </div>
    </>
  );
};

export default ChangePassword;
