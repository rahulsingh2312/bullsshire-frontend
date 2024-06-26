'use client'
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBo0I9TmyEnDgJjXm__CeCjygbjV-mr3ho",

  authDomain: "bullsshire.firebaseapp.com",

  projectId: "bullsshire",

  storageBucket: "bullsshire.appspot.com",

  messagingSenderId: "769524937575",

  appId: "1:769524937575:web:ff568046aec7c0e2b875c2",

  measurementId: "G-6856QVV3DV"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = () => {
    // Inputs
    const [mynumber, setnumber] = useState("");
    const [otp, setotp] = useState("");
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState(null); // Initialize final as null

    // Sent OTP
    const signin = () => {
        if (mynumber === "" || mynumber.length < 10) return;

        let verify = auth.RecaptchaVerifier(
            "recaptcha-container"
        );
        auth.signInWithPhoneNumber(mynumber, verify)
            .then((result) => {
                setfinal(result);
                alert("Code sent");
                setshow(true);
            })
            .catch((err) => {
                alert(err);
                window.location.reload();
            });
    };

    // Validate OTP
    const ValidateOtp = () => {
        if (!otp || !final) return;
        final.confirm(otp)
            .then((result) => {
                // Success
            })
            .catch((err) => {
                alert("Wrong code");
            });
    };

    return (
        <div className="text-black" style={{ marginTop: "200px" }}>
            <center>
                <div
                    style={{
                        display: !show ? "block" : "none",
                    }}
                >
                    <input
                        value={mynumber}
                        onChange={(e) => {
                            setnumber(e.target.value);
                        }}
                        placeholder="Phone number"
                    />
                    <br />
                    <br />
                    <div id="recaptcha-container"></div>
                    <button
                        className="text-black p-2 border-white bg-slate-50"
                        onClick={signin}
                    >
                        Send OTP
                    </button>
                </div>
                <div
                    style={{
                        display: show ? "block" : "none",
                    }}
                >
                    <input
                        type="text"
                        placeholder={"Enter your OTP"}
                        onChange={(e) => {
                            setotp(e.target.value);
                        }}
                    ></input>
                    <br />
                    <br />
                    <button onClick={ValidateOtp}>Verify</button>
                </div>
            </center>
        </div>
    );
};

export default Login;
