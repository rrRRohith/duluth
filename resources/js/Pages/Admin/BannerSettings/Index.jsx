import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import Wrapper from "../Components/Wrapper";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useState, useEffect, use } from "react";
import { Textarea } from "flowbite-react";
import ActionButton from "@/Components/ActionButton";

export default function Index({ settings }) {
    const { data, setData, post, errors, processing } = useForm({
        title: settings?.title,
        description: settings?.description,
        button1_text: settings?.button1_text,
        button1_link: settings?.button1_link,
        button2_text: settings?.button2_text,
        button2_link: settings?.button2_link,
        image: settings?.image,
        button3_text: settings?.button3_text,
        descriptions: settings?.descriptions || [],
    });

    const addDescriptionBox = () => {
        setData("descriptions", [
            ...data.descriptions,
            { id: Math.random(), title: "", description: "", icon: "" },
        ]);
    };

    const removeDescriptionBox = (id) => {
        const newDescriptionBoxes = data.descriptions.filter(
            (box) => box.id !== id
        );
        setData("descriptions", newDescriptionBoxes);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.banner-settings.store"));
    };

    return (
        <Wrapper title="Banner settings">
            <section>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            Banner settings
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Setup your banner settings here.
                        </p>
                    </header>
                </div>
                <div className="mt-6 space-y-6">
                    <div className="max-w-xl">
                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <div className="mb-4">
                                <InputLabel value="Banner Image" />

                                <div>
                                    <input
                                        onChange={(e) =>
                                            setData("file", e.target.files[0])
                                        }
                                        accept="image/*"
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                                        type="file"
                                    />
                                    <p className="mt-1 text-sm text-gray-500">
                                        jpeg,png,jpg,gif,svg(Max 2MB)
                                    </p>
                                </div>
                                <InputError
                                    className="mt-2"
                                    message={errors.file}
                                />
                            </div>
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
                                <InputLabel value="Description" />
                                <Textarea
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
                            <div className="mb-4">
                                <InputLabel value="Button 1 Text" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.button1_text}
                                    onChange={(e) =>
                                        setData("button1_text", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.button1_text}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Button 1 URL" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.button1_link}
                                    onChange={(e) =>
                                        setData("button1_link", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.button1_link}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Button 2 Text" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.button2_text}
                                    onChange={(e) =>
                                        setData("button2_text", e.target.value)
                                    }
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.button2_text}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Button 2 URL" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.button2_link}
                                    onChange={(e) =>
                                        setData("button2_link", e.target.value)
                                    }
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.button2_link}
                                />
                            </div>

                            <div>
                                <div>
                                    <h2 class="text-lg font-medium text-gray-900 mb-4">
                                        Descriptions
                                    </h2>
                                    {data.descriptions.map((item, index) => (
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
                                                            const updatedDescriptions =
                                                                [
                                                                    ...data.descriptions,
                                                                ]; // Create a new array
                                                            updatedDescriptions[
                                                                index
                                                            ].title =
                                                                e.target.value; // Update the specific service
                                                            setData(
                                                                "descriptions",
                                                                updatedDescriptions
                                                            ); // Set the updated array
                                                        }}
                                                    />
                                                    <ActionButton
                                                        className="mt-1"
                                                        title="Delete this item"
                                                        onClick={() => {
                                                            const updatedDescriptions =
                                                                [
                                                                    ...data.descriptions,
                                                                ];
                                                            updatedDescriptions.splice(
                                                                index,
                                                                1
                                                            ); // Remove the service
                                                            setData(
                                                                "descriptions",
                                                                updatedDescriptions
                                                            );
                                                        }}
                                                    >
                                                        <i className="bi bi-trash m-auto text-lg"></i>
                                                    </ActionButton>
                                                </div>

                                                <InputError
                                                    className="mt-2"
                                                    message={
                                                        errors.descriptions &&
                                                        errors.descriptions[
                                                            index
                                                        ]
                                                            ? errors
                                                                  .descriptions[
                                                                  index
                                                              ].title
                                                            : ""
                                                    }
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <InputLabel value="Description" />
                                                <Textarea
                                                    className="mt-1 block w-full"
                                                    value={item.description}
                                                    onChange={(e) => {
                                                        const updatedDescriptions =
                                                            [
                                                                ...data.descriptions,
                                                            ]; // Create a new array
                                                        updatedDescriptions[
                                                            index
                                                        ].description =
                                                            e.target.value; // Update the specific service
                                                        setData(
                                                            "descriptions",
                                                            updatedDescriptions
                                                        ); // Set the updated array
                                                    }}
                                                />

                                                <InputError
                                                    className="mt-2"
                                                    message={
                                                        errors.descriptions &&
                                                        errors.descriptions[
                                                            index
                                                        ]
                                                            ? errors
                                                                  .descriptions[
                                                                  index
                                                              ].description
                                                            : ""
                                                    }
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <InputLabel value="Icon" />
                                                <TextInput
                                                    className="mt-1 block w-full"
                                                    value={item.icon}
                                                    onChange={(e) => {
                                                        const updatedDescriptions =
                                                            [
                                                                ...data.descriptions,
                                                            ]; // Create a new array
                                                        updatedDescriptions[
                                                            index
                                                        ].icon = e.target.value; // Update the specific service
                                                        setData(
                                                            "descriptions",
                                                            updatedDescriptions
                                                        ); // Set the updated array
                                                    }}
                                                />

                                                <InputError
                                                    className="mt-2"
                                                    message={
                                                        errors.descriptions &&
                                                        errors.descriptions[
                                                            index
                                                        ]
                                                            ? errors
                                                                  .descriptions[
                                                                  index
                                                              ].icon
                                                            : ""
                                                    }
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <SecondaryButton
                                    type="button"
                                    onClick={addDescriptionBox}
                                >
                                    Add new description
                                </SecondaryButton>
                            </div>

                            <div className="flex items-center gap-4">
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
