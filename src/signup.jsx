import { useState } from "react";
export default function Signup() {
    const[formData, setFormData]=useState({
        username:"",
        email:"",
        password:""
    });
    const [message, setMessage]=useState("");
    const [loading, setLoading]=useState(false);
    function handleChange(event){
        // const {name, value}=event.target;
        setFormData(prevData=>{
            return{
                ...prevData,
                [event.target.name]:event.target.value,
            }
        });
    }

    const handleSubmit=async(event)=>{
        event.preventDefault();
        setMessage("");
        setLoading(true);
        try{
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const responseText = await response.text();
            console.log(responseText);
            if (response.ok) {
                setMessage(`Success! ${responseText}`);
                setFormData({
                    username:"",
                    email:"",
                    password:""
                });
            } else {
                setMessage(`Signup failed: ${responseText || response.statusText}`);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
            console.error('Error in signup:', error);
        }
        finally{
            setLoading(false);
        }
    }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {message && <p className="mb-4 text-red-500">{message}</p>}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
                <input required onChange={handleChange} value={formData.username} className="w-full p-2 border border-gray-300 rounded" type="text" id="username" name="username" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input required onChange={handleChange} value={formData.email} className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                <input required onChange={handleChange} value={formData.password} className="w-full p-2 border border-gray-300 rounded" type="password" id="password" name="password" />
            </div>
            <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit" disabled={loading}>{loading?"Sining up":"Sign Up"}</button>
        </form>
    </div>
  );
}   