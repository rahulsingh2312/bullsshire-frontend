'use client'
// import Illu from '/illustration.svg'
// import img from 'next/img'
import {playfairDisplaySC , redRose } from '../font'
import Link from 'next/link';
import Bottomnav from '../bottomnav/bottomnav'
import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyBo0I9TmyEnDgJjXm__CeCjygbjV-mr3ho",

  authDomain: "bullsshire.firebaseapp.com",

  projectId: "bullsshire",

  storageBucket: "bullsshire.appspot.com",

  messagingSenderId: "769524937575",

  appId: "1:769524937575:web:ff568046aec7c0e2b875c2",

  measurementId: "G-6856QVV3DV"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



function Dashboard() {







  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        saveUserDataToFirestore(authUser);
        setUser(authUser);
        // Store user data in Firestore

//         router.push("/dashboard/profile");
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // User signed in
        const user = result.user;
        setUser(user);
        saveUserDataToFirestore(user);
        //   console.log("User data successfully stored in Firestore!");
        // }
        sessionStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  const saveUserDataToFirestore = async (user) => {
    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          // You can add more user data as needed
        });
        console.log("User data successfully stored in Firestore!");
      } else {
        console.log("User already exists in Firestore!");
      }
    } catch (error) {
      console.error("Error storing user data: ", error);
    }
  };
  const handlePhoneLogin = () => {
    const provider = new firebase.auth.PhoneAuthProvider();
    // Prompt the user to enter their phone number
    const phoneNumber = prompt('Enter your phone number with country code');
    if (phoneNumber) {
        const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            size: 'invisible',
            callback: (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // handlePhoneSignIn();
            },
        });

        signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                const verificationCode = prompt('Enter the verification code sent to your phone');
                return confirmationResult.confirm(verificationCode);
            })
            .then((result) => {
                // Phone authentication successful
                const user = result.user;
                setUser(user);
                saveUserDataToFirestore(user);
                sessionStorage.setItem("user", JSON.stringify(user));
            })
            .catch((error) => {
                // Handle errors
                console.error(error);
            });
    }
};

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        sessionStorage.removeItem("user"); // Remove user data from session storage
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };








    return ( <div>


<div className="LOGIN-FORM"> 
        <div className="flex">
{/* laptop view design of left while on flex */}
<div className='overflow-hidden w-3/5 mt-10 hidden md:block' >
<img className='w-full h-full' width={10} height={10} src='/illustration.svg' alt="illuatration" />
    
</div>

{/* actual form */}
<div className='md:w-2/5'>


<div className={`${redRose.className}` }>








<div className="flex md:w-96  justify-center ml-3 items-center h-screen bg-black">
      <div className="w-full  h-auto bg-black p-8  shadow-lg">
        <h1 className="text-2xl md:ml-8 font-bold text-center text-gray-200 mb-8">Login to your Inves now Account</h1>
        <div
          onClick={handleGoogleLogin}
            className="w-full md:w-96 bg-white mt-4 text-center text-black font-medium px-4 py-3 border-gray-900 border-2  items-center flex hover:bg-black hover:text-white cursor-pointer transition-all"
          >
            <img
              src="/google.svg"
              alt=""
              className="mr-12 max-sm:mr-4 "
              height={20}
              width={20}
            />
            Continue with Google
          </div>
         <Link href='/dashboard/phone'><div
          
          className="w-full md:w-96 bg-white mt-4 text-center text-black font-medium px-4 py-3 border-gray-900 border-2  items-center flex hover:bg-black hover:text-white cursor-pointer transition-all"
        >
          <img
            src="/phone.svg"
            alt="phone img duh"
            className="mr-12  max-sm:mr-4 "
            height={20}
            width={20}
          />
          Continue with Phone
        </div></Link>
          <div className='flex md:ml-5 justify-center items-center my-5'>
 
     ------ OR ------
          </div>
        <input
          type="text"
          placeholder="Email"
          className="w-full md:w-96 text-black h-12 px-4 border border-gray-400  mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full md:w-96 text-black h-12 px-4 border border-gray-400  mb-4"
        />
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="remember-me" className="text-gray-400  text-sm">
            <input type="checkbox" id="remember-me" className="mr-2" />
            Remember Me
          </label>
          <a href="#" className="text-red-500 text-sm font-semibold">
            Forgot Password?
          </a>
        </div>
        <button className="w-full md:w-96 h-12 bg-red-500 text-white font-semibold ">
          Login
        </button>
      
      
        <div className="m-4 text-gray-300 text-sm">
          <span>Not Registered Yet?</span>
          <a href="#" className="ml-2 text-pink-500 font-semibold">
            Create an account
          </a>
        </div>
      </div>
    </div>
    </div>
    <div style={containerStyle}>
      <div style={gradientStyle}></div>
      <div style={rectangleStyle}></div>
      </div>




</div>
        </div>
</div>   



    <div className='md:hidden'>
<Bottomnav active={'profile'} /></div>
 



    </div> );
}

export default Dashboard;


const containerStyle = {
    position: 'relative',
    width: '40px',
    height: '32px',
  };
  
  const gradientStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #FF00F5 0%, #6A82FB 100%), linear-gradient(90deg, #000000 0%, #6A82FB 100%), linear-gradient(90deg, #000000 0%, #6A82FB 100%), linear-gradient(90deg, #000000 0%, #6A82FB 100%)',
    filter: 'blur(100px)',
    borderRadius: '200px',
  };
  
  const rectangleStyle = {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '40.35px',
    height: '0.43px',
    left: '396.9px',
    top: '-211px',
    background: 'url(), radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)',
    backgroundBlendMode: 'overlay, normal',
    backdropFilter: 'blur(40px)',
    transform: 'matrix(0.01, 1, 1, -0.01, 0, 0)',
  };
  
