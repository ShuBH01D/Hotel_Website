import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="container xl:mx-auto xl:flex xl:items-center xl:justify-between xl:p-5 text-black xl:w-full xl:flex-row xsm:flex xsm:flex-col xsm:w-full">
                <div className="xl:w-[40%] xl:flex text-[rgb(152,63,235)] xl:text-3xl font-Roboto font-bold xl:ml-1 xsm:w-[100%]  xsm:flex xsm:justify-center xsm:ml-96 xsm:text-5xl xsm:p-4">
                    Hotel Lunar
                </div>
                <nav className='xl:w-[60%] xl:flex xsm:w-full xsm:flex xsm:justify-center xsm:mx-36 xsm:p-5'>
                    <ul className="xl:flex font-[Roboto] font-bold xl:text-[25px] text-black xl:space-x-20 xl:pl-14 xsm:w-[100%] xsm:flex xsm:space-x-10 xsm:text-3xl">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `text-gray-700 hover:text-[#b05cff] transition-colors duration-300 ${isActive ? 'text-[#b05cff]' : 'text-gray-700'}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/room"
                                className={({ isActive }) =>
                                    `text-gray-700 hover:text-[#b05cff] transition-colors duration-300 ${isActive ? 'text-[#b05cff]' : 'text-gray-700'}`
                                }
                            >
                                Rooms&Suites
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/facilities"
                                className={({ isActive }) =>
                                    `text-gray-700 hover:text-[#b05cff] transition-colors duration-300 ${isActive ? 'text-[#b05cff]' : 'text-gray-700'}`
                                }
                            >
                                Facilities
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `text-gray-700 hover:text-[#b05cff] transition-colors duration-300 ${isActive ? 'text-[#b05cff]' : 'text-gray-700'}`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink

                                className={({ isActive }) =>
                                    `text-gray-700 hover:text-[#b05cff] transition-colors duration-300'text-[#b05cff]' : 'text-gray-700'}`
                                }
                            >
                                Offers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink

                                className={({ isActive }) =>
                                    `text-gray-700 hover:text-[#b05cff] transition-colors duration-300  'text-[#b05cff]' : 'text-gray-700'}`
                                }
                            >
                                Events
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
