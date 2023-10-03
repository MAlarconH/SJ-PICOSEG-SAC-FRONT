import React from "react";
import Logo from "@/components/Logo";


import styles from "./contact.module.css";






const Contact = () => {
  return(
    <div style={{display:"flex",justifyContent:"center"}}>
        <div className='container' style={{maxWidth:"60vw"}}>
          <div className='container mx-auto'> 
              
            <div className={styles.contactContainer}>
            <div className={styles.contactFilter}></div>
            <div className={styles.contact}>
              <h1
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "Bebas Neue",
                  fontSize: "35px",
                  fontStyle: "normal",
                }}
              >
                CONTACTO
              </h1>
           </div>
          </div>  
        </div>


        <div className=' container grid grid-cols-3  mx-auto text-center' 
              style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "Bebas Neue",
                  fontSize: "15px",
                  fontStyle: "normal",
                }}>
            <div className='item'>
                <img src="/images/img-call.png"/>
                <p>LLÁMANOS</p>
            </div>
            <div className='item'>
                <img src="/images/img-office.png" alt="" />
                <p>OFICINA PRINCIPAL</p>
            </div>
            <div className='item'>
                <img src="/images/img-online.png" alt="" />
                <p>ONLINE</p>
            </div>
        </div>
        <div className=' container grid grid-cols-3  mx-auto text-center'
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Bebas Neue",
              fontSize: "15px",
              fontStyle: "normal",
            }}>
            <div className='item'>
                <img src="/images/img-telephone.png" alt="" />
                <h2>941 074 165</h2>
            </div>
            <div className='item'>
                <img src="/images/img-map.png" alt="" />
                <p>AV. CONCRETOS</p>
            </div>
            <div className='item'>
                <img src="/images/img-calendar.png" alt="" />
                <p>LUNES - VIERNES</p>
                <p>js.picoseg@gmail.com</p>
            </div>
        </div>

        

        <div className={styles.formulario}>
          <div className={styles.titulo}>
            <Logo scale={2} />
            <h3>SOLICITUD DE COTIZACIÓN </h3>
          </div>
          
          <p>Puede hacer usos de los distintos medios de contacto que ponemos a su disposición. Las consultas recibidas a traves del
formulario de contacto son respondidos dentro de los minutos.</p>
          <br></br>
          <form className={styles.form}>

            {/* nombre */}
            <label htmlfor="nombre" style={{display:"block"}}>
              Nombre
            </label>
            <input type="text"/>

            {/* correo */}
            <label htmlfor="correo" style={{display:"block"}}>
              Correo
            </label>
            <input type="email"/>

            {/* telefono */}
            <label htmlfor="phone" style={{display:"block"}}>
              Telefono
            </label>
            <input type="number"/>

            {/* consulta */}
            <label htmlfor="consulta" style={{display:"block"}}>
              Consulta
            </label>
            <input type="text"/>


          </form>
        </div>


        <div>
        
        </div>


    </div>
    </div>
    );
};

export default Contact;