import Logo from "@/components/Logo";
import React from "react";

import styles from "@/components/contact/contact.module.css";

import Map from '@/components/Map';
import { imgCall, imgMap, imgOffice, imgOnline, imgTelephone } from "../../../public";


const DEFAULT_CENTER = [-12.216825652649737, -76.96858882135183]

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
                <img src={imgCall}/>
                <p>LLÁMANOS</p>
            </div>
            <div className='item'>
                <img src={imgOffice} alt="" />
                <p>OFICINA PRINCIPAL</p>
            </div>
            <div className='item'>
                <img src={imgOnline} alt="" />
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
                <img src={imgTelephone} alt="" />
                <h2>941 074 165</h2>
            </div>
            <div className='item'>
                <img src={imgMap} alt="" />
                <p>AV. CONCRETOS</p>
            </div>
            <div className='item'>
                <img src={imgMap} alt="" />
                <p>LUNES - VIERNES</p>
                <p>js.picoseg@gmail.com</p>
            </div>
        </div>

        

        <div className={styles.formulario}>
          <div className={styles.titulo}>
            <Logo scale={2} />
            <h3>SOLICITUD DE COTIZACIÓN </h3>
          </div>
          
          <p>Puede hacer usos de los distintos medios de contacto que ponemos a su disposición. Las consultas recibidas a travez del
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
        <Map className={styles.homeMap} width="800" height="400" center={DEFAULT_CENTER} zoom={12}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    PICOSEG <br />
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
        </div>


    </div>
    </div>
    );
};

export default Contact;