import React from 'react'
import Header from '../constant/Header'
import Footer from '../constant/footer/Footer'
import desk from '../../assets/images/desk.jpg'
import dsk from '../../assets/images/dsk.jpg'
import g1 from '../../assets/images/g1.jpg'
import g2 from '../../assets/images/g2.jpg'
import g3 from '../../assets/images/g3.jpg'
import g4 from '../../assets/images/g4.jpg'
import g5 from '../../assets/images/g5.jpg'
import { MdCall } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";





function Contactus() {
    return (
        <>
            <Header />
            <div
                className="relative xl:w-full xl:h-[100vh] bg-cover bg-center xsm:w-[1100px] xsm:h-[80vh]"
                style={{ backgroundImage: `url(${desk})` }}>
                <div className="absolute inset-0 flex flex-col  items-center  text-white justify-center mb-[15px]">
                    <p className='font-bold font-sans text-[70px] p-2 flex '>CONTACT US</p>




                </div>
            </div>
            <div className='xl:w-full flex justify-center items-center flex-col font-[roboto] xsm:w-[1100px]'>
                <p className='text-[34px] font-sans font-bold mt-20'> We’ll love to hear your feedback. Kindly send us a mail</p>
                <input type="text" placeholder='Your name' className='placeholder:text-[#4F4F4F] xsm:text-2xl xl:text-xl w-[880px] xl:p-3 xsm:p-4 border-2 border-[#9B51E0] mt-20' />
                <input type="Email" placeholder='Your email' className='placeholder:text-[#4F4F4F] xsm:text-2xl xl:text-xl w-[880px] xl:p-3 xsm:p-4 border-2 border-[#9B51E0] mt-10' />
                <textarea id="text" placeholder='Type your message' className='w-[880px] h-[145px]  placeholder:text-[#4F4F4F] xsm:text-2xl xl:text-xl border-2 border-[#9B51E0] mt-10'></textarea>
                <button className='w-[880px] bg-[#9B51E0] text-white p-3 mt-24' >SEND MESSAGE</button>
                <div className='flex w-full justify-around mt-20 mb-20'>
                    <p className='flex text-2xl font-bold font-[roboto] gap-3'><MdCall className=' text-[#9B51E0] w-7 h-8 text-lg ' />+2349061504648</p>
                    <p className='flex text-2xl font-bold font-[roboto] gap-3'> <AiOutlineMail className=' text-[#9B51E0] w-7 h-8 text-lg ' />  oluwadamilolafaj</p>
                    <p className='flex text-2xl font-bold font-[roboto] gap-3'> <IoLocationOutline className=' text-[#9B51E0] w-7 h-8 text-lg ' />Road 12, Peace Avenue,Ado,Ekiti</p>



                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contactus