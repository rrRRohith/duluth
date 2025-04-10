export default function Services() {
    return (
        <>
            <div className="bg-gray-50">
                <div className="container m-auto px-4 py-24">
                    <div className="w-full flex items-center">
                        <div class="text-center m-auto">
                            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                Our Services
                            </h2>
                            <p class="mt-4 text-xl text-gray-600">
                                Comprehensive care services for all ages and
                                needs
                            </p>
                        </div>
                    </div>
                    <div
                        id="services"
                        className="mt-20 pb-8"
                        data-accordion="collapse"
                    >
                        <div className="bg-white rounded-md shadow-md mb-4">
                            <h2 id="services-heading-1">
                                <button
                                    type="button"
                                    className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                    data-accordion-target="#services-body-1"
                                    aria-expanded="true"
                                    aria-controls="services-body-1"
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
                                            className="lucide lucide-heart h-6 w-6 text-blue-500"
                                        >
                                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                        </svg>
                                        <div className="ml-3 text-left">
                                            <h3 className="text-lg font-medium text-gray-900">
                                                General Care
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                Basic care services including
                                                companionship and daily
                                                assistance.
                                            </p>
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
                                id="services-body-1"
                                className="hidden"
                                aria-labelledby="services-heading-1"
                            >
                                <div className="p-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                            <p className="font-medium text-gray-900">
                                                Companionship
                                            </p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                            <p className="font-medium text-gray-900">
                                                Light Housekeeping
                                            </p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                            <p className="font-medium text-gray-900">
                                                Meal Preparation
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
                            <h2 id="services-heading-2">
                                <button
                                    type="button"
                                    className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                    data-accordion-target="#services-body-2"
                                    aria-expanded="true"
                                    aria-controls="services-body-2"
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
                                            className="lucide lucide-stethoscope h-6 w-6 text-blue-500"
                                        >
                                            <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                                            <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
                                            <circle cx={20} cy={10} r={2} />
                                        </svg>
                                        <div className="ml-3 text-left">
                                            <h3 className="text-lg font-medium text-gray-900">
                                                Medical Care
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                Professional medical care and
                                                health monitoring services.
                                            </p>
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
                                id="services-body-2"
                                className="hidden"
                                aria-labelledby="services-heading-2"
                            >
                                <div className="p-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                            <p className="font-medium text-gray-900">
                                                Medication Management
                                            </p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                            <p className="font-medium text-gray-900">
                                                Wound Care
                                            </p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                            <p className="font-medium text-gray-900">
                                                Vital Signs Monitoring
                                            </p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                            <p className="font-medium text-gray-900">
                                                Health Assessments
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
                            <h2 id="services-heading-3">
                                <button
                                    type="button"
                                    className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                    data-accordion-target="#services-body-3"
                                    aria-expanded="true"
                                    aria-controls="services-body-3"
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
                                            className="lucide lucide-users h-6 w-6 text-blue-500"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx={9} cy={7} r={4} />
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                        <div className="ml-3 text-left">
                                            <h3 className="text-lg font-medium text-gray-900">
                                                Senior Care
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                Specialized care services
                                                tailored for elderly
                                                individuals.
                                            </p>
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
                                id="services-body-3"
                                className="hidden"
                                aria-labelledby="services-heading-3"
                            >
                                <div className="p-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                            <p className="font-medium text-gray-900">
                                                Fall Prevention
                                            </p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                            <p className="font-medium text-gray-900">
                                                Memory Care
                                            </p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                            <p className="font-medium text-gray-900">
                                                Mobility Assistance
                                            </p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                            <p className="font-medium text-gray-900">
                                                Social Activities
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
                            <h2 id="services-heading-4">
                                <button
                                    type="button"
                                    className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                    data-accordion-target="#services-body-4"
                                    aria-expanded="true"
                                    aria-controls="services-body-4"
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
                                            className="lucide lucide-brain h-6 w-6 text-blue-500"
                                        >
                                            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                                            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                                            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                                            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                                            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                                            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                                            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                                            <path d="M6 18a4 4 0 0 1-1.967-.516" />
                                            <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                                        </svg>
                                        <div className="ml-3 text-left">
                                            <h3 className="text-lg font-medium text-gray-900">
                                                Pediatric Care
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                Dedicated care services for
                                                children with special needs.
                                            </p>
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
                                id="services-body-4"
                                className="hidden"
                                aria-labelledby="services-heading-4"
                            >
                                <div className="p-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                            <p className="font-medium text-gray-900">
                                                Development Support
                                            </p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                            <p className="font-medium text-gray-900">
                                                Medical Care
                                            </p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                            <p className="font-medium text-gray-900">
                                                Educational Support
                                            </p>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                            <p className="font-medium text-gray-900">
                                                Family Assistance
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
                    </div>
                    <div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div class="bg-white rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
                            <div class="flex justify-center">
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
                                    class="lucide lucide-users h-8 w-8 text-blue-600"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <h3 class="mt-4 text-xl font-medium text-gray-900 text-center">
                                Skilled Nursing Care
                            </h3>
                            <p class="mt-2 text-gray-600 text-center">
                                Professional nursing services provided by
                                licensed nurses, including wound care,
                                medication management, and health monitoring.
                            </p>
                        </div>
                        <div class="bg-white rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
                            <div class="flex justify-center">
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
                                    class="lucide lucide-heart h-8 w-8 text-blue-600"
                                >
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                </svg>
                            </div>
                            <h3 class="mt-4 text-xl font-medium text-gray-900 text-center">
                                Personal Care Services
                            </h3>
                            <p class="mt-2 text-gray-600 text-center">
                                Assistance with daily activities such as
                                bathing, dressing, grooming, and meal
                                preparation.
                            </p>
                        </div>
                        <div class="bg-white rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
                            <div class="flex justify-center">
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
                                    class="lucide lucide-user-plus h-8 w-8 text-blue-600"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <line x1="19" x2="19" y1="8" y2="14"></line>
                                    <line
                                        x1="22"
                                        x2="16"
                                        y1="11"
                                        y2="11"
                                    ></line>
                                </svg>
                            </div>
                            <h3 class="mt-4 text-xl font-medium text-gray-900 text-center">
                                Companion Sitter Services
                            </h3>
                            <p class="mt-2 text-gray-600 text-center">
                                Companionship and assistance for elderly or
                                disabled individuals, providing emotional
                                support and basic care needs.
                            </p>
                        </div>
                        <div class="bg-white rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
                            <div class="flex justify-center">
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
                                    class="lucide lucide-clock h-8 w-8 text-blue-600"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                            <h3 class="mt-4 text-xl font-medium text-gray-900 text-center">
                                24/7 Care Available
                            </h3>
                            <p class="mt-2 text-gray-600 text-center">
                                Round-the-clock care options for patients who
                                require continuous monitoring and assistance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
