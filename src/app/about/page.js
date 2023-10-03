import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Menu from "@/components/about/menu/Menu";

const About = () => {
    return <div style={{ 
        display: "flex",
        flexDirection: "column",
        minWidth: "15rem",
        backgroundColor: "white",
    }}>
    <Header/>
    <Menu/>
    <Footer/>
    </div>
        
}

export default About