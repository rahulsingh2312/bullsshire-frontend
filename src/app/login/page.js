'use client'
import { useState , useEffect } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import './login.css'
// import { FunctionSquare } from 'lucide-react';
const LoginForm = () => {
  const [apiKey, setApiKey] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState('');
// profile 

useEffect(() => {
  // Check if token exists in session storage
  const storedToken = sessionStorage.getItem('token');
  if (storedToken) {
    // If token exists, fetch user profile using the token
    fetchUserProfile(storedToken);
  }
}, []); // Empty dependency array ensures this effect runs only once on component mount

const fetchUserProfile = async (token) => {
  try {
    const response = await fetch('https://ttblaze.iifl.com/interactive/user/profile?clientID=SYMP', {
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      }
    });

    if (!response.ok) {
      sessionStorage.removeItem('token');
      // Clear the user profile state
      setUserProfile(null);
      // throw new Error('Failed to fetch user profile');
    }

    const data = await response.json();
 // Store the token in session storage
console.log(data)
 // Fetch user profile using the obtained token
//  

    setUserProfile(data.result  );
  } catch (err) {
    setError(err.message);
  }
};
 function handleLogout  () {
    // Clear the token from session storage
    sessionStorage.removeItem('token');
    // Clear the user profile state
    setUserProfile(null);
  };

// llogin
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://ttblaze.iifl.com/interactive/user/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "secretKey": secretKey,
          "appKey": apiKey,
          "source": 'WebAPI'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const data = await response.json();
      console.log(data)
      console.log(data.result.token)
      fetchUserProfile(data.result.token);
      sessionStorage.setItem('token', data.result.token);
    } catch (err) {
      setError(err.message);
    }

  };
 

  return (
    <>
         <div className='des'></div>
    <div className=" mt-60 login-container">
    


{!userProfile &&  <Card className="mx-auto  max-w-sm">
      <CardHeader className="space-y-1">
     
        <CardTitle className="text-2xl font-bold">Login with Symphony</CardTitle>
        <CardDescription>Enter your appKey and secretKey to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="text">App Key</Label>
            <Input className="login-input" type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Secret Key </Label>
            <Input id="password" className="login-input" type="password" value={secretKey} onChange={(e) => setSecretKey(e.target.value)} required />
          </div>
          <Button className="w-full" type="submit">
          Login
          </Button>
        </div>
        </form>
      </CardContent>
    </Card>
}
    {error && <p className="error-message">{error}</p>}
      {  userProfile && (
        <div className=" flex justify-center items-center user-profile">
          {/* <h1>User Profile</h1> */}
      <div>
        <p>Name: {userProfile.ClientName}</p>
        <p>Email: {userProfile.EmailId}</p>
        <p>PAN Card Number: {userProfile.PAN}</p>
        <p>Phone Number: {userProfile.MobileNo}</p>
        {userProfile && (
        <button onClick={handleLogout}>Logout</button>
      )}
      </div>
      
        </div>
        
      )}

    </div>
    </>
  );


};

export default LoginForm;
