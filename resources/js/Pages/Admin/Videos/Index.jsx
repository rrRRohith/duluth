import PrimaryButton from "@/Components/PrimaryButton";
import { Link, router } from "@inertiajs/react";
import Wrapper from "../Components/Wrapper";
import ActionButton from "@/Components/ActionButton";

export default function Index({ videos }) {
    return (
        <Wrapper title="Video">
            <section>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            Video Gallery
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                           Manage your video gallery here. You can add, edit, or delete videos as needed.
                        </p>
                    </header>
                    <div className="mt-4 sm:mt-0">
                        <Link href={route("admin.videos.create")}>
                            <PrimaryButton>Create new video</PrimaryButton>
                        </Link>
                    </div>
                </div>
                <div className="mt-6 space-y-6">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Type
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Last updated
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {videos && videos.length > 0 ? (
                                    videos.map((video, index) => (
                                        <tr
                                            key={index}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                                        >
                                            <td className="px-6 py-4">
                                                {video.title}
                                            </td>
                                            <td className="px-6 py-4">
                                                {video.type_label}
                                            </td>
                                            <td className="px-6 py-4">
                                                {video.updated_at}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex space-x-4">
                                                    <Link
                                                        href={route(
                                                            "admin.videos.edit",
                                                            video.id
                                                        )}
                                                    >
                                                        <ActionButton>
                                                            <i className="bi bi-pencil m-auto text-lg"></i>
                                                        </ActionButton>
                                                    </Link>
                                                    <a
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            router.delete(
                                                                route(
                                                                    "admin.videos.destroy",
                                                                    video.id
                                                                )
                                                            );
                                                        }}
                                                    >
                                                        <ActionButton>
                                                            <i className="bi bi-trash m-auto text-lg"></i>
                                                        </ActionButton>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                        <td
                                            colSpan="10"
                                            className="px-6 py-4 text-center text-gray-500"
                                        >
                                            No records found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Wrapper>
    );
}
