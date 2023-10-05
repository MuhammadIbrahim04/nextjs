import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
<div className='flex justify-between'>
  <h1>Hello Next Js</h1>

  <Link href={'/products'}>PRODUCTS</Link>
  <Link href={'/login'}>LOGIN</Link>
  </div>      

    </main>
  )
}
