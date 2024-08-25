import { React, useState } from "react";
import Navbar from "../components/Navbar/Navbar"
import Landing from "../components/Landing/Landing"
import Footer from "../components/Footer/Footer"
import useWindowSize from "../useWindowSize";


function Home() {

    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

    let [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const windowSize=useWindowSize();
    if(windowSize>950){
        isOpen=false;
    }
    return (
     <div>
        <button onClick={handleLogout}>Logout</button>
        {/*<Navbar isOpen={isOpen} toggleMenu={toggleMenu}/>
        {!isOpen && <Landing />}
        {!isOpen && <Footer />}*/}
     </div>
    );
  }
  
  export default Home;
  