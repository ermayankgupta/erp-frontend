import React, { useEffect } from "react";
import { useFormik, Form, FormikProvider, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getRequest, postRequest } from "../../Utils/Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { Logo } from "../../constants/images";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too short password")
    .max(18, "Too long password")
    .required("Required"),
});

const Login = () => {
  const { dispatch, state } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(state.auth.token) {
      navigate('/')
    }
  }, [state.auth.token,navigate]);
  
  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: loginSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const response = await postRequest("/auth/login", values);
      dispatch({ type: "login", payload: response.data });
      if (state.isAuthenticate) {
        const features = await getRequest("/features/");
        dispatch({ type: "features", payload: features.data[0] });
        toast.success("Sucessfully login");
        resetForm();
        navigate("/");
      } else {
        toast.error(response.data?.error || "Something went wrong");
      }
    },
  });

  return (
    <>
      <div className="container mx-auto min-h-screen flex items-center justify-center">
        <div>
          <img src={Logo} alt="" className="mx-auto mb-8" />
          <div className="bg-white lg:p-[30px] p-[15px] mx-2 lg:mx-0 border border-slate-200 rounded-lg max-w-[480px]">
            <FormikProvider value={formik}>
              <Form onSubmit={formik.handleSubmit}>
                <p className="text-2xl font-medium text-darkgray text-center mb-1">
                  Login
                </p>
                <p className="text-lg text-gray2 text-center mb-6">
                  Access to our dashboard
                </p>

                <div className="form-control w-full mb-[25px]">
                  <label className="label">
                    <span className="text-base text-darkgray">
                      Email Address
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                    className="input input-bordered w-full"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  <small className="text-[red] ml-1 mt-1 font-semibold">
                    <ErrorMessage name={"email"} />
                  </small>
                </div>
                <div className="form-control w-full mb-[25px]">
                  <div className="flex justify-between items-center">
                    <label className="label">
                      <span className="text-base text-darkgray">Password</span>
                    </label>
                    <p className="text-lightgray text-sm mb-0">
                      Forget Password?
                    </p>
                  </div>

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    className="input input-bordered w-full"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  <small className="text-[red] ml-1 mt-1 font-semibold">
                    <ErrorMessage name={"password"} />
                  </small>
                </div>
                <button
                  type="submit"
                  className="btn w-full text-white mt-4 bg-gradient-to-r from-[#ff9b44] to-[#fc6075] border-0"
                >
                  Login
                </button>
              </Form>
            </FormikProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
