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
import Select from "react-select";

export default function Index({ service }) {
    const { data, setData, post, errors, processing } = useForm({
        title: service?.title,
        description: service?.description,
        icon: service?.icon,
        type: service?.type || "accordion",
        _method: service ? "PUT" : "POST",
        services: service?.services || [],
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
            service
                ? route("admin.service-descriptions.update", service.id)
                : route("admin.service-descriptions.store")
        );
    };

    const addNewService = () => {
        setData("services", [
            ...data.services,
            { title: "", description: "", id: Math.random() },
        ]);
    };
    const types = [
        { value: "accordion", label: "Accordion" },
        { value: "card", label: "Card" },
    ];
    const selectedType = types.find((type) => type.value === data.type);

    return (
        <Wrapper title={service ? "Edit service" : "Create new service"}>
            <section>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            {service ? "Edit service" : "Create new service"}
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Manage your home page service descriptions.
                        </p>
                    </header>
                    <div className="mt-4 sm:mt-0">
                        <Link href={route("admin.service-descriptions.index")}>
                            <PrimaryButton>Back to services</PrimaryButton>
                        </Link>
                    </div>
                </div>
                <div className="mt-6 space-y-6">
                    <div className="max-w-xl">
                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <div className="mb-4">
                                <InputLabel value="Type" />
                                <Select
                                    options={types}
                                    defaultValue={selectedType}
                                    onChange={(e) => setData("type", e.value)}
                                    className="mt-1 block w-full"
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.type}
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

                            {data.type === "accordion" && (
                                <div>
                                    <div>
                                        <h2 class="text-lg font-medium text-gray-900 mb-4">
                                            Services
                                        </h2>
                                        {data.services.map((item, index) => (
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
                                                                const updatedServices =
                                                                    [
                                                                        ...data.services,
                                                                    ]; // Create a new array
                                                                updatedServices[
                                                                    index
                                                                ].title =
                                                                    e.target.value; // Update the specific service
                                                                setData(
                                                                    "services",
                                                                    updatedServices
                                                                ); // Set the updated array
                                                            }}
                                                        />
                                                        <ActionButton
                                                            className="mt-1"
                                                            title="Delete this item"
                                                            onClick={() => {
                                                                const updatedServices =
                                                                    [
                                                                        ...data.services,
                                                                    ];
                                                                updatedServices.splice(
                                                                    index,
                                                                    1
                                                                ); // Remove the service
                                                                setData(
                                                                    "services",
                                                                    updatedServices
                                                                );
                                                            }}
                                                        >
                                                            <i className="bi bi-trash m-auto text-lg"></i>
                                                        </ActionButton>
                                                    </div>

                                                    <InputError
                                                        className="mt-2"
                                                        message={
                                                            errors.services &&
                                                            errors.services[
                                                                index
                                                            ]
                                                                ? errors
                                                                      .services[
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
                                                        const updatedServices =
                                                            [...data.services];
                                                        updatedServices[
                                                            index
                                                        ].description = e;
                                                        setData(
                                                            "services",
                                                            updatedServices
                                                        );
                                                    }}
                                                    style={{ height: "200px" }}
                                                ></ReactQuill>
                                                <div className="mb-10"></div>
                                                <InputError
                                                    className="mt-2"
                                                    message={
                                                        errors.services &&
                                                        errors.services[index]
                                                            ? errors.services[
                                                                  index
                                                              ].description
                                                            : ""
                                                    }
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <SecondaryButton
                                        type="button"
                                        onClick={addNewService}
                                    >
                                        Add new service
                                    </SecondaryButton>
                                </div>
                            )}

                            <div className="flex items-center gap-4">
                                <Link
                                    href={route(
                                        "admin.service-descriptions.index"
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
