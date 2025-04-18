import { usePage } from "@inertiajs/react";

export default function Equipment() {
    const {home_page_settings, equipment_accordions} =  usePage().props;
    return (
        <>
            <div className="container m-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        {home_page_settings?.equipments?.title}
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        {home_page_settings?.equipments?.description}
                    </p>
                </div>
                <div
                        id="equipments"
                        className="mt-20 pb-8"
                        data-accordion="collapse"
                    >
                        {equipment_accordions.map((equipment, index) => (
                            <>
                                <div className="bg-white rounded-md shadow-md mb-4">
                                    <h2 id="equipments-heading-1">
                                        <button
                                            type="button"
                                            className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                            data-accordion-target={`#equipments-body-${index}`}
                                            aria-controls={`equipments-body-${index}`}
                                        >
                                            <div className="flex items-center">
                                                <i
                                                    className={`text-2xl text-blue-600 bi ${equipment.icon}`}
                                                ></i>
                                                <div className="ml-3 text-left">
                                                    <h3 className="text-lg font-medium text-gray-900">
                                                        {equipment.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-500">
                                                        {equipment.description}
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
                                        id={`equipments-body-${index}`}
                                        className="hidden"
                                        aria-labelledby={`equipments-heading-${index}`}
                                    >
                                        <div className="p-5">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                                {equipment.equipments.map(
                                                    (subService, subIndex) => (
                                                        <>
                                                            <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                                                <p className="font-medium text-gray-900">
                                                                    {
                                                                        subService.title
                                                                    }
                                                                </p>
                                                            </div>
                                                        </>
                                                    )
                                                )}
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
                            </>
                        ))}
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
