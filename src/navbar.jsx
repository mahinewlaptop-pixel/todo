import Profile from "../profile";
export default function Navbar() {
  return (
    <nav className="flex justify-between h-20 bg-gray-800 text-white items-center px-8">
      <h2 className="text-xl font-bold">TODO</h2>
      <div className="flex justify-around w-1/2">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
        <Profile />
    </nav>
  );
}