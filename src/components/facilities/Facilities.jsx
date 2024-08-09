
import Header from '../constant/Header'
import Footer from '../constant/footer/Footer'
import gym from '../../assets/images/gym.png'
import g1 from '../../assets/images/g1.jpg'
import g2 from '../../assets/images/g2.jpg'
import g3 from '../../assets/images/g3.jpg'
import g4 from '../../assets/images/g4.jpg'
import g5 from '../../assets/images/g5.jpg'

function Facilities() {
    return (
        <>
            <Header />
            <div
                className="xl:relative xsm:relative xl:w-full xl:h-[100vh] xl:bg-cover xl:bg-center xsm:w-[1100px] xsm:h-[80vh]"
                style={{ backgroundImage: `url(${gym})` }}>
                <div className="absolute inset-0 bg-[#14274A] opacity-50"></div>
                <div className="xl:absolute xl:inset-0 xl:flex xl:flex-col xl:items-center  text-white xl:justify-center xl:mb-[115px] xsm:absolute xsm:inset-0 xsm:flex xsm:items-center xsm:justify-center">
                    <p className='font-bold font-sans xl:text-[70px] xl:p-2 xl:flex xsm:text-4xl'>FACILITIES</p>
                </div>
            </div>
            <div className='xsm:w-[1000px] xsm:mx-10 xsm:flex xsm:flex-col xsm:justify-center xsm:items-center xsm:mt-5 xsm:space-y-10 xl:w-full xl:space-y-0 xl:flex xl:flex-row xl:mt-[150px] xl:mx-0'>
                <div className='xsm:w-full xsm:h-full xsm:flex-col xl:w-3/6 xl:h-full xl:flex xl:flex-col'>
                    <div className='xsm:w-full xsm:flex xsm:justify-center xsm:items-center xl:w-full xl:flex xl:justify-center'><img src={g1} alt="rm1" className='xsm:w-full xsm:h-[390px] xl:w-[624px] xl:h-[390px]'></img></div>
                    <h1 className='font-sans xl:text-3xl font-bold xl:flex xl:justify-center xsm:flex xsm:justify-center xl:pt-11 xsm:text-2xl'>GYM</h1>
                </div>
                <div className='xsm:w-full xsm:h-full xsm:flex-col xsm:mt-10 xl:w-3/6 xl:h-full xl:flex xl:flex-col'>
                    <div className='xsm:w-full xsm:flex xsm:justify-center xsm:items-center xl:w-full xl:flex xl:justify-center'><img src={g2} alt="rm1" className='xsm:w-full xsm:h-[390px] xl:w-[624px] xl:h-[390px]'></img></div>
                    <h1 className='font-sans xl:text-3xl font-bold xl:flex xl:justify-center xsm:flex xsm:justify-center xl:pt-11 xsm:text-2xl'>GYM</h1>
                </div>
            </div>

            <div className='xsm:w-[1000px] xsm:mx-10 xsm:flex xsm:flex-col xsm:justify-center xsm:items-center xsm:mt-5 xsm:space-y-10 xl:w-full xl:space-y-0 xl:flex xl:flex-row xl:mt-[150px] xl:mx-0'>
                <div className='xsm:w-full xsm:h-full xsm:flex-col xl:w-3/6 xl:h-full xl:flex xl:flex-col'>
                    <div className='xsm:w-full xsm:flex xsm:justify-center xsm:items-center xl:w-full xl:flex xl:justify-center'><img src={g3} alt="rm1" className='xsm:w-full xsm:h-[390px] xl:w-[624px] xl:h-[390px]'></img></div>
                    <h1 className='font-sans xl:text-3xl font-bold xl:flex xl:justify-center xsm:flex xsm:justify-center xl:pt-11 xsm:text-2xl'>GYM</h1>
                </div>
                <div className='xsm:w-full xsm:h-full xsm:flex-col xsm:mt-10 xl:w-3/6 xl:h-full xl:flex xl:flex-col'>
                    <div className='xsm:w-full xsm:flex xsm:justify-center xsm:items-center xl:w-full xl:flex xl:justify-center'><img src={g4} alt="rm1" className='xsm:w-full xsm:h-[390px] xl:w-[624px] xl:h-[390px]'></img></div>
                    <h1 className='font-sans xl:text-3xl font-bold xl:flex xl:justify-center xsm:flex xsm:justify-center xl:pt-11 xsm:text-2xl'>GYM</h1>
                </div>
            </div>

            <div className='xsm:w-[1000px] xsm:mx-10 xsm:flex xsm:flex-col xsm:justify-center xsm:items-center xsm:mt-5 xsm:space-y-10 xl:w-full xl:space-y-0 xl:flex xl:flex-row xl:mt-[150px] xl:mx-0'>
                <div className='xsm:w-full xsm:h-full xsm:flex-col xl:w-3/6 xl:h-full xl:flex xl:flex-col'>
                    <div className='xsm:w-full xsm:flex xsm:justify-center xsm:items-center xl:w-full xl:flex xl:justify-center'><img src={g4} alt="rm1" className='xsm:w-full xsm:h-[390px] xl:w-[624px] xl:h-[390px]'></img></div>
                    <h1 className='font-sans xl:text-3xl font-bold xl:flex xl:justify-center xsm:flex xsm:justify-center xl:pt-11 xsm:text-2xl'>GYM</h1>
                </div>
                <div className='xsm:w-full xsm:h-full xsm:flex-col xsm:mt-10 xl:w-3/6 xl:h-full xl:flex xl:flex-col'>
                    <div className='xsm:w-full xsm:flex xsm:justify-center xsm:items-center xl:w-full xl:flex xl:justify-center'><img src={g5} alt="rm1" className='xsm:w-full xsm:h-[390px] xl:w-[624px] xl:h-[390px]'></img></div>
                    <h1 className='font-sans xl:text-3xl font-bold xl:flex xl:justify-center xsm:flex xsm:justify-center xl:pt-11 xsm:text-2xl'>GYM</h1>
                </div>
            </div>
            <div className='xl:flex xl:flex-row xl:w-full font-bold xl:mt-13 xsm:flex xsm:w-[1100px] xsm:flex-col xsm:justify-center'>
                <div className='xl:w-[40%] xl:p-11 font-sans xl:flex xl:justify-start xsm:w-[1100px] xsm:justify-center'>
                    <div className='xl:flex xsm:flex'>
                        <div className='xsm:flex xsm:flex-col xsm:w-full xsm:justify-center xl:flex xl:flex-col xl:p-11 font-[Roboto] xl:space-y-2'>
                            <div className='xsm:flex xsm:flex-col xsm:text-center xl:flex xl:p-0 xl:m-0 xl:flex-col'> <span className='font-[Roboto] xl:text-3xl xl:text-left font-bold text-indigo-500 xsm:text-3xl xsm:p-10'>We also offer:</span>
                            </div>
                            <p className='xl:text-2xl xl:text-left xsm:text-2xl xsm:px-10 xsm:w-full xsm:text-center'>LIbrary services</p>
                            <p className='xl:text-2xl xl:text-left xsm:text-2xl xsm:px-10 xsm:text-center'>Free Wi-fi</p>
                            <p className='xl:text-2xl xl:text-left xsm:text-2xl xsm:px-10 xsm:text-center'>Adequate safety/ security</p>
                            <p className='xl:text-2xl xl:text-left xsm:text-2xl xsm:px-10 xsm:text-center'>Laundry services</p>
                        </div>
                    </div>
                </div>
                <div className='xl:w-[30%] xl:p-11 font-sans xl:flex xsm:w-[1100px] xsm:flex xsm:justify-center xsm:flex-col xsm:p-11'>
                    <div className='xl:p-11 font-[Roboto] xl:space-y-2 xl:pt-40 xsm:space-y-2 xsm:text-center'>
                        <p className='xl:text-2xl xl:text-left xsm:text-2xl xsm:xsm:text-center'>Delicious meals</p>
                        <p className='xl:text-2xl xl:text-left xsm:text-2xl xsm:xsm:text-center'>Air cooling in all rooms </p>
                        <p className='xl:text-2xl xl:text-left xsm:text-2xl xsm:xsm:text-center'>Room services</p>
                        <p className='xl:text-2xl xl:text-left xsm:text-2xl xsm:xsm:text-center'>Ticket books</p>
                    </div>
                </div>
                <div className='xl:w-[30%] xl:p-11 font-sans xl:flex xl:justify-end xsm:p-11 xsm:w-[1100px] xsm:flex xsm:justify-center xsm:flex-col'>
                    <div className='xl:p-11 xl:pb-20 xsm:pb-0 font-[Robo] xl:space-y-2 xsm:space-y-2'>
                        <p className='xl:text-2xl xsm:text-2xl xsm:text-center xl:text-left'>Shuffle/ Private transfers</p>
                        <p className='xl:text-2xl xsm:text-2xl xsm:text-center xl:text-left'>Neccessities for babies and children</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Facilities