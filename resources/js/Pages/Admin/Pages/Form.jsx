import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import Wrapper from "../Components/Wrapper";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import Select from "react-select";

export default function Index({ page }) {
    const { data, setData, post, errors, processing } = useForm({
        title: page?.title,
        handle: page?.handle,
        status: page?.status,
        content: page?.content,
        meta_title: page?.meta_title,
        meta_description: page?.meta_description,
        meta_keywords: page?.meta_keywords,
        _method: page ? "PUT" : "POST",
    });

    const submit = (e) => {
        e.preventDefault();
        post(
            page
                ? route("admin.pages.update", page.id)
                : route("admin.pages.store")
        );
    };

    return (
        <Wrapper title={page ? "Edit page" : "Create new page"}>
            <section>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            {page ? "Edit page" : "Create new page"}
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Manage your site content pages.
                        </p>
                    </header>
                    <div className="mt-4 sm:mt-0">
                        <Link href={route("admin.pages.index")}>
                            <PrimaryButton>Back to pages</PrimaryButton>
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
                                <InputLabel value="Content" />

                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.content}
                                    onChange={(e) =>
                                        setData("content", e.target.value)
                                    }
                                    required
                                    isFocused
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.content}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Meta title" />

                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.meta_title}
                                    onChange={(e) =>
                                        setData("meta_title", e.target.value)
                                    }
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.meta_title}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Meta description" />

                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.meta_description}
                                    onChange={(e) =>
                                        setData(
                                            "meta_description",
                                            e.target.value
                                        )
                                    }
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.meta_description}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Meta keywords" />

                                <TextInput
                                    className="mt-1 block w-full"
                                    value={data.meta_keywords}
                                    onChange={(e) =>
                                        setData("meta_keywords", e.target.value)
                                    }
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.meta_keywords}
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel value="Status" />

                                <Select
                                    className="mt-1 block w-full"
                                    options={[
                                        { value: "draft", label: "Draft" },
                                        {
                                            value: "published",
                                            label: "Published",
                                        },
                                    ]}
                                    defaultValue={{
                                        value: page?.status,
                                        label: page?.status,
                                    }}
                                    onChange={(e) => setData("status", e.value)}
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.status}
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <Link href={route("admin.pages.index")}>
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
