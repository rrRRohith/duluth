import { usePage } from "@inertiajs/react";

export default function Banner() {
    const { banner_settings } = usePage().props;

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
                            {banner_settings?.title}
                        </h1>
                        <p className="mt-6 text-xl text-white max-w-2xl mx-auto">
                            {banner_settings?.description}
                        </p>
                        <div className="mt-10 flex justify-center space-x-4">
                            {banner_settings?.button1_text && (
                                <a
                                    href={banner_settings.button1_link}
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
                                >
                                    {banner_settings.button1_text}
                                </a>
                            )}
                            {banner_settings?.button2_text && (
                                <a
                                    href={banner_settings.button2_link}
                                    className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800 hover:bg-opacity-20"
                                >
                                    {banner_settings.button2_text}
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {banner_settings?.descriptions?.map(
                            (item, index) => (
                                <div
                                    key={index}
                                    className="bg-blue-800 bg-opacity-50 backdrop-blur-lg rounded-lg p-6 border border-blue-700"
                                >
                                    <div className="flex items-center">
                                        {item.icon && (
                                            <i className={`bi ${item.icon} text-xl text-white mr-3`} />
                                        )}
                                        <h3 className="text-lg font-medium text-white">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="mt-2 text-blue-100">
                                        {item.description}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
