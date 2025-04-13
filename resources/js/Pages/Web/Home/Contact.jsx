import { usePage } from "@inertiajs/react";

export default function Contact() {
    const { contact_info } = usePage().props;
    const {home_page_settings} =  usePage().props;
    return (
        <>
            <div className="py-24 bg-white">
                <div className="container m-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            {home_page_settings?.contact?.title}
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            {home_page_settings?.contact?.description}
                        </p>
                    </div>
                    <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <i className="bi bi-telephone text-xl text-blue-600" />

                                    <span className="ml-3 text-gray-700">
                                        {contact_info.phone}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <i className="bi bi-envelope text-xl text-blue-600" />
                                    <span className="ml-3 text-gray-700">
                                        {contact_info.email}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <i className="bi bi-geo-alt text-xl text-blue-600" />

                                    <span className="ml-3 text-gray-700">
                                        {contact_info.address}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    defaultValue={""}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
