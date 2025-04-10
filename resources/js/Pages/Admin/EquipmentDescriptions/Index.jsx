import PrimaryButton from "@/Components/PrimaryButton";
import { Link, router } from "@inertiajs/react";
import Wrapper from "../Components/Wrapper";
import ActionButton from "@/Components/ActionButton";

export default function Index({ equipments }) {
    return (
        <Wrapper title="Equipment descriptions">
            <section>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            Equipment descriptions
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Manage your home page equipment descriptions.
                        </p>
                    </header>
                    <div className="mt-4 sm:mt-0">
                        <Link href={route("admin.equipment-descriptions.create")}>
                            <PrimaryButton>Create equipment</PrimaryButton>
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
                                        Description
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
                                {equipments && equipments.length > 0 ? (
                                    equipments.map((equipment, index) => (
                                        <tr
                                            key={index}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                                        >
                                            <td className="px-6 py-4">
                                                {equipment.title}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="max-w-[300px] truncate">{equipment.description}</div>
                                            </td>
                                            <td className="px-6 py-4 capitalize">
                                                {equipment.created_at}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex space-x-4">
                                                    <Link
                                                        href={route(
                                                            "admin.equipment-descriptions.edit",
                                                            equipment.id
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
                                                                    "admin.equipment-descriptions.destroy",
                                                                    equipment.id
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
