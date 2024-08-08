import React from 'react';
import Slider from 'react-slick';
import Header from '../constant/Header';
import Footer from '../constant/footer/Footer';
import background from '../../assets/images/background.png';
import bg2 from '../../assets/images/bg2.png';
import group3 from '../../assets/images/group3.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../App.css';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

// Custom arrow component for the previous slide
const PrevArrow = ({ className, style, onClick }) => (
    <BsChevronCompactLeft
        className={`${className} absolute  z-10 flex items-center justify-center cursor-pointer `}

        onClick={onClick}
        style={{ ...style, color: 'black', transform: 'scale(2.5)' }}
    />
);

// Custom arrow component for the next slide
const NextArrow = ({ className, style, onClick }) => (
    <BsChevronCompactRight
        className={`${className} absolute  z-10 flex items-center justify-center cursor-pointer`}

        onClick={onClick}
        style={{ ...style, color: 'black', transform: 'scale(2.5)' }}
    />
);

function Home() {
    const slides = [
        {
            url: 'https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
        },
        {
            url: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            url: 'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            url: 'https://images.pexels.com/photos/1591047/pexels-photo-1591047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
        },

    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default to 3 slides for larger screens
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: 'transparent',
                    borderRadius: '10px',
                    padding: '10px',
                    color: 'black'

                }}
            >
                <ul style={{ margin: '0px' }}> {dots} </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024, // Screen width 1024px or less
                settings: {
                    slidesToShow: 2, // Show 2 slides at a time
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 768, // Screen width 768px or less
                settings: {
                    slidesToShow: 1, // Show 1 slide at a time
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <Header />
            <div
                className="relative xl:w-full xl:h-[100vh] bg-cover bg-center xsm:w-[1100px] xsm:h-[80vh]"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="absolute inset-0 flex flex-col items-center gap-12 text-white justify-center">
                    <p className="font-bold font-roboto text-[69px] p-2 flex">
                        A Memorable Experience.
                    </p>
                    <button className="border-2 border-[#9B51E0] text-white bg-[#9B51E0] xl:w-[11%] xsm:p-4 xsm:text-3xl text-[24px] font-bold">
                        Reserve Now
                    </button>
                </div>
            </div>
            <div className="xl:w-[100%] xl:flex xl:justify-center xl:items-center xl:flex-row xl:mt-32 xl:pb-12 xsm:w-full xsm:justify-center xsm:flex xsm:flex-col">
                <div className="first w-[50%] xl:pt-0 xl:mb-24 xl:h-[60vh] xl:ml-[53px] xl:flex xl:flex-col xl:text-left xsm:text-center space-y-1 xsm:w-[1100px]">
                    <p className="text-black w-full font-sans font-bold pb-16 pl-6 xl:text-4xl xsm:pt-5 xsm:text-5xl">
                        About <span className="text-[#9B51E0]">Hotel Lunar</span>
                    </p>
                    <p className="font-sans pl-4 xl:text-xl font-semibold xsm:text-2xl">
                        Ladies and gentlemen, history keeps repeating itself but doesn't
                        <br />
                        teach us any lessons. 'Never again' has turned into 'again and
                        <br /> again and again. ' So today, ladies and gentlemen, take Hotel
                        Lunar as a <br /> wake-up call and a message to be our messenger
                        that people are the <br />
                        ones who can change what they want to change.
                    </p>
                    <p className="font-sans p-3 justify xl:text-xl font-semibold xsm:text-2xl">
                        Ladies and gentlemen, history keeps repeating itself but doesn't
                        <br /> teach us any lessons. 'Never again' has turned into 'again
                        <br />
                        and again and again. ' So today, ladies and gentlemen, take Hotel
                        Lunar as a <br /> wake-up call and a message to be our messenger
                        that people are the
                        <br /> ones who can change what they want to change.
                    </p>
                    <br />
                    <br />
                    <button className="font-sans font-semibold border-2 border-[#9B51E0] text-white bg-[#9B51E0] p-2 xl:ml-2 xl:p-0 xsm:w-40 xsm:text-2xl xl:w-40 xl:text-2xl xsm:p-2">
                        Read More
                    </button>
                </div>
                <div className="xsm:pt-[20px] xl:ml-[120px] xl:mr-3 xl:w-[1120px] xsm:flex xsm:ml-[200px] xsm:items-center xsm:w-[800px]">
                    <img src={bg2} alt="Background 2" className="xsm:flex xsm:justify-center xsm:items-center xsm:h-[590px] xl:h-[550px] xl:w-[630px]" />
                </div>
            </div>
            <div
                className="relative xl:w-full h-[96vh] bg-cover bg-center mt-20 mb-20 xsm:w-[1100px]"
                style={{ backgroundImage: `url(${group3})` }}
            >
                <div className="absolute inset-0 flex flex-col items-center text-white justify-center space-y-24">
                    <p className="font-bold font-sans xsm:text-5xl flex">
                        Events & Weddings
                    </p>
                    <p className="xl:font-bold font-sans xsm:text-2xl bg-inherit xsm:text-center xl:text-center flex text-2xl leading-[24px]">
                        Ladies and gentlemen, history keeps repeating itself but doesn't
                        teach us any lessons. 'Never again'
                        <br /> has turned into 'again and again and again.' So today, ladies
                        and gentlemen, take Hotel Lunar as a <br />
                        wake-up call and a message to be our messenger that people are the
                        ones who can change what they <br /> want to change.
                    </p>
                </div>
            </div>
            <div className='flex justify-center xl:w-full flex-col xsm:w-[1100px]'>
                <p className='xl:w-full flex font-bold xl:text-4xl xsm:text-5xl justify-center xl:pt-12 xl:pb-8 xsm:pb-20'>Our Galleries</p>
                <div className='xl:w-[1400px]  xl:pb-28 xl:ml-[65px] justify-center xsm:ml-[70px] xsm:mr-20 xsm:pb-16'>
                    <Slider {...settings}>
                        {slides.map((slide, index) => (
                            <div key={index} className=''>
                                <img
                                    src={slide.url}
                                    alt={`Slide ${index}`}
                                    className='xl:w-[400px] xl:h-[400px] xsm:w-[800px] xsm:h-[600px] xl:ml-9 xsm:ml-[80px]  '
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
