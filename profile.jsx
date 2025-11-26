import { useState } from "react";

export default function Profile() {
    const [toggle, setToggle]=useState(false);
    function handleTogle(){
        // toggle ? setToggle(false) : setToggle(true);
        setToggle(!toggle);
    }
  return (
    <div className="profile-card">
      <img onClick={handleTogle} src="Mahi.jpg" alt="Profile Image"/>
            
      {toggle && <div className="verti">
        <a href="" >View</a>
        <a href="/edit" >Edit</a>
      </div>}
    </div>
  );
}