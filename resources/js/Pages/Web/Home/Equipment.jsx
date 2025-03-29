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
                    id="equipments"
                    className="mt-20"
                    data-accordion="collapse"
                >
                    <div className="bg-white rounded-md shadow-md mb-4">
                        <h2 id="equipments-heading-1">
                            <button
                                type="button"
                                className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                data-accordion-target="#equipments-body-1"
                                aria-expanded="true"
                                aria-controls="equipments-body-1"
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
                            id="equipments-body-1"
                            className="hidden"
                            aria-labelledby="equipments-heading-1"
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
                        <h2 id="equipments-heading-2">
                            <button
                                type="button"
                                className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                data-accordion-target="#equipments-body-2"
                                aria-expanded="true"
                                aria-controls="equipments-body-2"
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
                                        className="lucide lucide-bed h-6 w-6 text-blue-500"
                                    >
                                        <path d="M2 4v16" />
                                        <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                                        <path d="M2 17h20" />
                                        <path d="M6 8v9" />
                                    </svg>
                                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                                        Hospital Beds &amp; Accessories
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
                            id="equipments-body-2"
                            className="hidden"
                            aria-labelledby="equipments-heading-2"
                        >
                            <div className="p-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Electric Hospital Beds
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Manual Hospital Beds
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Bariatric Beds
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Bed Rails
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Pressure Relief Mattresses
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Over-bed Tables
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Bed Positioning Devices
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Bed Accessories
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
                        <h2 id="equipments-heading-3">
                            <button
                                type="button"
                                className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                data-accordion-target="#equipments-body-3"
                                aria-expanded="true"
                                aria-controls="equipments-body-3"
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
                                        className="lucide lucide-shower-head h-6 w-6 text-blue-500"
                                    >
                                        <path d="m4 4 2.5 2.5" />
                                        <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
                                        <path d="M15 5 5 15" />
                                        <path d="M14 17v.01" />
                                        <path d="M10 16v.01" />
                                        <path d="M13 13v.01" />
                                        <path d="M16 10v.01" />
                                        <path d="M11 20v.01" />
                                        <path d="M17 14v.01" />
                                        <path d="M20 11v.01" />
                                    </svg>
                                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                                        Bathroom Safety
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
                            id="equipments-body-3"
                            className="hidden"
                            aria-labelledby="equipments-heading-3"
                        >
                            <div className="p-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Shower Chairs
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Toilet Safety Rails
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Raised Toilet Seats
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Bath Lifts
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Grab Bars
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Bath Benches
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Commodes
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Non-Slip Mats
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
                        <h2 id="equipments-heading-4">
                            <button
                                type="button"
                                className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                data-accordion-target="#equipments-body-4"
                                aria-expanded="true"
                                aria-controls="equipments-body-4"
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
                                        className="lucide lucide-activity h-6 w-6 text-blue-500"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>
                                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                                        Patient Monitoring
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
                            id="equipments-body-4"
                            className="hidden"
                            aria-labelledby="equipments-heading-4"
                        >
                            <div className="p-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Blood Pressure Monitors
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Pulse Oximeters
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Blood Glucose Meters
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Heart Rate Monitors
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Temperature Monitors
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Fall Detection Devices
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Sleep Monitors
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            ECG Monitors
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
                        <h2 id="equipments-heading-5">
                            <button
                                type="button"
                                className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                data-accordion-target="#equipments-body-5"
                                aria-expanded="true"
                                aria-controls="equipments-body-5"
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
                                        className="lucide lucide-sun h-6 w-6 text-blue-500"
                                    >
                                        <circle cx={12} cy={12} r={4} />
                                        <path d="M12 2v2" />
                                        <path d="M12 20v2" />
                                        <path d="m4.93 4.93 1.41 1.41" />
                                        <path d="m17.66 17.66 1.41 1.41" />
                                        <path d="M2 12h2" />
                                        <path d="M20 12h2" />
                                        <path d="m6.34 17.66-1.41 1.41" />
                                        <path d="m19.07 4.93-1.41 1.41" />
                                    </svg>
                                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                                        Respiratory Equipment
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
                            id="equipments-body-5"
                            className="hidden"
                            aria-labelledby="equipments-heading-5"
                        >
                            <div className="p-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Oxygen Concentrators
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            CPAP Machines
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Nebulizers
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Suction Machines
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Ventilators
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Oxygen Tanks
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Air Purifiers
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Respiratory Supplies
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
                        <h2 id="equipments-heading-6">
                            <button
                                type="button"
                                className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                data-accordion-target="#equipments-body-6"
                                aria-expanded="true"
                                aria-controls="equipments-body-6"
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
                                        className="lucide lucide-chevron-first h-6 w-6 text-blue-500"
                                    >
                                        <path d="m17 18-6-6 6-6" />
                                        <path d="M7 6v12" />
                                    </svg>
                                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                                        Medical Supplies
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
                            id="equipments-body-6"
                            className="hidden"
                            aria-labelledby="equipments-heading-6"
                        >
                            <div className="p-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Wound Care Supplies
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Incontinence Products
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Diabetic Supplies
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Respiratory Supplies
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            First Aid Kits
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Compression Garments
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Ostomy Supplies
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Medical Tape &amp; Bandages
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
                        <h2 id="equipments-heading-7">
                            <button
                                type="button"
                                className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                data-accordion-target="#equipments-body-7"
                                aria-expanded="true"
                                aria-controls="equipments-body-7"
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
                                        className="lucide lucide-hand-metal h-6 w-6 text-blue-500"
                                    >
                                        <path d="M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" />
                                        <path d="M14 11V9a2 2 0 1 0-4 0v2" />
                                        <path d="M10 10.5V5a2 2 0 1 0-4 0v9" />
                                        <path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" />
                                    </svg>
                                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                                        Daily Living Aids
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
                            id="equipments-body-7"
                            className="hidden"
                            aria-labelledby="equipments-heading-7"
                        >
                            <div className="p-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Lift Chairs
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Patient Lifts
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Dressing Aids
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Eating Aids
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Reachers &amp; Grabbers
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Writing Aids
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Vision Aids
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Hearing Aids
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
                        <h2 id="equipments-heading-8">
                            <button
                                type="button"
                                className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                data-accordion-target="#equipments-body-8"
                                aria-expanded="true"
                                aria-controls="equipments-body-8"
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
                                        className="lucide lucide-bone h-6 w-6 text-blue-500"
                                    >
                                        <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
                                    </svg>
                                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                                        Orthopedic Supplies
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
                            id="equipments-body-8"
                            className="hidden"
                            aria-labelledby="equipments-heading-8"
                        >
                            <div className="p-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Braces &amp; Supports
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Cervical Collars
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Knee Walkers
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Cast Covers
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Hot/Cold Therapy
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Orthopedic Pillows
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Foot Care Products
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Compression Therapy
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
                        <h2 id="equipments-heading-9">
                            <button
                                type="button"
                                className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                data-accordion-target="#equipments-body-9"
                                aria-expanded="true"
                                aria-controls="equipments-body-9"
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
                                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                                        Diagnostic Equipment
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
                            id="equipments-body-9"
                            className="hidden"
                            aria-labelledby="equipments-heading-9"
                        >
                            <div className="p-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Stethoscopes
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Otoscopes
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Blood Testing Devices
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Diagnostic Sets
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Vision Screening
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Reflex Hammers
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Thermometers
                                        </p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                                        <p className="text-gray-700">
                                            Weight Scales
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
                <div class="mt-12 text-center">
                    <button class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                        View Full Catalog
                    </button>
                </div>
            </div>
        </>
    );
}
