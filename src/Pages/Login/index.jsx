import React, { useEffect } from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import { postRequest } from "../../Utils/Api";
import {useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";
import { useAuth } from "../../Context/AuthContext/AuthContext";

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required("Required"),
  password: Yup.string().min(6,'Too short password').max(18,'Too long password').required('Required')
})

const Login = () => {
  useEffect(()=>{
    if(localStorage.getItem('user')){
      navigate("/")
    }
  },[])
  const navigate = useNavigate()
  const {currentUser,setCurrentUser} = useAuth()
  const formik = useFormik({
    enableReinitialize:true,
    validationSchema:loginSchema,
    initialValues:{
      email:"",
      password:""
    },
    onSubmit: async (values,{resetForm}) =>{
      const response =await postRequest('/auth/login',values)
      if(response.status === 200){
        setCurrentUser(response.data)
        localStorage.setItem('user',JSON.stringify(response.data))
        toast.success('Sucessfully login')
        resetForm()
        navigate("/")
      }else{
        toast.error(response.data?.error || "Something went wrong")
      }
      debugger
    }
  })

  return (
    <>
      <div className="container mx-auto">
        <div className="w-80 mx-auto">
          <form onSubmit={formik.handleSubmit}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              className="input input-bordered w-full max-w-xs"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && <p className="text-xs text-[red] mt-1 ml-2">{formik.errors.email}</p> }
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              className="input input-bordered w-full max-w-xs"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && <p className="text-xs text-[red] mt-1 ml-2">{formik.errors.password}</p> }
          </div>
          <button type="submit" className="btn w-full mt-4">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
