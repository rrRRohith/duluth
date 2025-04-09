import { Link, router } from "@inertiajs/react";

export default function Aside() {
    return (
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link
                            href={route("admin.index")}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <i class="bi bi-speedometer text-2xl"></i>
                            <span className="ms-3">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <button
                            type="button"
                            class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            aria-controls="pages"
                            data-collapse-toggle="pages"
                        >
                            <i class="bi bi-file-earmark text-2xl"></i>
                            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                                Pages
                            </span>
                            <i class="bi bi-chevron-down"></i>
                        </button>
                        <ul id="pages" class="hidden py-2 space-y-2">
                            <li>
                                <Link
                                    href={route("admin.pages.index")}
                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    All pages
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("admin.pages.create")}
                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    New page
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button
                            type="button"
                            class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            aria-controls="users"
                            data-collapse-toggle="users"
                        >
                            <i class="bi bi-people text-2xl"></i>
                            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                                Users
                            </span>
                            <i class="bi bi-chevron-down"></i>
                        </button>
                        <ul id="users" class="hidden py-2 space-y-2">
                            <li>
                                <Link
                                    href={route("admin.users.index")}
                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    All users
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("admin.users.create")}
                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    New user
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button
                            type="button"
                            class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            aria-controls="settings"
                            data-collapse-toggle="settings"
                        >
                            <i class="bi bi-gear text-2xl"></i>
                            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                                Settings
                            </span>
                            <i class="bi bi-chevron-down"></i>
                        </button>
                        <ul id="settings" class="hidden py-2 space-y-2">
                            <li>
                                <Link
                                    href={route("admin.menus.index")}
                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Navigation menu
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("admin.contact-settings.index")}
                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Contact settings
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("admin.service-descriptions.index")}
                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Service descriptions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("admin.equipment-descriptions.index")}
                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Equipment descriptions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("admin.videos.index")}
                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Video Gallery
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                router.post(route("logout"));
                            }}
                            href="#"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <i class="bi bi-box-arrow-right text-2xl"></i>
                            <span className="flex-1 ms-3 whitespace-nowrap">
                                Logout
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
