'use client'
import React from 'react';
import Footer from '../../hero/footer';
import { IoIosLogOut } from "react-icons/io"
// import { MDBClientOnly, MDBModal } from 'mdb-react-ui-kit';
import { useState , useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

import Link from 'next/link'
import Bottomnav from '../../bottomnav/bottomnav.jsx'
import {playfairDisplaySC , redRose} from "../../font"
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
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
export default function EditButton() {
  const [user, setUser] = useState(null);

  
  
  
  const router = useRouter();
  
  const [userName, setUserName] = useState("");

  
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("hi"+user);
      if (user) {
       
        // const fetchData = async (user) => {
          const userDocRef = doc(db, "users", user.uid); 
          const userDocSnap = await getDoc(userDocRef);
          setUser(user);
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setUserName(userData.namefromemail || userData.displayName); // Set the user's name in the state
          }
        // };
    
        // fetchData();
       
      } else {
        setUser(null);
        console.log("user is null else console")
        // Reset user's XP if not logged in
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("user");
        setUser(null);

        router.push("/explore");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (





<div className="">
<nav>
<div>

        <div className='  flex' >
            <div className="md:ml-20 w-20 md:w-40 ml-10 mt-10" > <img  src='/logo.png' alt="logoig" />  </div>
            <div className={`${playfairDisplaySC.className} md:text-4xl text-1xl md:mt-20 md:mx-auto mt-16 md:block `}  >
           Bullsshire Traders {user ? (
            <button onClick={handleLogout}>
              <IoIosLogOut />
            </button>
          ) : (
            "duh login first"
          )}
            </div>
            
<Link href="/explore" className={` hidden ${playfairDisplaySC.className} mt-20 mx-10 rounded-lg  w-12 h-10 justify-center md:flex items-center text-xl`}>
Home
</Link>
<Link href="/ideas" className={` hidden ${playfairDisplaySC.className} mt-20 mx-10 rounded-lg w-12 h-10 justify-center md:flex items-center text-xl`}>
Ideas
</Link>
<Link href="/strategies" className={` hidden ${playfairDisplaySC.className} mt-20 mx-20 rounded-lg w-12 h-10 justify-center md:flex items-center text-xl`}>
Strategies
</Link>
        </div>
</div>

</nav>




<div className='flex md:justify-center md:items-center'>
    <div className="flex md:justify-center md:items-center flex-col pt-4 max-w-[960px]">
      <div className="flex flex-col px-4 w-full max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div>
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex w-20 h-20 items-center mt-8 justify-center max-md:ml-0 max-md:w-full">
                

{user.photoURL ? (
              <img
                src={`${user.photoURL}`}
                alt=""
                className="w-32 rounded-full  max-w-full aspect-square max-md:mt-4"
              />
            ) : (
              <img
              loading="lazy"
              src='/char.png'
              className="w-32 rounded-full  max-w-full aspect-square max-md:mt-4"
              />
            )}


              </div>
              <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center py-10 whitespace-nowrap  max-md:mt-4">
                  <div className="text-2xl font-bold tracking-tight text-white">
                  {user ? `Welcome, ${user.displayName||userName }` : "Whtz"}
                  </div>
                  <div className="text-base leading-6 text-slate-400">
                    Automate your stock market trading
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center px-4 py-2.5 my-auto text-sm font-bold tracking-wide leading-5 text-white whitespace-nowrap rounded-xl bg-slate-800">
            <div className="justify-center bg-slate-800">Connect wallet</div>
          </div>
        </div>
        <div className="mt-9 text-2xl font-bold tracking-tight text-white max-md:max-w-full">
          Connected Wallets
        </div>
      </div>
      <div className="flex flex-col justify-center px-4 py-3 mt-3 w-full bg-gray-900 max-md:max-w-full">
        <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="flex justify-center items-center self-start px-3 w-12 h-12 rounded-lg aspect-square bg-slate-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/08edd267ba78f72d7e7f54272b464f7d57b59d6924b6fba74dae681fc52b58df?"
              className="w-full aspect-square"
            />
          </div>
          <div className="flex flex-col flex-1 justify-center text-sm leading-5 text-slate-400 max-md:max-w-full">
            <div className="text-base font-medium text-white max-md:max-w-full">
             zerodha
            </div>
            <div className="max-md:max-w-full">• Connected</div>
            <div className="max-md:max-w-full">
              balance :
            </div>
          </div>
        </div>
      </div>
      <div className="self-start mt-5 ml-4 text-2xl font-bold tracking-tight text-white whitespace-nowrap max-md:ml-2.5">
        Trading Strategy
      </div>
      <div className="flex flex-col justify-center px-4 py-3 mt-3 w-full bg-gray-900 max-md:max-w-full">
        <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="flex justify-center items-center px-3 w-12 h-12 rounded-lg aspect-square bg-slate-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac92786b24fb12f9e19c0d00060e2fcb86f2ad3beeb36231b7a2ec26e77645e3?"
              className="w-full aspect-square"
            />
          </div>
          <div className="flex flex-col flex-1 justify-center self-start leading-[150%] max-md:max-w-full">
            <div className="text-base font-medium text-white max-md:max-w-full">
              Long only
            </div>
            <div className="text-sm text-slate-400 max-md:max-w-full">
              Buy and hold a diversified portfolio of stocks
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-4 py-3 w-full bg-gray-900 max-md:max-w-full">
        <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="flex justify-center items-center px-3 w-12 h-12 rounded-lg aspect-square bg-slate-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3ef2715b91f883ffa0daa03d0d1aae8c5891d995785036f403e74902dcc1ae6?"
              className="w-full aspect-square"
            />
          </div>
          <div className="flex flex-col flex-1 justify-center self-start leading-[150%] max-md:max-w-full">
            <div className="text-base font-medium text-white max-md:max-w-full">
              Long only
            </div>
            <div className="text-sm text-slate-400 max-md:max-w-full">
              Buy and hold a diversified portfolio of stocks
            </div>
          </div>
        </div>
      </div>
      <div className="self-start mt-5 ml-4 text-2xl font-bold tracking-tight text-white max-md:ml-2.5">
        Performance
      </div>
      <div className="justify-center px-4 py-6 mt-3 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 pt-6 pb-11 w-full rounded-xl border border-solid border-slate-600 leading-[150%] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-base font-medium text-white">
                Portfolio Value
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/25c13b757ddabee9efc5fcb5662f3b6022a874f804da778d649437b57a20961d?"
                className="mt-12 w-full aspect-[2.78] max-md:mt-10"
              />
              <div className="flex gap-5 justify-between mt-6 text-sm font-bold tracking-normal text-slate-400">
                <div>Jan 1</div>
                <div>Jan 15</div>
                <div>Jan 30</div>
                <div>Feb 15</div>

              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 pt-6 pb-11 w-full rounded-xl border border-solid border-slate-600 leading-[150%] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-base font-medium text-white">Daily P&L</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/002c9a4bc6d03a0d2874f93496f3d6be069502fed4135949d2f5fd388fbf373f?"
                className="mt-12 w-full aspect-[2.78] max-md:mt-10"
              />
              <div className="flex gap-5 justify-between mt-6 text-sm font-bold tracking-normal text-slate-400">
                <div>Jan 1</div>
                <div>Jan 15</div>
                <div>Jan 30</div>
                <div>Feb 15</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>



    <div className="md:flex ">
  <div className="">
    </div>




    </div>
    <div className='md:hidden'>
<Bottomnav active={'profile'} />
</div>
    <div className='hidden md:block'>
  <Footer />
</div>
    </div>
  );
}
