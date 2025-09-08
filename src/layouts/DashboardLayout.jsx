import React from 'react';
import { NavLink, Outlet } from 'react-router';
import { FaFileSignature, FaHome } from 'react-icons/fa';
import useUserRole from '../hooks/useUserRole';
import Logo from '../components/shared/Logo';
import { FaQuoteRight } from 'react-icons/fa6';


const DashboardLayout = () => {
    const { role, roleLoading } = useUserRole();

    return (
         <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {/* Navbar */}
                <div className="navbar bg-[#78cbee] w-full lg:hidden">
                    <div className="flex-none ">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 font-semibold lg:hidden">Dashboard</div>

                </div>
                
                <Outlet/>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full gap-3 w-72 p-4 font-medium">
                    {/* Sidebar content here */}
                    <Logo/>

                    <li>
                        <NavLink to="/dashboard" end>
                            <FaHome className="inline mr-2" /> Dashboard Home
                        </NavLink>
                    </li>
                                   
                    {/* user links */}
                    {!roleLoading && role === 'user' && (
                    <>
                        <li>
                            <NavLink to="/dashboard/myQuotes">
                                <FaFileSignature className="inline-block mr-2" />
                                My Quotes
                            </NavLink>
                        </li>
                    </>
                    )}

                    {/* admin links */}
                    {!roleLoading && role === 'admin' && (
                    <>
                        <li>
                            <NavLink to="/dashboard/manageQuotes">
                                <FaQuoteRight className="inline-block mr-2" />
                                Manage Quotes
                            </NavLink>
                        </li>
                    </>
                    )}

                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;