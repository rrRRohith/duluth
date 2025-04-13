import { Link, usePage } from "@inertiajs/react";

export default function Header() {
    const { user } = usePage().props.auth;
    const { site_settings, main_menu } = usePage().props;

    const DashboardLink = () => {
        return (
            <>
                {user ? (
                    <Link
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                        href={route("login")}
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
                        Dashboard
                    </Link>
                ) : (
                    <Link
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                        href={route("login")}
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
                    </Link>
                )}
            </>
        );
    };

    return (
        <>
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-3 shadow-lg fixed w-full z-50">
                    <div className="flex flex-wrap justify-between items-center mx-auto container">
                        <a
                            href="https://flowbite.com"
                            className="flex items-center"
                        >
                            <i className="bi bi-heart text-blue-600 text-2xl mr-3 flex items-center"></i>
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                {site_settings.name}
                            </span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <div className="hidden sm:block">
                                <DashboardLink />
                            </div>
                            <button
                                data-collapse-toggle="mobile-menu-2"
                                type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            className="lg:ms-auto lg:me-6 hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                {main_menu && main_menu?.children && (
                                    <>
                                        {main_menu.children.map(
                                            (item, index) => (
                                                <li key={index}>
                                                    <Link
                                                        href={item.link}
                                                        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                                                    >
                                                        {item.icon && (
                                                            <i
                                                                className={`bi ${item.icon} mr-1`}
                                                            />
                                                        )}
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </>
                                )}
                            </ul>
                            <div className="mt-4 sm:hidden">
                                <DashboardLink />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
