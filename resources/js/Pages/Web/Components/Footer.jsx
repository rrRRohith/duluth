export default function Footer() {
    return (
        <>
            <footer class="bg-gray-900">
                <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div class="col-span-1 md:col-span-1">
                            <div class="flex items-center">
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
                                    class="lucide lucide-heart h-8 w-8 text-blue-500"
                                >
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                </svg>
                                <span class="ml-2 text-xl font-bold text-white">
                                    Duluth Health Care Systems
                                </span>
                            </div>
                            <p class="mt-4 text-gray-300">
                                Providing exceptional home health care services
                                to the Duluth community since 1995.
                            </p>
                        </div>
                        <div>
                            <h3 class="text-white font-semibold mb-4">
                                Admin Portal
                            </h3>
                            <ul class="space-y-2">
                                <li class="flex items-center">
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
                                        class="lucide lucide-star h-4 w-4 text-blue-500 mr-2"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                    <a
                                        href="#reviews"
                                        class="text-gray-300 hover:text-white"
                                    >
                                        Reviews
                                    </a>
                                </li>
                                <li class="flex items-center">
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
                                        class="lucide lucide-briefcase h-4 w-4 text-blue-500 mr-2"
                                    >
                                        <rect
                                            width="20"
                                            height="14"
                                            x="2"
                                            y="7"
                                            rx="2"
                                            ry="2"
                                        ></rect>
                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                    </svg>
                                    <a
                                        href="#careers"
                                        class="text-gray-300 hover:text-white"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li class="flex items-center">
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
                                        class="lucide lucide-graduation-cap h-4 w-4 text-blue-500 mr-2"
                                    >
                                        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                                        <path d="M22 10v6"></path>
                                        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                                    </svg>
                                    <a
                                        href="#training"
                                        class="text-gray-300 hover:text-white"
                                    >
                                        Training
                                    </a>
                                </li>
                                <li class="flex items-center">
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
                                        class="lucide lucide-file-box h-4 w-4 text-blue-500 mr-2"
                                    >
                                        <path d="M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
                                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                        <path d="M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z"></path>
                                        <path d="M7 17v5"></path>
                                        <path d="M11.7 14.2 7 17l-4.7-2.8"></path>
                                    </svg>
                                    <a
                                        href="#documentation"
                                        class="text-gray-300 hover:text-white"
                                    >
                                        Documentation
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-white font-semibold mb-4">
                                Resources
                            </h3>
                            <ul class="space-y-2">
                                <li class="flex items-center">
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
                                        class="lucide lucide-book-open h-4 w-4 text-blue-500 mr-2"
                                    >
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                    </svg>
                                    <a
                                        href="#videos"
                                        class="text-gray-300 hover:text-white"
                                    >
                                        Training Videos
                                    </a>
                                </li>
                                <li class="flex items-center">
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
                                        class="lucide lucide-file-text h-4 w-4 text-blue-500 mr-2"
                                    >
                                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                        <path d="M10 9H8"></path>
                                        <path d="M16 13H8"></path>
                                        <path d="M16 17H8"></path>
                                    </svg>
                                    <a
                                        href="#store"
                                        class="text-gray-300 hover:text-white"
                                    >
                                        Supply Store
                                    </a>
                                </li>
                                <li class="flex items-center">
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
                                        class="lucide lucide-message-square h-4 w-4 text-blue-500 mr-2"
                                    >
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    <a
                                        href="#support"
                                        class="text-gray-300 hover:text-white"
                                    >
                                        Support Chat
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-white font-semibold mb-4">
                                Contact
                            </h3>
                            <ul class="space-y-2">
                                <li class="text-gray-300">
                                    1254 Beaver ruin Rd
                                </li>
                                <li class="text-gray-300">Ste 302</li>
                                <li class="text-gray-300">
                                    Norcross, GA 30093
                                </li>
                                <li class="text-gray-300">866-235-2448</li>
                                <li class="text-gray-300">
                                    info@duluthhealthcare.com
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-8 pt-8 border-t border-gray-700">
                        <p class="text-center text-gray-400">
                            © 2025 Duluth Health Care Systems. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
