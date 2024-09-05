import { Link } from 'react-router-dom';


function Header() {

    return (
        <header className="bg-white shadow-md ">
            <div className="container xl:mx-auto xl:flex xl:pb-9 xsm:pb-8  xl:justify-between xl: text-black xl:w-full xl:flex-row xsm:flex xsm:flex-col xsm:w-full">
                <div className="xl:w-[30%] xl:flex text-[#9B51E0] xl:text-3xl font-Roboto font-bold xl:-ml-14 xl:pt-9 xsm:w-[100%]  xsm:flex xsm:justify-center xsm:ml-96 xsm:text-5xl xsm:p-4">
                    Hotel Lunar
                </div>
                <nav className='xl:w-[70%] xl:flex xsm:w-full xsm:flex xsm:justify-center xsm:mx-20 xsm:pt-9 xl:pr-12'>
                    <ul className="xl:flex font-[#Roboto] font-bold xl:text-[23px] text-[#4F4F4F] xl:space-x-16 xl:ml-52  xsm:w-[100%] xsm:flex xsm:space-x-10 xsm:text-3xl ">
                        <li>
                            <Link
                                to="/"
                                className="text-gray-700 hover:text-[#b05cff] transition-colors duration-30 ]"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/room"
                                className="text-gray-700 hover:text-[#b05cff] transition-colors duration-300 flex flex-row xl:w-[160px] xsm:w-[240px]"
                            >
                                Rooms & Suits
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/facilities"
                                className="text-gray-700 hover:text-[#b05cff] transition-colors duration-300  xl:pl-2 xsm:pl-0"
                            >
                                Facilities
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="text-gray-700 hover:text-[#b05cff] transition-colors duration-300 xl:pl-2">
                                Contacts
                            </Link>
                        </li>
                        <li>
                            <Link

                                className="text-gray-700 hover:text-[#b05cff] transition-colors duration-300 xl:pl-1 xsm:pl-0"
                            >
                                Offers
                            </Link>
                        </li>
                        <li>
                            <Link

                                className="text-gray-700 hover:text-[#b05cff] transition-colors duration-300 xl:-pl-1 xsm:pl-0"
                            >
                                Events
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;