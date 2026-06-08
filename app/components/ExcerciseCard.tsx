import Image from 'next/image'
import { StaticImageData } from 'next/image'

type productCardProps = {
    producto: {
        imagen: StaticImageData,
        title: string,
        series: string,
    }
}

const ProductCard = (producto: productCardProps) => {
    return (
        <div className='rounded-lg shadow-md p-4 flex items-center bg-gray-900 text-white w-80 mb-4'>
            <Image src={producto.producto.imagen} alt={producto.producto.title} className='w-24 h-24' />    
            <div className='flex flex-col ml-4'>
                <h2 className='text-lg font-bold'>{producto.producto.title}</h2>
                <p className='text-gray-500'>{producto.producto.series} series</p>
            </div>
        </div>
    )
}

export default ProductCard