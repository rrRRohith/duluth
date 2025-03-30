import Layout from "../Components/Layout";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import classNames from "classnames";

export default function Login() {
    const [loginType, setLoginType] = useState("admin");
    return (
        <Layout title="Login">
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="absolute top-4 left-4">
                    <Link
                        className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        href={route("home")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-home h-5 w-5 mr-2"
                        >
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="flex justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-heart h-12 w-12 text-blue-600"
                        >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Healthcare Portal
                    </h2>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <div className="flex justify-center space-x-4 mb-8">
                            <button
                                onClick={(e) => setLoginType("admin")}
                                className={classNames('flex items-center px-4 py-2 rounded-md', {'bg-blue-600 text-white' : loginType == 'admin', 'bg-gray-100 text-gray-600 hover:bg-gray-200' : loginType == 'staff'})}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-user-plus h-5 w-5 mr-2"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx={9} cy={7} r={4} />
                                    <line x1={19} x2={19} y1={8} y2={14} />
                                    <line x1={22} x2={16} y1={11} y2={11} />
                                </svg>
                                Admin Portal
                            </button>
                            <button
                                onClick={(e) => setLoginType("staff")}
                                className={classNames('flex items-center px-4 py-2 rounded-md', {'bg-blue-600 text-white' : loginType == 'staff', 'bg-gray-100 text-gray-600 hover:bg-gray-200' : loginType == 'admin'})}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-users h-5 w-5 mr-2"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx={9} cy={7} r={4} />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                Staff Portal
                            </button>
                        </div>
                        {loginType == "admin" && (
                            <form className="space-y-6">
                                <p className="text-sm text-gray-600 text-center mb-4">
                                    Admin access is restricted to authorized
                                    personnel only.
                                </p>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Admin Sign In
                                    </button>
                                </div>
                                {/* <div className="text-center mt-4">
                                <button
                                    type="button"
                                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                >
                                    Create Admin Account
                                </button>
                            </div> */}
                            </form>
                        )}
                        {loginType == "staff" && (
                            <form className="space-y-6">
                                <p className="text-sm text-gray-600 text-center mb-4">
                                    Access training resources and documentation.
                                </p>
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Staff Sign In
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
