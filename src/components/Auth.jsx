import '../styles/login.css'
import { auth } from '../config';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth,OAuthProvider, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { server_URL } from './Var'
import { useState } from 'react';
function Auth(){
    const [isloggedin,setIsloggedin] = useState(false);
    const navigate = useNavigate();
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userdata = JSON.parse(storedUserData);
      navigate('/profile');
    }

    const verify = async(userdata)=>{
      const response = await fetch(`${server_URL}auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userdata),
      });

      const data = await response.json();
      
      if(data.success){
        // console.log('Response Data:',data.userdata);
        // console.log('Message:',data.message);

        localStorage.setItem('userData', JSON.stringify(data.userdata));
        setTimeout(() => {
          localStorage.removeItem('userData');
        }, 1000*60*5);

        navigate('/profile');
      } 
      else{
        console.error('Error', data.error);
      }
    };


    const handleOutlookLogin = async ()=>{
        setIsloggedin(true);
        const provider = new OAuthProvider('microsoft.com');
        provider.setCustomParameters({
          prompt: 'consent',
          tenant: '850aa78d-94e1-4bc6-9cf3-8c11b530701c',
        });

        try {
          const result = await signInWithPopup(auth, provider);
          const credential = OAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          // console.log(result.user);
          const user=result.user;
          const userdata = {
            uid:user.uid,
            email:user.email,
            name:user.displayName
          }
          // console.log('User logged in with Outlook:', userdata);
          verify(userdata);

          // Save user information to Realtime Database
          const usersRef = ref(getDatabase(), 'users/' + result.user.uid);
          const userData = await set(usersRef, {
            displayName: result.user.displayName,
            email: result.user.email,
          }).then(() => {
            console.log('User data saved successfully');
          })
          .catch((error) => {
            console.error('Error saving user data:', error);
          });
        } 
        catch (error) {
          const credential = OAuthProvider.credentialFromError(error);
          console.log('Error ',error);
          console.error('Auth Error ',credential);
        }
    };


    const auth = getAuth();
    const handleGoogleLogin = async () => {
        setIsloggedin(true);
        const provider = new GoogleAuthProvider(auth);
        try{
          const result = await signInWithPopup(auth,provider);
          const user = result.user;
          const userdata = {
            uid:user.uid,
            email:user.email,
            name:user.displayName
          }
          // console.log('User logged in with Google:', userdata);
          verify(userdata);
        } 
        catch (error){
          console.log(error);
        }
    };
    return(
        <>
            <div className="login">
                <img src='home/bg.jpg' id='login-bg'/>
                <div className="login-box">
                    <div className="login-card">
                        <h1>Sign In/Up</h1>
                        <div className="login-button" onClick={handleGoogleLogin}>
                            <img src="images/google.png"/>
                            <h1>Continue with Google</h1>
                        </div>
                        <div className="login-button" onClick={handleOutlookLogin}>
                            <img src="images/outlook.png"/>
                            <h1>Continue with Outlook</h1>
                        </div>
                        {isloggedin && 
                            <div className="loading">
                                <img src="images/loading.svg"/>
                                <h1>Verifying, This may take a while.</h1>
                            </div>
                        } 
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Auth;