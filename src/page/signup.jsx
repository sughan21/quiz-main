import React from "react";

import "./style/sign-up.css";

// function

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../firebase/index";
// import { useNavigate } from "react-router-dom";
import { useUser } from "../Context.jsx";

const SignUp = () => {
  const { setFormFields, formFields, setUser, logoutUser, userEmail } =
    useUser();
  const { displayName, email, password, confirmPassword } = formFields;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not Match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });
      if (userDocRef) {
        alert("SignUp Success");
        navigate("/login");
      }
      //   setFormFields(formFields);
      // setFormFields({
      //   displayName: "",
      //   email: "",
      //   password: "",
      //   confirmPassword: "",
      // });
    } catch (err) {
      console.log("Something Happened", err.message);
      console.log(err.code);
      if (err.code === "auth/email-already-in-use") {
        alert("Email Already Exists Please use alternate Email");
      } else if (err.code === "auth/weak-password") {
        alert("Password must be at least 6 characters long");
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <form className="sign-up-form" onSubmit={submitHandler}>
        <div className="sign-head">
          Signup
          <span className="signup-width"></span>
        </div>
        <input
          type="text"
          id="display-name"
          name="displayName"
          required
          onChange={changeHandler}
          placeholder="Username"
          className="sign-user"
        ></input>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={changeHandler}
          placeholder="email"
          className="sign-email"
        ></input>
        <input
          type="password"
          id="password"
          name="password"
          required
          onChange={changeHandler}
          placeholder="Password"
          className="sign-pa"
        ></input>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
          onChange={changeHandler}
          placeholder="Confirm Password"
          className="sign-copa"
        ></input>

        <button className="sign-btn">Signup</button>
      </form>
    </>
  );
};

export default SignUp;
