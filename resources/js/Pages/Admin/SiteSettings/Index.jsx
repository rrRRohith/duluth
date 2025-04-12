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
        name: settings?.name,
        logo: settings?.logo,
        footer_description: settings?.footer_description,
        copyright_description: settings?.copyright_description,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.site-settings.store"));
    };

    return (
        <Wrapper title="Site settings">
            <section>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            Site settings
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Setup site informations
                        </p>
                    </header>
                </div>
                <div className="mt-6 space-y-6">
                    <div className="max-w-xl">
                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <div className="mb-4">
                                <InputLabel value="Name" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.name}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Logo Image" />

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
                                <InputLabel value="Footer description" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.footer_description}
                                    onChange={(e) =>
                                        setData(
                                            "footer_description",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.footer_description}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Copyright description" />
                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.copyright_description}
                                    onChange={(e) =>
                                        setData(
                                            "copyright_description",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.copyright_description}
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
