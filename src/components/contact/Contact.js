// @react-server/client
import React from "react";
import Logo from "@/components/Logo";

import Map from '@/components/Map';
import styles from "./contact.module.css";
import GeneralLayout from "@/layouts/GeneralLayout";
import {useState} from 'react';




const DEFAULT_CENTER = [-12.216833, -76.968462]

const Contact = () => {

  const [message,setMessage]= useState('')
  const handleSubmit = async(event) => {
  event.preventDefault()
  const data = new FormData(event.target)
  const response = await fetch(event.target.action, {
    method:'POST',
    body: data,
    headers: {
    Accept: 'application/json'
  } 
})
  const result = await response.json()
  if(!response.ok) {
    setMessage(result.errors.map(errors => errors.message).join(', '))
    return false
  }
  setMessage('Se ha enviado tu correo satisfactoriamente')
}
  return(
    <div style={{display:"flex",justifyContent:"center"}}>
        <div className='container' >
          <div className='container mx-auto'> 
            
            <div className={styles.contactContainer}>
            <div className={styles.contactFilter}></div>
            <div className={styles.contact}>
              <h1
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "Bebas Neue",
                  fontSize: "50px",
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
                  maxWidth:"60vw",
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "Bebas Neue",
                  fontSize: "30px",
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
              maxWidth:"60vw",
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Bebas Neue",
              fontSize: "30px",
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

        
      <div className={styles.rest}>
        <div  className={styles.formulario}>
          <div className={styles.titulo}>
            <Logo scale={2} />
            <h3>SOLICITUD DE COTIZACIÓN </h3>
            <br/>
          </div>
          
          <p>Puede hacer usos de los distintos medios de contacto que ponemos a su disposición. Las consultas recibidas a traves del
formulario de contacto son respondidos dentro de los minutos.</p>
          <br></br>

          <form className={styles.form} 
          action='https://formspree.io/f/mknlywgr'
          method='POST'  onSubmit={handleSubmit}>

            {/* nombre */}
            
            <input type='text'name="name" id='name' placeholder="Nombre" className={styles.input} />

            {/* correo */}
            
            <input type="email" name='email' id='email' placeholder="Correo" className={styles.input}/>

            {/* telefono */}
            
            <input type="phone" name='phone' id='phone' placeholder="Telefono" className={styles.input}/>

            {/* consulta */}
            
            <input type="text" name='message' id='message' placeholder="Consulta" className={`${styles.input} ${styles.textarea}`}/>
            <button type="submit"   className={styles.button}>Submit</button>

            <p className={styles.alert}>{message}</p>

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
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
        
        </div>


      </div>
    </div>
    </div>
    );
};

export default Contact;