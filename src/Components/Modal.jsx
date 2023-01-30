// import { ErrorResponse } from '@remix-run/router';
import { useState } from "react";
import React from "react";
import "./Modal.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import SignIn from "./forms/SignIn";
import SignUp from "./forms/SignUp";

function Modal({ closeModal }) {
  const [form, setForm] = useState(false);



  return (
    <>
      <div className="modal-body">
        <div className="modal-container">
          <div className="left-side" onClick={() => { setForm((!form)) }} >
            <img src="images/img-16.jpg" alt="ocean" />
          </div>

          <div className="right-side">
            <div>
              <h2 className="">Sign {form ? "Up" : "In"}</h2>
            </div>
            {form ? <SignIn /> : <SignUp />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
