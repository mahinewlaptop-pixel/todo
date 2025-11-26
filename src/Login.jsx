import { useState } from 'react';
export default function Login() {
    const [formData, setFormData]=useState({
        username:"",
        password:""
    });

    async function  handleSubmit(event){
        event.preventDefault();
        try{
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const responseText = await response.text();
        console.log(responseText);
    }
    catch(err){
        console.error("Error in Login component:", err);
    }
    }

    const handleInput=(event)=>{
        setFormData(prevData=>{
            return{
                ...prevData,
                [event.target.name]:event.target.value,
            }

        });
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit}  className="bg-white p-6 rounded shadow-md w-80">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
                    <input value={formData.username} onChange={handleInput} className="w-full p-2 border border-gray-300 rounded" type="text" id="username" name="username" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                    <input value={formData.password} onChange={handleInput} className="w-full p-2 border border-gray-300 rounded" type="password" id="password" name="password" />
                </div>
                <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Login</button>
            </form>
        </div>
    );
};