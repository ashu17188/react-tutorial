import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { StoreContext } from "../../store";
import UseNotifyHook from "../../hooks/UseNotifyHook";

const StudentInfoMain = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last name is required"),
    dob: Yup.string()
      .required("Date of Birth is required")
      .matches(
        /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        "Date of Birth must be a valid date in the format YYYY-MM-DD"
      ),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, control, handleSubmit, reset, formState, watch } =
    useForm(formOptions);
  const { errors } = formState;
  const { isSubmitting } = formState;
  const { fields, append, remove } = useFieldArray({
    name: "tickets",
    control,
  });

  // watch to enable re-render when ticket number is changed
  const numberOfTickets = watch("numberOfTickets");

  useEffect(() => {
    // update field array when ticket number changed
    const newVal = parseInt(numberOfTickets || 0);
    const oldVal = fields.length;
    if (newVal > oldVal) {
      // append tickets to field array
      for (let i = oldVal; i < newVal; i++) {
        append({ name: "", email: "" });
      }
    } else {
      // remove tickets from field array
      for (let i = oldVal; i > newVal; i--) {
        remove(i - 1);
      }
    }
  }, [numberOfTickets]);

  const { notifyUser } = UseNotifyHook(StoreContext);

  function onSubmit(data: any) {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    notifyUser("Successful  message");
    return new Promise<Boolean>((resolve) => {
      setTimeout(() => {
        resolve(false);
      }, 2000);
    });
  }

  return (
    <div className="card m-3">
      <h5 className="card-header">
        React Hook Form 7 - Form Validation Example
      </h5>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="form-group col">
              <label>Title</label>
              <select
                {...register("title")}
                className={`form-control ${errors.title ? "is-invalid" : ""}`}
              >
                <option value=""></option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
              </select>
              <div className="invalid-feedback">{errors.title?.message}</div>
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
              <div className="invalid-feedback">{errors.lastName?.message}</div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label>Date of Birth</label>
              <input
                type="date"
                {...register("dob")}
                className={`form-control ${errors.dob ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.dob?.message}</div>
            </div>
            <div className="form-group col">
              <label>Email</label>
              <input
                type="text"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label>Password</label>
              <input
                type="password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <div className="form-group col">
              <label>Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword")}
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.confirmPassword?.message}
              </div>
            </div>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              {...register("acceptTerms")}
              id="acceptTerms"
              className={`form-check-input ${
                errors.acceptTerms ? "is-invalid" : ""
              }`}
            />
            <label htmlFor="acceptTerms" className="form-check-label">
              Accept Terms & Conditions
            </label>
            <div className="invalid-feedback">
              {errors.acceptTerms?.message}
            </div>
          </div>
          {/* <div className="form-group">
            <label>Number of Tickets</label>
            <select
              {...register("numberOfTickets")}
              className={`form-control ${
                errors.numberOfTickets ? "is-invalid" : ""
              }`}
            >
              {["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            {fields.map((item, i) => (
              <div key={i} className="list-group list-group-flush">
                <div className="list-group-item">
                  <h5 className="card-title">Ticket {i + 1}</h5>
                  <div className="form-row">
                    <div className="form-group col-6">
                      <label>Name</label>
                      <input
                        {...register(`tickets.${i}.name`)}
                        type="text"
                        className={`form-control ${
                          errors.tickets?.[i]?.name ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.tickets?.[i]?.name?.message}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="invalid-feedback">
              {errors.numberOfTickets?.message}
            </div>
          </div> */}
          <div className="form-group">
            {/* <button type="submit" className="btn btn-primary mr-1">
              Register
            </button> */}
            <button disabled={isSubmitting} className="btn btn-primary mr-1">
              {isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              Register
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
      </div>
    </div>
  );
};

export default StudentInfoMain;
