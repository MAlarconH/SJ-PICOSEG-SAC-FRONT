import Footer from "@/components/about/footer/Footer"
import Header from "@/components/about/header/Header"
import Menu from "@/components/about/menu/Menu"

const About = () => {
    return <div style={{ 
        display: "flex",
        flexDirection: "column",
    }}>
    <Header/>
    <Menu/>
    <Footer/>
    </div>
        
}

export default About