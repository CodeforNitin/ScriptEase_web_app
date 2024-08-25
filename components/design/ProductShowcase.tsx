import Image from 'next/image'
import appScreen from '../../public/assets/images/app-screen.png'


const ProductShowcase = () => {
  return (
    <div className='bg-black text-white bg-gradient-to-b from-black to-[#5D2cab] py-[72px] sm:py-24'>
        <div className="container">
            <h2 className='text-center text-5xl sm:text-6xl font-bold tracking-tighter'>Intuitive Interface</h2>
                <div className='max-w-xl mx-auto'>
                <p className='text-xl text-center text-white/70 mt-5'>Celebrate the joy of accomplishment with an app designed to track your progress</p>
                </div>
                <Image src={appScreen} alt="The Product Screenshot" className='mt-14 ml-auto mr-auto'/>
        </div>

    </div>
  )
}

export default ProductShowcase