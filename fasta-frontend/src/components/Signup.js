import React from "react";
import Head from 'next/head'
import { useForm } from "react-hook-form";
import "../fastaStyles.css";

const Signup = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = () => {};

  return (
    <div>
    <Head>
      <title>Fasta &gt; Signup </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="Container">
      <div className="FormContainer">
        <p className="AppTitle">Fasta</p>
        <form className="FormGroup" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="FormTitle">Create an Account</h1>
          <input className="Input"
            type="text"
            ref={register({ required: "Full name is required" })}
            name="fullname"
            placeholder="Full name"
          />
          {errors.fullname && (
            <div className="ValidationError">{errors.fullname.message}</div>
          )}
          <input className="Input"
            type="text"
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            })}
            name="email"
            placeholder="Email"
          />
          {errors.email && (
            <div className="ValidationError">{errors.email.message}</div>
          )}
          <input className="Input"
            type="text"
            ref={register({
              required: "Phone number is required",
            })}
            name="phone_number"
            placeholder="Phone number"
          />
          {errors.phone_number && (
            <div className="ValidationError">{errors.phone_number.message}</div>
          )}
          <input className="Input"
            type="text"
            ref={register({ required: "Password is required" })}
            name="password"
            placeholder="Password"
          />
          {errors.password && (
            <div className="ValidationError">{errors.password.message}</div>
          )}
          <input className="Input"
            type="text"
            ref={register({ required: "Confirm Password is required" })}
            name="confirm_password"
            placeholder="Confirm Password"
          />
          {errors.confirm_password && (
            <div className="ValidationError">{errors.confirm_password.message}</div>
          )}
          <p className="Text">
            By creating an account you agree to our <br /> Terms of Service and
            Privacy Policy.
          </p>
          <button className="FormButton">CONTINUE</button>
          <p className="Text">Already have an Account? </p>
        </form>
          <div className="FormLink">LOGIN</div>
      </div>
    </div>
    </div>
  );
};

export default Signup;