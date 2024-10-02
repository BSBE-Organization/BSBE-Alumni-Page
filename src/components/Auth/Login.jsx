import { auth } from '../../config';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth,OAuthProvider, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';

function Login(){

    const handleOutlookLogin = async ()=>{
        const provider = new OAuthProvider('microsoft.com');
        provider.setCustomParameters({
          prompt: 'consent',
          tenant: '850aa78d-94e1-4bc6-9cf3-8c11b530701c',
        });

        try {
          const result = await signInWithPopup(auth, provider);
          const credential = OAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          console.log(result.user);

          // Save user information to Realtime Database
          const usersRef = ref(getDatabase(), 'users/' + result.user.uid);
          const userdata = await set(usersRef, {
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
        const provider = new GoogleAuthProvider(auth);
        try{
          const result = await signInWithPopup(auth,provider);
          const user = result.user;
          console.log('User logged in with Google:', user);
        } 
        catch (error){
          console.log(error);
        }
    };

    return(
        <div className="login">
            <button onClick={handleOutlookLogin}>Outlook</button>
            <button onClick={handleGoogleLogin}>Google</button>
        </div>
    )
}
export default Login;