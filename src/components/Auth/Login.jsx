import { auth } from '../../config';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth,OAuthProvider, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const server_URL = "http://localhost:8000/";

    const verify = async(userdata)=>{
      const response = await fetch(`${server_URL}auth`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userdata),
      });

      const data = await response.json();
      
      if(data.success){
        console.log('Response Data:',data);
        console.log('Message:',data.message);

        navigate('/form', { state: {data:data.userdata} });
      } 
      else{
        console.error('Error', data.error);
      }
    };


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
          const user=result.user;
          const userdata = {
            uid:user.uid,
            email:user.email,
            name:user.displayName
          }
          console.log('User logged in with Outlook:', userdata);
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
        const provider = new GoogleAuthProvider(auth);
        try{
          const result = await signInWithPopup(auth,provider);
          const user = result.user;
          const userdata = {
            uid:user.uid,
            email:user.email,
            name:user.displayName
          }
          console.log('User logged in with Google:', userdata);
          verify(userdata);
        } 
        catch (error){
          console.log(error);
        }
    };

    return(
      <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('home/bg.jpg')" }}>
      <div className="relative z-0">
        <main className="flex justify-center items-center min-h-[calc(120vh-80px)]">
          {/* Increased the size of the card */}
          <div className="bg-white/80 backdrop-blur-md p-10 rounded-lg shadow-lg w-full max-w-lg">
            <h1 className="text-3xl font-medium text-center text-green-500 mb-8">Create/Update Profile</h1>
            <div className="space-y-6">
              <button onClick={handleGoogleLogin}  className="w-full flex items-center justify-start text-left pl-4 py-6 border border-gray-300 rounded hover:bg-gray-50">
                <img src="data:image/png;base64,
                iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTA
                AALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJKSURBVHg
                BvZTPaxNBFMffm93VpI2QQOqpyuhFBKFbUKmguIt6j9568z+Iihd/0YiCHgTTu2
                BzEKkIyUkvtRk9iUa7/gVdD2o9SFZaadP9Mc7uJtvNtlmtQr+w7OzbN595b+bN
                Qxigtn58zEGvBIglAE4BMC/Mhhib3OWNvexDbat5mDQsamo+R+QpAboEKeIcTA
                UcrTC/8Hkg8JumUokoTUSg8JfquDA+yt4bvW85HtlWMARucUBTDC3x+GmrsTAr
                o6xlxP0j4DCRHm6KTExY9nLTBxizNrKYoLLk1sW/xsh86zYkFKS8+hKozehipz
                WysZKHaqH57hNsUySYvEsuZ899gczJpSiyf4EFrBCAwb5kTi2BvH8F1p4cnkk6
                6vfXx8Bz82mw5vXs6yBle05ud+vMpzPlrKMnnc/cXWlyBC0NCHyYknCEqStvR1
                0gt2K2/4L3Ioxq6aNdVNXHpU1QF+Ey8bgef5ADi/t4jvUzPBTkTByMNrt6EKq/
                joA8xMvC2ldj7Eaur4C1e22KnkJ7V028DVYpWEGEDpFrd5bVABaIY+XYs/OnIU
                2uUhYQGn1zqRqlnNXXzBfr+6pxf+4RdnT2wlSS42/HiUcP6gQh1jzQfHUzW+tG
                2nWsl/JKR1rg0H/9RKlYYq966UZ3mdhFGPp6DYhTBH8/527tYX1AXxNPS9RFqZ
                mEDpIPzXy/cvHN1UNRbyRxh7eTDdPe7Y6LVWb+BBNdyPTkH3ocFtoHKIyWlEXr
                UoWXChzyInJTdCQDPJxuTT5nsBP6DUkW1QHQYUIiAAAAAElFTkSuQmCC" alt="Google logo" className="w-6 h-6 mr-4" />
                Continue with Google
              </button>
              <button onClick={handleOutlookLogin} className="w-full flex items-center justify-start text-left pl-4 py-6 border border-gray-300 rounded hover:bg-gray-50">
                <img src="https://img.icons8.com/?size=100&id=ut6gQeo5pNqf&format=png&color=000000" alt="Outlook logo" className="w-6 h-6 mr-4" />
                Continue with Outlook
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
    

    )
}
export default Login;