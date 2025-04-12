import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import Wrapper from "../Components/Wrapper";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useState, useEffect, use } from "react";

export default function Index({ settings }) {
    const { data, setData, post, errors, processing } = useForm({
        settings: settings?.settings,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.home-page-settings.store"));
    };

    const updateNestedSetting = (section, field, value) => {
        setData((prevData) => ({
            ...prevData,
            settings: {
                ...prevData.settings,
                [section]: {
                    ...prevData.settings?.[section],
                    [field]: value,
                },
            },
        }));
    };

    return (
        <Wrapper title="Home page settings">
            <section>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            Home page settings
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Home page informations
                        </p>
                    </header>
                </div>
                <div className="mt-6 space-y-6">
                    <div className="max-w-xl">
                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <h2 class="text-lg font-medium text-gray-900 mb-4">
                                Services
                            </h2>
                            <div className="mb-4">
                                <InputLabel value="Title" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.settings?.services?.title}
                                    onChange={(e) =>
                                        updateNestedSetting(
                                            "services", "title",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.settings?.services.title}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Description" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.settings?.services?.description}
                                    onChange={(e) =>
                                        updateNestedSetting(
                                            "services", "description",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.settings?.services?.description}
                                />
                            </div>
                            <h2 class="text-lg font-medium text-gray-900 mb-4">
                                Equipments
                            </h2>

                            <div className="mb-4">
                                <InputLabel value="Title" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.settings?.equipments?.title}
                                    onChange={(e) =>
                                        updateNestedSetting(
                                           "equipments", "title",
                                            e.target.value
                                        )
                                    }
                                    required
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.settings?.equipments?.title}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Description" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={
                                        data.settings?.equipments?.description
                                    }
                                    onChange={(e) =>
                                        updateNestedSetting(
                                            "equipments", "description",
                                            e.target.value
                                        )
                                    }
                                    required
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.settings?.equipments?.description}
                                />
                            </div>
                            <h2 class="text-lg font-medium text-gray-900 mb-4">
                                Video
                            </h2>

                            <div className="mb-4">
                                <InputLabel value="Title" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.settings?.video?.title}
                                    onChange={(e) =>
                                        updateNestedSetting(
                                            "video", "title",
                                            e.target.value
                                        )
                                    }
                                    required
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.settings?.video?.title}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Description" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={
                                        data.settings?.video?.description
                                    }
                                    onChange={(e) =>
                                        updateNestedSetting(
                                            "video", "description",
                                            e.target.value
                                        )
                                    }
                                    required
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.settings?.video?.description}
                                />
                            </div>

                            <h2 class="text-lg font-medium text-gray-900 mb-4">
                                Contact
                            </h2>
                            <div className="mb-4">
                                <InputLabel value="Title" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.settings?.contact?.title}
                                    onChange={(e) =>
                                        updateNestedSetting(
                                            "contact", "title",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.settings?.contact?.title}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Description" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={
                                        data.settings?.contact?.description
                                    }
                                    onChange={(e) =>
                                        updateNestedSetting(
                                            "contact", "description",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.settings?.contact?.description}
                                />
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
