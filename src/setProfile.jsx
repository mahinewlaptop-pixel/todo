export default function SetProfile() {
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/setProfile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
            }),
        });
        if (response.ok) {
            console.log('Profile updated successfully');
        } else {
            console.error('Failed to update profile');
        }
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Set Profile Component</h2>
        <input type="text" name="username" placeholder="Username" className="mb-2 p-2 border border-gray-300 rounded" required />
        <input type="email" name="email" placeholder="Email" className="mb-4 p-2 border border-gray-300 rounded" required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Update Profile</button>

    </form>
    );
}

