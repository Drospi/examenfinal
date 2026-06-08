import Image from 'next/image'
import { StaticImageData } from 'next/image'
import siguiente from '@/public/siguiente.png'

type productCardProps = {
    producto: {
        imagen: StaticImageData,
        title: string,
        series: string,
    }
}

const ProductCard = (producto: productCardProps) => {
    return (
        <div className='rounded-lg shadow-md p-4 flex justify-between items-center bg-gray-900 hover:bg-gray-800 cursor-pointer text-white w-120 mb-4'>
            <div className='flex items-center'>
            <Image src={producto.producto.imagen} alt={producto.producto.title} className='w-24 h-24' />    
            <div className='flex flex-col ml-4'>
                <h2 className='text-lg font-bold'>{producto.producto.title}</h2>
                <p className='text-gray-500'>{producto.producto.series}</p>
            </div>
            </div>
            <Image src={siguiente} alt="Siguiente" className='w-6 h-6' />
        </div>
    )
}

export default ProductCard