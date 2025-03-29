export default function Equipment() {
    return (
        <>
            <div className="container m-auto px-4 py-24">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Durable Medical Equipment
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Comprehensive Medical Equipment and Supplies for Home
                        Healthcare
                    </p>
                </div>
                <div
                    id="accordion-collapse"
                    className="mt-20"
                    data-accordion="collapse"
                >
                    <div className="bg-white rounded-md shadow-md mb-4">
                        <h2 id="accordion-collapse-heading-5">
                            <button
                                type="button"
                                className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                data-accordion-target="#accordion-collapse-body-5"
                                aria-expanded="true"
                                aria-controls="accordion-collapse-body-5"
                            >
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
                                        className="lucide lucide-armchair h-6 w-6 text-blue-500"
                                    >
                                        <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                                        <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z" />
                                        <path d="M5 18v2" />
                                        <path d="M19 18v2" />
                                    </svg>
                                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                                        Mobility Equipment
                                    </h3>
                                </div>
                                <svg
                                    data-accordion-icon
                                    className="w-3 h-3 rotate-180 shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-collapse-body-5"
                            className="hidden"
                            aria-labelledby="accordion-collapse-heading-5"
                        >
                            <div className="p-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Manual Wheelchairs
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Power Wheelchairs
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Mobility Scooters
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Walkers &amp; Rollators
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Canes &amp; Crutches
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Patient Transfer Devices
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Wheelchair Cushions
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Wheelchair Accessories
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 text-right">
                                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                                        Learn More
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
                                            className="lucide lucide-chevron-down ml-1 h-4 w-4"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md mb-4">
                        <h2 id="accordion-collapse-heading-2">
                            <button
                                type="button"
                                className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                data-accordion-target="#accordion-collapse-body-2"
                                aria-expanded="true"
                                aria-controls="accordion-collapse-body-2"
                            >
                                <div className="flex gap-2 items-center">
                                    <div className="text-blue-600 text-2xl">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-stethoscope h-6 w-6 text-blue-500"
                                        >
                                            <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path>
                                            <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
                                            <circle
                                                cx="20"
                                                cy="10"
                                                r="2"
                                            ></circle>
                                        </svg>
                                    </div>
                                    <div className="text-start">
                                        <div>Medical Care</div>
                                        <div className="text-sm font-normal">
                                            Professional medical care and health
                                            monitoring services.
                                        </div>
                                    </div>
                                </div>
                                <svg
                                    data-accordion-icon
                                    className="w-3 h-3 rotate-180 shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-collapse-body-2"
                            className="hidden"
                            aria-labelledby="accordion-collapse-heading-2"
                        >
                            <div className="p-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div
                                        role="button"
                                        className="bg-gray-50 hover:bg-blue-50 w-full p-3 font-semibold rounded-md"
                                    >
                                        Medication Management
                                    </div>
                                    <div
                                        role="button"
                                        className="bg-gray-50 hover:bg-blue-50 w-full p-3 font-semibold rounded-md"
                                    >
                                        Wound Care
                                    </div>
                                    <div
                                        role="button"
                                        className="bg-gray-50 hover:bg-blue-50 w-full p-3 font-semibold rounded-md"
                                    >
                                        Vital Signs Monitoring
                                    </div>
                                    <div
                                        role="button"
                                        className="bg-gray-50 hover:bg-blue-50 w-full p-3 font-semibold rounded-md"
                                    >
                                        Health Assessments
                                    </div>
                                </div>
                                <div className="mt-4 text-right">
                                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                                        Learn More
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
                                            className="lucide lucide-chevron-down ml-1 h-4 w-4"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md mb-4">
                        <h2 id="accordion-collapse-heading-3">
                            <button
                                type="button"
                                className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                data-accordion-target="#accordion-collapse-body-3"
                                aria-expanded="true"
                                aria-controls="accordion-collapse-body-3"
                            >
                                <div className="flex gap-2 items-center">
                                    <div className="text-blue-600 text-2xl">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-users h-6 w-6 text-blue-500"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <circle
                                                cx="9"
                                                cy="7"
                                                r="4"
                                            ></circle>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <div className="text-start">
                                        <div>Senior Care</div>
                                        <div className="text-sm font-normal">
                                            Specialized care services tailored
                                            for elderly individuals.
                                        </div>
                                    </div>
                                </div>
                                <svg
                                    data-accordion-icon
                                    className="w-3 h-3 rotate-180 shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-collapse-body-3"
                            className="hidden"
                            aria-labelledby="accordion-collapse-heading-3"
                        >
                            <div className="p-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div
                                        role="button"
                                        className="bg-gray-50 hover:bg-blue-50 w-full p-3 font-semibold rounded-md"
                                    >
                                        Fall Prevention
                                    </div>
                                    <div
                                        role="button"
                                        className="bg-gray-50 hover:bg-blue-50 w-full p-3 font-semibold rounded-md"
                                    >
                                        Memory Care
                                    </div>
                                    <div
                                        role="button"
                                        className="bg-gray-50 hover:bg-blue-50 w-full p-3 font-semibold rounded-md"
                                    >
                                        Mobility Assistance
                                    </div>
                                    <div
                                        role="button"
                                        className="bg-gray-50 hover:bg-blue-50 w-full p-3 font-semibold rounded-md"
                                    >
                                        Social Activities
                                    </div>
                                </div>
                                <div className="mt-4 text-right">
                                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                                        Learn More
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
                                            className="lucide lucide-chevron-down ml-1 h-4 w-4"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md mb-4">
                        <h2 id="accordion-collapse-heading-4">
                            <button
                                type="button"
                                className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                data-accordion-target="#accordion-collapse-body-4"
                                aria-expanded="true"
                                aria-controls="accordion-collapse-body-4"
                            >
                                <div className="flex gap-2 items-center">
                                    <div className="text-blue-600 text-2xl">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-brain h-6 w-6 text-blue-500"
                                        >
                                            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                                            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                                            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                                            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                                            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                                            <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                                            <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                                            <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                                            <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                                        </svg>
                                    </div>
                                    <div className="text-start">
                                        <div>Pediatric Care</div>
                                        <div className="text-sm font-normal">
                                            Dedicated care services for children
                                            with special needs.
                                        </div>
                                    </div>
                                </div>
                                <svg
                                    data-accordion-icon
                                    className="w-3 h-3 rotate-180 shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-collapse-body-4"
                            className="hidden"
                            aria-labelledby="accordion-collapse-heading-4"
                        >
                            <div className="p-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div
                                        role="button"
                                        className="bg-gray-50 hover:bg-blue-50 w-full p-3 font-semibold rounded-md"
                                    >
                                        Development Support
                                    </div>
                                    <div
                                        role="button"
                                        className="bg-gray-50 hover:bg-blue-50 w-full p-3 font-semibold rounded-md"
                                    >
                                        Medical Care
                                    </div>
                                    <div
                                        role="button"
                                        className="bg-gray-50 hover:bg-blue-50 w-full p-3 font-semibold rounded-md"
                                    >
                                        Educational Support
                                    </div>
                                    <div
                                        role="button"
                                        className="bg-gray-50 hover:bg-blue-50 w-full p-3 font-semibold rounded-md"
                                    >
                                        Family Assistance
                                    </div>
                                </div>
                                <div className="mt-4 text-right">
                                    <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                                        Learn More
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
                                            className="lucide lucide-chevron-down ml-1 h-4 w-4"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
