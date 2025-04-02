import PrimaryButton from "@/Components/PrimaryButton";
import { Link, router } from "@inertiajs/react";
import Wrapper from "../Components/Wrapper";
import ActionButton from "@/Components/ActionButton";

export default function Index({ menus }) {
    return (
        <Wrapper title="Menus">
            <section>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            Navigation menus
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Manage site navigations and links
                        </p>
                    </header>
                    <div className="mt-4 sm:mt-0">
                        <Link href={route("admin.menus.create")}>
                            <PrimaryButton>Create new menu</PrimaryButton>
                        </Link>
                    </div>
                </div>
                <div className="mt-6 space-y-6">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Menu Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {menus && menus.length > 0 ? (
                                    menus.map((menu, index) => (
                                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {menu.title}
                                            </th>
                                            <td className="px-6 py-4 flex space-x-4">
                                                <Link
                                                    href={route(
                                                        "admin.menus.edit",
                                                        menu.id
                                                    )}
                                                >
                                                    <ActionButton>
                                                        <i className="bi bi-pencil m-auto text-lg"></i>
                                                    </ActionButton>
                                                </Link>
                                                <a
                                                    onClick={(e) => { e.preventDefault(); router.delete(route("admin.menus.destroy", menu.id)) }}
                                                >
                                                    <ActionButton>
                                                        <i className="bi bi-trash m-auto text-lg"></i>
                                                    </ActionButton>
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                        <td
                                            colSpan="2"
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
