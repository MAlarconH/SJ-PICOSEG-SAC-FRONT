import Link from 'next/link'


function Navigation() {
  return (
    
        <div className='container mx-auto'>
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