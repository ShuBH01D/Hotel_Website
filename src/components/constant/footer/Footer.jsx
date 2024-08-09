import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='xl:flex xl:flex-row xl:w-full text-white xl:h-[62vh] bg-[#3E3C3C] xsm:w-[1100px] xsm:space-y-2'>
                <div className='xl:w-[40%] xl:pt-16 xl:font-[Robo] xl:flex xl:justify-start xsm:w-full xsm:flex xsm:justify-center'>
                    <div className=' xl:flex'>
                        <div className='xl:flex xl:flex-col xl:p-11 font-sans  xl:space-y-5 xsm:p-10 xl:text-left xl:pl-[80px]'>
                            <div className='xl:flex xl:p-0 xl:m-o xl:flex-col xsm:text-center xl:text-left'> <span className=' xl:text-5xl xsm:text-8xl hotellunarss font-semibold '>Hotel Lunar</span>
                                <p className='xl:pb-5 xl:text-xl xsm:text-3xl xsm:text-center xl:text-left'>will give you the comfort you deserve</p></div>
                            <p className='xl:text-2xl xsm:text-3xl  xsm:p-2  xl:p-0 font-semibold xsm:text-center xl:text-left xl:mt-0 xsm:mt-10'>Address : Road 12, Peace Avenue,Ado,Ekiti</p>
                            <p className='xl:text-2xl xsm:text-3xl  xsm:p-2  xl:p-0 font-semibold xsm:text-center xl:text-left'>Phone number : +2349061504648</p>
                            <p className='xl:text-2xl xsm:text-3xl  xsm:p-2  xl:p-0 font-semibold xsm:text-center xl:text-left'>Email: oluwadamilolafaj@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='xl:w-[30%] xl:pt-20 font-sans xl:pr-[10px] xl:flex xl:justify-end xsm:w-full xsm:flex xsm:justify-center xsm:pt-4'>
                    <div className=' xl:p-11 font-sans xl:space-y-6 xsm:text-center xl:text-left'>
                        <p className='xl:text-2xl xsm:text-3xl xsm:p-2 xl:p-0 font-semibold'><Link to="/">ABOUT US</Link></p>
                        <p className='xl:text-2xl xsm:text-3xl xsm:p-2 xl:p-0 font-semibold'>CONTACT US </p>
                        <p className='xl:text-2xl xsm:text-3xl xsm:p-2 xl:p-0 font-semibold'>ROOMS & RATES</p>
                        <p className='xl:text-2xl xsm:text-3xl xsm:p-2 xl:p-0 font-semibold'>FACILITIES</p>
                    </div>
                </div>
                <div className='xl:w-[30%] xl:pt-20 xl:flex xl:justify-end xsm:w-full xsm:flex xsm:justify-center xsm:pt-4'>
                    <div className='xl:p-11 font-sans xl:space-y-4 xsm:text-center xl:text-left xsm:p-10 xl:pr-[70px]'>
                        <p className='xl:text-[25px] xsm:text-3xl xsm:p-2 xl:p-0  font-semibold'><Link to="https://www.facebook.com/">FACEBOOK</Link></p>
                        <p className='xl:text-[25px] xsm:text-3xl xsm:p-2 xl:p-0  font-semibold'><Link to="https://www.instagram.com/">INSTAGRAM</Link></p>
                        <p className='xl:text-[25px] xsm:text-3xl xsm:p-2 xl:p-0  font-semibold'><Link to="https://x.com/?lang=en">TWITTER</Link></p>
                        <p className='xl:text-[25px] xsm:text-3xl xsm:p-2 xl:p-0  font-semibold'><Link to="https://www.snapchat.com/">SNAP CHAT</Link></p>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer