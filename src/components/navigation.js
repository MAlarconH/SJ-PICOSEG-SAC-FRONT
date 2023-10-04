
function Navigation({ navigateTo }) {
  return (
    
        <div className='container mx-auto' style={{
          color: "#FFF",
                  textAlign: "center",
                  fontFamily: "Bebas Neue",
                  fontSize: "22px",
                  fontStyle: "normal"}}>
          <ul className='flex justify-between'>
            <li>
              <button onClick={() => navigateTo('/')}>Inicio</button>
            </li>
            <li>
              <button onClick={() => navigateTo('/nosotros')}>Nosotros</button>
            </li>
            <li>
              <button onClick={() => navigateTo('/concreto')}>Concreto</button>
            </li>
            <li>
              <button onClick={() => navigateTo('/contacto')}>Contacto</button>
            </li>
            <li>
              <button onClick={() => navigateTo('/serv')}>Servicios</button>
            </li>
          </ul>
        </div>
        
  )
}

export default Navigation