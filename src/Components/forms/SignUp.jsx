// import { ErrorResponse } from '@remix-run/router';
import { useState } from "react";
import React from "react";
import "../Modal.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

function SignUp({ closeModal }) {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(true);
            });
    };

    return (
        <>


            <form className="contact-form" onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="Fname">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="Fname"
                        required
                        autoComplete="off"
                        aria-required="true"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="Lname">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="Lname"
                        required
                        autoComplete="off"
                        aria-required="true"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        required
                        autoComplete="off"
                        aria-required="true"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="pass"
                        id="password"
                        required
                        autoComplete="off"
                        aria-required="true"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <button
                    className="btn btn-center"
                    id="sign_up"
                    type="submit"
                    value="Sign Up"
                >
                    Sign Up
                </button>

                {error &&
                    <div className="invalid-div">Invalid email or password</div>}
            </form>
        </>
    );
}

export default SignUp;
