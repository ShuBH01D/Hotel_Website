import React from 'react'
import Header from '../constant/Header'
import Footer from '../constant/footer/Footer'
import background from '../../assets/images/background.png'
import back from '../../assets/images/back.jpeg'
import s1 from '../../assets/images/s1.jpeg'
import s2 from '../../assets/images/s2.jpeg'
import s3 from '../../assets/images/s3.jpeg'
import s4 from '../../assets/images/s4.webp'
function Roomsandsuits() {
    return (
        < >
            <Header />
            <div
                className="relative xl:w-full xl:h-[100vh] bg-cover bg-center xsm:w-[1100px] xsm:h-[80vh]"
                style={{ backgroundImage: `url(${back})` }}>
                <div className="absolute inset-0 bg-red-900 opacity-10"></div>
                <div className="absolute inset-0 flex flex-col  items-center  text-white justify-center mb-[115px]">
                    <p className='font-bold font-sans text-[69px] p-2 flex '>OUR ROOMS AND RATE</p>
                </div>
            </div>

            <div className='xl:w-full  flex xl:mt-[150px] xsm:mt-12 xsm:w-[1100px] xsm:gap-3 xsm:flex-col xl:flex-row '>
                <div className=' xl:w-3/6  h-full  flex flex-col xsm:w-[1100px]  '>
                    <div className='w-full flex justify-center'><img src={s1} alt="rm1" className='w-[624px] h-[390px]'></img></div>
                    <h1 className='font-sans xsm:text-5xl xl:text-3xl font-bold flex justify-center pt-11'>Standard Double Room</h1>

                    <ul className=' ml-[11%] mt-[5%] space-y-4 list-disc text-2xl xl:pl-[0px] xsm:flex xsm:flex-col xsm:pl-[150px]'>
                        <li className='xsm:'>1 Bathroom</li>
                        <li>2 Beds</li>
                        <li>2 People</li>
                    </ul>
                    <div className='flex space-x-[20%] items-center pt-9 xl:w-full xsm:w-[1100px] xsm:flex xsm:items-center xsm:pl-[160px] xl:pl-[0px]'>
                        <div className='flex ml-14 xl:w-[60%] w-[1100px]' ><p className='text-[#9B51E0] font-bold xl:text-4xl xsm:text-3xl'>100,000 per night</p></div>
                        <div className='xl:w-[40%] xl:pr-20 xsm:w-[1100px]'>
                            <button className='bg-[#9B51E0] font-[Roboto] text-white px-2 h-12 text-2xl font-bold'>BOOK NOW</button>
                        </div>
                    </div>

                </div>
                <div className=' xl:w-3/6  h-full  flex flex-col xsm:w-[1100px] xsm:mt-12 xl:mt-0  '>
                    <div className='w-full flex justify-center'><img src={s2} alt="rm1" className='w-[624px] h-[390px]'></img></div>
                    <h1 className='font-sans xsm:text-5xl xl:text-3xl  font-bold flex justify-center pt-11'>Standard Double Room</h1>

                    <ul className=' ml-[11%] mt-[5%] space-y-4 list-disc text-2xl xl:pl-[0px] xsm:flex xsm:flex-col xsm:pl-[150px]'>
                        <li className='xsm:'>1 Bathroom</li>
                        <li>2 Beds</li>
                        <li>2 People</li>
                    </ul>
                    <div className='flex space-x-[20%] items-center pt-9 xl:w-full xsm:w-[1100px] xsm:flex xsm:items-center xsm:pl-[160px] xl:pl-[0px]'>
                        <div className='flex ml-14 xl:w-[60%] w-[1100px]' ><p className='text-[#9B51E0] font-bold xl:text-4xl xsm:text-3xl'>100,000 per night</p></div>
                        <div className='xl:w-[40%] xl:pr-20 xsm:w-[1100px]'>
                            <button className='bg-[#9B51E0] font-[Roboto] text-white px-2 h-12 text-2xl font-bold'>BOOK NOW</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className='xl:w-full  flex xl:mt-[70px] xsm:mt-12 xsm:w-[1100px] xsm:gap-3 xsm:flex-col xl:flex-row '>
                <div className=' xl:w-3/6  h-full  flex flex-col xsm:w-[1100px]  '>
                    <div className='w-full flex justify-center'><img src={s3} alt="rm1" className='w-[624px] h-[390px]'></img></div>
                    <h1 className='font-sans xsm:text-5xl xl:text-3xl  font-bold flex justify-center pt-11'>Standard Double Room</h1>

                    <ul className=' ml-[11%] mt-[5%] space-y-4 list-disc text-2xl xl:pl-[0px] xsm:flex xsm:flex-col xsm:pl-[150px]'>
                        <li className='xsm:'>1 Bathroom</li>
                        <li>2 Beds</li>
                        <li>2 People</li>
                    </ul>
                    <div className='flex space-x-[20%] items-center pt-9 xl:w-full xsm:w-[1100px] xsm:flex xsm:items-center xsm:pl-[160px] xl:pl-[0px]'>
                        <div className='flex ml-14 xl:w-[60%] w-[1100px]' ><p className='text-[#9B51E0] font-bold xl:text-4xl xsm:text-3xl'>100,000 per night</p></div>
                        <div className='xl:w-[40%] xl:pr-20 xsm:w-[1100px]'>
                            <button className='bg-[#9B51E0] font-[Roboto] text-white px-2 h-12 text-2xl font-bold'>BOOK NOW</button>
                        </div>
                    </div>

                </div>
                <div className=' xl:w-3/6  h-full  flex flex-col xsm:w-[1100px] xsm:mt-12 xl:mt-0 '>
                    <div className='w-full flex justify-center'><img src={s4} alt="rm1" className='w-[624px] h-[390px]'></img></div>
                    <h1 className='font-sans xsm:text-5xl xl:text-3xl font-bold flex justify-center pt-11'>Standard Double Room</h1>

                    <ul className=' ml-[11%] mt-[5%] space-y-4 list-disc text-2xl xl:pl-[0px] xsm:flex xsm:flex-col xsm:pl-[150px]'>
                        <li className='xsm:'>1 Bathroom</li>
                        <li>2 Beds</li>
                        <li>2 People</li>
                    </ul>
                    <div className='flex space-x-[20%] items-center pt-9 xl:w-full xsm:w-[1100px] xsm:flex xsm:items-center xsm:pl-[160px] xl:pl-[0px]'>
                        <div className='flex ml-14 xl:w-[60%] w-[1100px]' ><p className='text-[#9B51E0] font-bold xl:text-4xl xsm:text-3xl'>100,000 per night</p></div>
                        <div className='xl:w-[40%] xl:pr-20 xsm:w-[1100px]'>
                            <button className='bg-[#9B51E0] font-[Roboto] text-white px-2 h-12 text-2xl font-bold'>BOOK NOW</button>
                        </div>
                    </div>

                </div>
            </div>




            <div className='xl:w-full  flex xl:mt-[70px] xsm:mt-12 xsm:w-[1100px] xsm:gap-3 xsm:flex-col xl:flex-row '>
                <div className=' xl:w-3/6  h-full  flex flex-col xsm:w-[1100px]  '>
                    <div className='w-full flex justify-center'><img src={s2} alt="rm1" className='w-[624px] h-[390px]'></img></div>
                    <h1 className='font-sans xsm:text-5xl xl:text-3xl  font-bold flex justify-center pt-11'>Standard Double Room</h1>

                    <ul className=' ml-[11%] mt-[5%] space-y-4 list-disc text-2xl xl:pl-[0px] xsm:flex xsm:flex-col xsm:pl-[150px]'>
                        <li className='xsm:'>1 Bathroom</li>
                        <li>2 Beds</li>
                        <li>2 People</li>
                    </ul>
                    <div className='flex space-x-[20%] items-center pt-9 xl:w-full xsm:w-[1100px] xsm:flex xsm:items-center xsm:pl-[160px] xl:pl-[0px]'>
                        <div className='flex ml-14 xl:w-[60%] w-[1100px]' ><p className='text-[#9B51E0] font-bold xl:text-4xl xsm:text-3xl'>100,000 per night</p></div>
                        <div className='xl:w-[40%] xl:pr-20 xsm:w-[1100px]'>
                            <button className='bg-[#9B51E0] font-[Roboto] text-white px-2 h-12 text-2xl font-bold'>BOOK NOW</button>
                        </div>
                    </div>

                </div>
                <div className=' xl:w-3/6  h-full  flex flex-col xsm:w-[1100px]  xsm:mt-12 xl:mt-0 xsm:mb-12'>
                    <div className='w-full flex justify-center'><img src={s1} alt="rm1" className='w-[624px] h-[390px]'></img></div>
                    <h1 className='font-sans xsm:text-5xl xl:text-3xl  font-bold flex justify-center pt-11'>Standard Double Room</h1>

                    <ul className=' ml-[11%] mt-[5%] space-y-4 list-disc text-2xl xl:pl-[0px] xsm:flex xsm:flex-col xsm:pl-[150px]'>
                        <li className='xsm:'>1 Bathroom</li>
                        <li>2 Beds</li>
                        <li>2 People</li>
                    </ul>
                    <div className='flex space-x-[20%] items-center pt-9 xl:w-full xsm:w-[1100px] xsm:flex xsm:items-center xsm:pl-[160px] xl:pl-[0px]'>
                        <div className='flex ml-14 xl:w-[60%] w-[1100px]' ><p className='text-[#9B51E0] font-bold xl:text-4xl xsm:text-3xl'>100,000 per night</p></div>
                        <div className='xl:w-[40%] xl:pr-20 xsm:w-[1100px]'>
                            <button className='bg-[#9B51E0] font-[Roboto] text-white px-2 h-12 text-2xl font-bold'>BOOK NOW</button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Roomsandsuits