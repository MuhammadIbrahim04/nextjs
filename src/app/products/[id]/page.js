import getProductDetail from '@/lib/getProductDetail'
import getProducts from '@/lib/getProducts'
import Image from 'next/image'
import Link from 'next/link'

export default async function ProductDetail({params}) {
  
  const productDetail = await getProductDetail(params.id)  
  
    return (
    <main className="flex min-h-screen flex-col p-24">
<div className='flex justify-between'>
  <h1>Hello Product Detail</h1>
  <div className='p-2 bg-white w-[500px] m-4 rounded-md flex flex-col justify-around'>
<Image src={productDetail.image} width={200} height={200}/>
<h1>{productDetail.title}</h1>
<h5>{productDetail.price}</h5>
</div>
  </div>
  
    </main>
  )
}
