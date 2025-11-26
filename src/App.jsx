import Footer from "./footer";
import Login from "./Login";
import Navbar from "./navbar";
import Signup from "./signup";
import Todo from "./todo";
import Profile from "./Profile";
import SetProfile from "./setProfile";
export default function App() {
  return (
    <div className="bg-gray-400 min-h-screen">
      <Navbar />
      <div className="min-h-screen flex justify-center"><Todo/></div>
      <Footer />
      {/* <Signup /> */}
      {/* <Login/> */}
      {/* < Profile/> */}
      {/* <SetProfile/> */}
    </div>  
  );
}