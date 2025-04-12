import PrimaryButton from "@/Components/PrimaryButton";
import Wrapper from "../Components/Wrapper";
import VideoCard from "./VideoCard";
import SecondaryButton from "@/Components/SecondaryButton";
import { Link } from "@inertiajs/react";
import ActionButton from "@/Components/ActionButton";

export default function Index({ video, type }) {
    return (
        <Wrapper title={video.title}>
            <div className="container m-auto px-4 py-44 sm:px-6 lg:px-8">
                <div className="text-start mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                        {video.title}
                    </h2>
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                
                                <Link
                                    href={route("home")}
                                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                >
                                    <i className="bi bi-house mr-1" />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <i className="bi bi-chevron-right" />
                                    <Link
                                        href={route("videos.index")}
                                        className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        Videos
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <i className="bi bi-chevron-right" />
                                    <Link
                                        href={route("videos.type", type.handle)}
                                        className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        {type.title}
                                    </Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <i className="bi bi-chevron-right" />
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                                        {video.title}
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>

                    <div
                        className="my-4 text-gray-600 text-start"
                        dangerouslySetInnerHTML={{ __html: video?.description }}
                    ></div>
                    <div>
                        <video src={video.video_url} className="w-full" controls></video>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
