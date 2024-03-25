import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";

const ContactScreen = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex flex-col h-screen pt-32 items-center" style={{backgroundImage:"linear-gradient(45deg, white 50%,skyblue 50%)"}}>
        <span className="text-3xl font-semibold pb-5">Contact Me</span>
        <span>Created by : Abbas Ali</span>
        <span>Email Address : abbasalichand786@gmail.com</span>
        <span>Github link : <a href="https://github.com/aliji865030">https://github.com/aliji865030</a></span>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactScreen;
