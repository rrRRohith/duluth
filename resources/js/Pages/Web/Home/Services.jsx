import { usePage } from "@inertiajs/react";

export default function Services() {
    const { home_page_settings, service_accordions, service_cards } =
        usePage().props;
    return (
        <>
            <div className="bg-gray-50">
                <div className="container m-auto px-4 py-24 sm:px-6 lg:px-8">
                    <div className="w-full flex items-center">
                        <div class="text-center m-auto">
                            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                {home_page_settings?.services?.title}
                            </h2>
                            <p class="mt-4 text-xl text-gray-600">
                                {home_page_settings?.services?.description}
                            </p>
                        </div>
                    </div>
                    <div
                        id="services"
                        className="mt-20 pb-8"
                        data-accordion="collapse"
                    >
                        {service_accordions.map((service, index) => (
                            <>
                                <div className="bg-white rounded-md shadow-md mb-4">
                                    <h2 id="services-heading-1">
                                        <button
                                            type="button"
                                            className="hover:bg-gray-50 rounded-md flex items-center justify-between w-full p-5 font-medium"
                                            data-accordion-target={`#services-body-${index}`}
                                            aria-controls={`services-body-${index}`}
                                        >
                                            <div className="flex items-center">
                                                <i
                                                    className={`text-2xl text-blue-600 bi ${service.icon}`}
                                                ></i>
                                                <div className="ml-3 text-left">
                                                    <h3 className="text-lg font-medium text-gray-900">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-500">
                                                        {service.description}
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
                                        id={`services-body-${index}`}
                                        className="hidden"
                                        aria-labelledby={`services-heading-${index}`}
                                    >
                                        <div className="p-5">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                                {service.services.map(
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
                    <div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {service_cards.map((item, index) => (
                            <div class="bg-white rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
                                <div class="flex justify-center">
                                    <i
                                        className={`text-4xl text-blue-600 bi ${item.icon}`}
                                    ></i>
                                </div>
                                <h3 class="mt-4 text-xl font-medium text-gray-900 text-center">
                                    {item.title}
                                </h3>
                                <p class="mt-2 text-gray-600 text-center">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
