import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import Wrapper from "../Components/Wrapper";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import Select from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState, useEffect, use } from "react";

export default function Index({ service }) {
    const { data, setData, post, errors, processing } = useForm({
        title: service?.title,
        description: service?.description,
        icon: service?.icon,
        _method: service ? "PUT" : "POST",
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
