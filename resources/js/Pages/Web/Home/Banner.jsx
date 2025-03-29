export default function Banner() {
    return (
        <>
            <div className="relative pt-16">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                        alt="Healthcare professionals"
                    />
                    <div className="absolute inset-0 bg-blue-900 opacity-75" />
                </div>
                <div className="relative max-w-5xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Duluth Health Care Systems
                        </h1>
                        <p className="mt-6 text-xl text-white max-w-2xl mx-auto">
                            Providing compassionate and comprehensive home
                            health care services to the Duluth community. Our
                            experienced team is dedicated to delivering
                            exceptional care right in the comfort of your home.
                        </p>
                        <div className="mt-10 flex justify-center space-x-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
                            >
                                Get Started
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800 hover:bg-opacity-20"
                            >
                                Our Services
                            </a>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="bg-blue-800 bg-opacity-50 backdrop-blur-lg rounded-lg p-6 border border-blue-700">
                            <div className="flex items-center">
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
                                    className="lucide lucide-shield h-6 w-6 text-blue-100"
                                >
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                </svg>
                                <h3 className="ml-3 text-lg font-medium text-white">
                                    Licensed &amp; Insured
                                </h3>
                            </div>
                            <p className="mt-2 text-blue-100">
                                Fully certified healthcare providers
                            </p>
                        </div>
                        <div className="bg-blue-800 bg-opacity-50 backdrop-blur-lg rounded-lg p-6 border border-blue-700">
                            <div className="flex items-center">
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
                                    className="lucide lucide-award h-6 w-6 text-blue-100"
                                >
                                    <circle cx={12} cy={8} r={6} />
                                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                                </svg>
                                <h3 className="ml-3 text-lg font-medium text-white">
                                    Quality Care
                                </h3>
                            </div>
                            <p className="mt-2 text-blue-100">
                                Excellence in home healthcare services
                            </p>
                        </div>
                        <div className="bg-blue-800 bg-opacity-50 backdrop-blur-lg rounded-lg p-6 border border-blue-700">
                            <div className="flex items-center">
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
                                    className="lucide lucide-clock h-6 w-6 text-blue-100"
                                >
                                    <circle cx={12} cy={12} r={10} />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <h3 className="ml-3 text-lg font-medium text-white">
                                    24/7 Support
                                </h3>
                            </div>
                            <p className="mt-2 text-blue-100">
                                Round-the-clock care availability
                            </p>
                        </div>
                        <div className="bg-blue-800 bg-opacity-50 backdrop-blur-lg rounded-lg p-6 border border-blue-700">
                            <div className="flex items-center">
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
                                    className="lucide lucide-users h-6 w-6 text-blue-100"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx={9} cy={7} r={4} />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                <h3 className="ml-3 text-lg font-medium text-white">
                                    Experienced Staff
                                </h3>
                            </div>
                            <p className="mt-2 text-blue-100">
                                Dedicated healthcare professionals
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
