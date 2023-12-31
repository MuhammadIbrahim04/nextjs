import getProductDetail from '@/lib/getProductDetail'
import getProducts from '@/lib/getProducts'
import Image from 'next/image'
import Link from 'next/link'

export default async function Products() {
  
  const products = await getProducts()
  
  
  
    return (
    <main className="flex min-h-screen flex-col p-24">
<div className='flex justify-between'>
  <h1>Hello Products</h1>
  </div>
  <div className='flex flex-wrap'>
{
    products.map((data,index)=>{
return (

<Link href={`/products/${data.id}`}>
<div key={index} className='p-2 bg-white w-[200px] m-4 rounded-md flex flex-col justify-around'>
<Image src={data.image} width={100} height={100}/>
<h1>{data.title}</h1>
<h5>{data.price}</h5>
</div>
</Link>
)
    })
}

  </div>
    </main>
  )
}
