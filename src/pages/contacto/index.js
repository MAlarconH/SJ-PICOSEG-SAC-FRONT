// @react-server/client

import Image from 'next/image';
import React from 'react';
import Map from '@/components/Map/Map';
import { GeneralLayout } from '@/layouts';
import styles from "@/components/contact/contact.module.css";

const DEFAULT_CENTER = [-11.938837909055202, -76.69711947815475]


function ContactPage() {
  return (
    <GeneralLayout>
    <div style={{display:"flex",justifyContent:"center"}}>
    <div className='container' style={{maxWidth:"60vw"}}>
        <div className=' container grid grid-cols-3  mx-auto text-center'>
            <div className='item'>
                <img src="/images/img-call.png"></img>
                <h1>LLÁMANOS</h1>
            </div>
            <div className='item'>
                <img src="/images/img-office.png" alt="" />
                <h1>OFICINA PRINCIPAL</h1>
            </div>
            <div className='item'>
                <img src="/images/img-online.png" alt="" />
                <h1>ONLINE</h1>
            </div>
        </div>
        <div className=' container grid grid-cols-3  mx-auto text-center'>
            <div className='item'>
                <img src="/images/img-telephone.png" alt="" />
                <h1>941 074 165/111111</h1>
            </div>
            <div className='item'>
                <img src="/images/img-map.png" alt="" />
                <h1>AV. CONCRETOS</h1>
            </div>
            <div className='item'>
                <img src="/images/img-calendar.png" alt="" />
                <h1>LUNES - VIERNES</h1>
                <h2>js.picoseg@gmail.com</h2>
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
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
        </div>
    </div>
    </div>
    </GeneralLayout>
  )
}

export default ContactPage