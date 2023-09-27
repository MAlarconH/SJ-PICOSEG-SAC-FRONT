import Link from 'next/link'


function Navigation() {
  return (
    
        <div className='container mx-auto' style={{
          color: "#FFF",
                  textAlign: "center",
                  fontFamily: "Bebas Neue",
                  fontSize: "22px",
                  fontStyle: "normal"}}>
          <ul className='flex justify-between'>
            <li>
              <Link href='/'>Inicio</Link>
            </li>
            <li>
              <Link href="/about">Nosotros</Link>
            </li>
            <li>
              <Link href="/services">Concretos</Link>
            </li>
            <li>
              <Link href="../contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        
  )
}

export default Navigation