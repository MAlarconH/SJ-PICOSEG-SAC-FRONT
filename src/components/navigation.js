import Link from 'next/link'


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
              <button onClick={() => navigateTo('/servic')}>Servicios</button>
            </li>
            <li>
              <button onClick={() => navigateTo('/about')}>Nosotros</button>
            </li>

            <li>
              <button onClick={() => navigateTo('/contact')}>Contacto</button>
            </li>
          </ul>
        </div>
        
  )
}

export default Navigation