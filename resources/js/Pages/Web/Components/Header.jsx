import { Link } from "@inertiajs/react";

export default function Header() {
    return (
        <>
            <nav className="bg-white shadow-lg fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link
                                className="flex items-center"
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
                                    className="lucide lucide-heart h-8 w-8 text-blue-600"
                                >
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                </svg>
                                <span className="ml-2 text-xl font-bold text-gray-800">
                                    Duluth Health Care Systems
                                </span>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-6">
                            <Link
                                href={route("home")}
                                className="text-gray-600 hover:text-blue-600"
                            >
                                Home
                            </Link>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-blue-600"
                            >
                                About Us
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-blue-600"
                            >
                                Services
                            </a>
                            <a
                                className="flex items-center text-gray-600 hover:text-blue-600"
                                href="#"
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
                                    className="lucide lucide-briefcase h-5 w-5 mr-1"
                                >
                                    <rect
                                        width={20}
                                        height={14}
                                        x={2}
                                        y={7}
                                        rx={2}
                                        ry={2}
                                    />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                                Careers
                            </a>
                            <div className="relative">
                                <button className="flex items-center text-gray-600 hover:text-blue-600">
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
                                        className="lucide lucide-building2 h-5 w-5 mr-1"
                                    >
                                        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                                        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                                        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                                        <path d="M10 6h4" />
                                        <path d="M10 10h4" />
                                        <path d="M10 14h4" />
                                        <path d="M10 18h4" />
                                    </svg>
                                    <span>For Facilities</span>
                                </button>
                            </div>
                            <a
                                href="#blog"
                                className="text-gray-600 hover:text-blue-600"
                            >
                                Blog
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-600 hover:text-blue-600"
                            >
                                Contact Us
                            </a>
                            {/* <div className="relative">
                                <button className="flex items-center text-gray-600 hover:text-blue-600">
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
                                        className="lucide lucide-globe h-5 w-5 mr-1"
                                    >
                                        <circle cx={12} cy={12} r={10} />
                                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                        <path d="M2 12h20" />
                                    </svg>
                                    <span>Language</span>
                                </button>
                            </div> */}
                            <a
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                href="/admin/login"
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
                                    className="lucide lucide-shield h-4 w-4 mr-2"
                                >
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                </svg>
                                Admin Login
                            </a>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="text-gray-600">
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
                                    className="lucide lucide-menu h-6 w-6"
                                >
                                    <line x1={4} x2={20} y1={12} y2={12} />
                                    <line x1={4} x2={20} y1={6} y2={6} />
                                    <line x1={4} x2={20} y1={18} y2={18} />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
