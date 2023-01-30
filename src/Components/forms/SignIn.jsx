// import { ErrorResponse } from '@remix-run/router';
import { useState } from "react";
import React from "react";
import "../Modal.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

function SignIn({ closeModal }) {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = e => {
        e.preventDefault();
        console.log(email, password)

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
                    Sign In
                </button>

                {error &&
                    <div className="invalid-div">Invalid email or password</div>}
            </form>
        </>
    );
}

export default SignIn;
