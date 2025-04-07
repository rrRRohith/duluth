import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import Wrapper from "../Components/Wrapper";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useState, useEffect } from "react";
import ActionButton from "@/Components/ActionButton";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Index({ equipment }) {
    const { data, setData, post, errors, processing } = useForm({
        title: equipment?.title,
        description: equipment?.description,
        icon: equipment?.icon,
        _method: equipment ? "PUT" : "POST",
        equipments: equipment?.equipments || [],
    });

    const [content, setContent] = useState(data.content);

    useEffect(
        (e) => {
            setData("content", content);
        },
        [content]
    );

    const submit = (e) => {
        e.preventDefault();
        post(
            equipment
                ? route("admin.equipment-descriptions.update", equipment.id)
                : route("admin.equipment-descriptions.store")
        );
    };

    const addNewEquipment = () => {
        setData("equipments", [
            ...data.equipments,
            { title: "", description: "", id: Math.random() },
        ]);
    };

    return (
        <Wrapper title={equipment ? "Edit equipment" : "Create new equipment"}>
            <section>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            {equipment ? "Edit equipment" : "Create new equipment"}
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Manage your home page equipment descriptions.
                        </p>
                    </header>
                    <div className="mt-4 sm:mt-0">
                        <Link href={route("admin.equipment-descriptions.index")}>
                            <PrimaryButton>Back to equipments</PrimaryButton>
                        </Link>
                    </div>
                </div>
                <div className="mt-6 space-y-6">
                    <div className="max-w-xl">
                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <div className="mb-4">
                                <InputLabel value="Title" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    required
                                    isFocused
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.title}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Icon" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.icon}
                                    onChange={(e) =>
                                        setData("icon", e.target.value)
                                    }
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.icon}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Description" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.description}
                                />
                            </div>

                            <div>
                                <div>
                                    <h2 class="text-lg font-medium text-gray-900 mb-4">
                                        Equipments
                                    </h2>
                                    {data.equipments.map((item, index) => (
                                        <div
                                            key={item.id || index}
                                            className="mb-4 border-b pb-4"
                                        >
                                            <div className="mb-4 relative">
                                                <InputLabel value="Title" />
                                                <div className="flex gap-2 items-center">
                                                    <TextInput
                                                        className="mt-1 block w-full"
                                                        value={item.title}
                                                        onChange={(e) => {
                                                            const updatedEquipments =
                                                                [
                                                                    ...data.equipments,
                                                                ]; // Create a new array
                                                            updatedEquipments[
                                                                index
                                                            ].title =
                                                                e.target.value; // Update the specific equipment
                                                            setData(
                                                                "equipments",
                                                                updatedEquipments
                                                            ); // Set the updated array
                                                        }}
                                                    />
                                                    <ActionButton
                                                        className="mt-1"
                                                        title="Delete this item"
                                                        onClick={() => {
                                                            const updatedEquipments =
                                                                [
                                                                    ...data.equipments,
                                                                ];
                                                            updatedEquipments.splice(
                                                                index,
                                                                1
                                                            ); // Remove the equipment
                                                            setData(
                                                                "equipments",
                                                                updatedEquipments
                                                            );
                                                        }}
                                                    >
                                                        <i className="bi bi-trash m-auto text-lg"></i>
                                                    </ActionButton>
                                                </div>

                                                <InputError
                                                    className="mt-2"
                                                    message={
                                                        errors.equipments &&
                                                        errors.equipments[index]
                                                            ? errors.equipments[
                                                                  index
                                                              ].title
                                                            : ""
                                                    }
                                                />
                                            </div>

                                            <InputLabel value="Description" />
                                            <ReactQuill
                                                theme="snow"
                                                value={item.description}
                                                onChange={(e) => {
                                                    const updatedEquipments = [
                                                        ...data.equipments,
                                                    ];
                                                    updatedEquipments[index].description = e;
                                                    setData(
                                                        "equipments",
                                                        updatedEquipments
                                                    );
                                                }}
                                                style={{ height: "200px" }}
                                            ></ReactQuill>
                                            <div className="mb-10"></div>
                                            <InputError
                                                className="mt-2"
                                                message={
                                                    errors.equipments &&
                                                    errors.equipments[index]
                                                        ? errors.equipments[index]
                                                              .description
                                                        : ""
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                                <SecondaryButton
                                    type="button"
                                    onClick={addNewEquipment}
                                >
                                    Add new equipment
                                </SecondaryButton>
                            </div>

                            <div className="flex items-center gap-4">
                                <Link
                                    href={route(
                                        "admin.equipment-descriptions.index"
                                    )}
                                >
                                    <SecondaryButton type="button">
                                        Cancel
                                    </SecondaryButton>
                                </Link>
                                <PrimaryButton disabled={processing}>
                                    Save
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Wrapper>
    );
}
