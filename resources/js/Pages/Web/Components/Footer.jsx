import { usePage, Link } from "@inertiajs/react";
import classNames from "classnames";

export default function Footer() {
    const { site_settings, contact_info } = usePage().props;
    const { footer_menus } = usePage().props;

    return (
        <>
            <footer class="bg-gray-900">
                <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div class="col-span-1 md:col-span-1">
                            <div class="flex items-center">
                                <i className="bi bi-heart text-blue-600 text-2xl mr-3 flex items-center"></i>
                                <span class="ml-2 text-xl font-bold text-white">
                                    {site_settings?.name}
                                </span>
                            </div>
                            <p class="mt-4 text-gray-300">
                                {site_settings.footer_description}
                            </p>
                        </div>
                        {footer_menus.map((menu, index) => (
                            <>
                                {menu && menu.children && (
                                    <>
                                        <div>
                                            <h3 class="text-white font-semibold mb-4">
                                                {menu.title}
                                            </h3>
                                            <ul class="space-y-2">
                                                {menu.children.map(
                                                    (item, index) => (
                                                        <li class="flex items-center">
                                                            {item.icon && (
                                                                <i
                                                                    className={`bi ${item.icon} text-blue-500 mr-2`}
                                                                />
                                                            )}
                                                            <Link
                                                                href={item.link}
                                                                class="text-gray-300 hover:text-white"
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </>
                                )}
                            </>
                        ))}
                        <div>
                            <h3 class="text-white font-semibold mb-4">
                                Contact
                            </h3>
                            <ul class="space-y-2">
                                <li class="text-gray-300">
                                    {contact_info?.address}
                                </li>
                                <li class="text-gray-300">
                                    {contact_info?.phone}
                                </li>
                                <li class="text-gray-300">
                                    {contact_info?.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-8 pt-8 border-t border-gray-700">
                        <p class="text-center text-gray-400">
                            {site_settings?.copyright_description}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
