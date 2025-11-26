import {useState} from "react";
export default function Profile(){
    const [profileData,setProfileData]=useState({
        username:"",
        email:""
    });
    async function fetchProfile(){
        try{
            const response=await fetch('http://localhost:3000/profile?username=Mahi', {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                },
                credentials:'include',
            });
            const data=await response.json();
            setProfileData({
                username:data.username,
                email:data.email,
            });
        }
        catch(err){
            console.error("Error in Profile component:",err);
        }
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <button onClick={fetchProfile} className="mb-4 bg-green-500 text-white p-2 rounded hover:bg-green-600">Load Profile</button>
            <div className="bg-white p-6 rounded shadow-md w-80">
                <p className="mb-2"><strong>Username:</strong> {profileData.username}</p>
                <p><strong>Email:</strong> {profileData.email}</p>
            </div>
        </div>
    );
}