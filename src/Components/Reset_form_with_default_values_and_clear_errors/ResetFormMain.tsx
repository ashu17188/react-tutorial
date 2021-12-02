import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

//Reference: https://jasonwatmore.com/post/2021/09/23/react-hook-form-reset-form-with-default-values-and-clear-errors

const ResetFormMain = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    firstName: Yup.string().required("First name is required."),
    lastName: Yup.string().required("Last name is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  const [user, setUser] = useState({ title: "", firstName: "", lastName: "" });

  useEffect(() => {
    setTimeout(
      () => setUser({ title: "Mr.", firstName: "John", lastName: "James" }),
      1000
    );
  }, []);

  useEffect(() => {
    reset(user);
  }, [user]);

  const onSubmit = (data: any) => {
    alert("Success" + JSON.stringify(data, null, 4));
  };
  return (
    <>
      <div className="card m-3">
        <h5 className="card-header">
          React Hook Form - Reset Form with Default Values Example
        </h5>
        <div className="card-body">
          {user && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row">
                <div className="form-group col">
                  <label htmlFor="">Title</label>
                  <select
                    id=""
                    {...register("title")}
                    className={`form-control ${
                      errors.title ? "is-invalid" : ""
                    }`}
                  >
                    <option value=""></option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Ms">Ms</option>
                  </select>
                  <div className="invalid-feedback">
                    {errors.title?.message}
                  </div>
                </div>
                <div className="form-group col-5">
                  <label>First Name</label>
                  <input
                    type="text"
                    {...register("firstName")}
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.firstName?.message}
                  </div>
                </div>
                <div className="form-group col-5">
                  <label>Last Name</label>
                  <input
                    type="text"
                    {...register("lastName")}
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.lastName?.message}
                  </div>
                </div>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-1">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => reset()}
                  className="btn btn-secondary"
                >
                  Reset
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ResetFormMain;
