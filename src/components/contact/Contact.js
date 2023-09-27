
import React from "react";

import styles from "./contact.module.css";

import Map from '@/components/Map';


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